<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Berita;
use App\Models\Organisasi;
use App\Models\Image; // Import model Image
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        $query = Berita::with(['user', 'organisasi', 'image'])->latest(); // Tambah relasi image
        
        // Jika admin organisasi, hanya tampilkan berita organisasinya
        if ($user->isAdminOrganisasi()) {
            $query->where('organisasi_id', $user->organisasi_id);
        }
        
        $berita = $query->paginate(10);
        
        return Inertia::render('Admin/Berita/Index', [
            'berita' => $berita,
            'userRole' => $user->role,
        ]);
    }

    public function create()
    {
        $user = auth()->user();
        $organisasis = Organisasi::where('is_active', true)->get();
        
        return Inertia::render('Admin/Berita/Create', [
            'organisasis' => $organisasis,
            'userRole' => $user->role,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'konten' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'organisasi_id' => 'nullable|exists:organisasis,id',
            'is_published' => 'boolean',
        ]);

        echo "Hallo";

        $user = auth()->user();
        
        $data = $request->all();
        
        $data['is_published'] = true;
        $data['user_id'] = $user->id;
        
        // Jika admin organisasi, set organisasi_id dari user
        if ($user->isAdminOrganisasi()) {
            $data['organisasi_id'] = $user->organisasi_id;
        }
        
        // Proses upload gambar ke database
        if ($request->hasFile('gambar')) {
            try {
                // Simpan gambar ke tabel images
                $image = Image::storeFromUploadedFile($request->file('gambar'));
                $data['image_id'] = $image->id;
            } catch (\Exception $e) {
                return redirect()->back()
                    ->withErrors(['gambar' => 'Gagal menyimpan gambar: ' . $e->getMessage()])
                    ->withInput();
            }
        }
        
        // Hapus key 'gambar' dari data karena kita pakai 'image_id'
        unset($data['gambar']);
        
        Berita::create($data);
        
        return redirect()->route('admin.dashboard')
            ->with('success', 'Berita berhasil dibuat!');
    }

    public function show(Berita $berita)
    {
        $berita->load(['user', 'organisasi', 'image']); // Tambah relasi image
        
        return Inertia::render('Admin/Berita/Show', [
            'berita' => $berita,
        ]);
    }

    public function edit(Berita $berita)
    {
        $user = auth()->user();
        
        // Cek akses untuk admin organisasi
        if ($user->isAdminOrganisasi() && $berita->organisasi_id !== $user->organisasi_id) {
            abort(403, 'Akses ditolak.');
        }
        
        $berita->load('image'); // Load relasi image
        $organisasis = Organisasi::where('is_active', true)->get();
        
        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $berita,
            'organisasis' => $organisasis,
            'userRole' => $user->role,
        ]);
    }

    public function update(Request $request, Berita $berita)
    {
        $user = auth()->user();
        
        // Cek akses untuk admin organisasi
        if ($user->isAdminOrganisasi() && $berita->organisasi_id !== $user->organisasi_id) {
            abort(403, 'Akses ditolak.');
        }
        
        $request->validate([
            'judul' => 'required|string|max:255',
            'konten' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'organisasi_id' => 'nullable|exists:organisasis,id',
            'is_published' => 'boolean',
        ]);

        $data = $request->all();
        
        // Jika admin organisasi, set organisasi_id dari user
        if ($user->isAdminOrganisasi()) {
            $data['organisasi_id'] = $user->organisasi_id;
        }
        
        // Proses upload gambar baru
        if ($request->hasFile('gambar')) {
            try {
                DB::transaction(function () use ($request, $berita, &$data) {
                    // Hapus gambar lama jika ada
                    if ($berita->image_id) {
                        $oldImage = Image::find($berita->image_id);
                        if ($oldImage) {
                            $oldImage->delete();
                        }
                    }
                    
                    // Simpan gambar baru ke database
                    $image = Image::storeFromUploadedFile($request->file('gambar'));
                    $data['image_id'] = $image->id;
                });
            } catch (\Exception $e) {
                return redirect()->back()
                    ->withErrors(['gambar' => 'Gagal memperbarui gambar: ' . $e->getMessage()])
                    ->withInput();
            }
        }
        
        // Hapus key 'gambar' dari data
        unset($data['gambar']);
        
        $berita->update($data);
        
        return redirect()->route('admin.berita.index')
            ->with('success', 'Berita berhasil diperbarui!');
    }

    public function destroy(Berita $berita)
    {
        $user = auth()->user();
        
        // Cek akses untuk admin organisasi
        if ($user->isAdminOrganisasi() && $berita->organisasi_id !== $user->organisasi_id) {
            abort(403, 'Akses ditolak.');
        }
        
        try {
            DB::transaction(function () use ($berita) {
                // Hapus gambar dari database jika ada
                if ($berita->image_id) {
                    $image = Image::find($berita->image_id);
                    if ($image) {
                        $image->delete();
                    }
                }
                
                // Hapus berita
                $berita->delete();
            });
        } catch (\Exception $e) {
            return redirect()->route('admin.berita.index')
                ->withErrors(['error' => 'Gagal menghapus berita: ' . $e->getMessage()]);
        }
        
        return redirect()->route('admin.berita.index')
            ->with('success', 'Berita berhasil dihapus!');
    }

    /**
     * Method tambahan untuk menampilkan gambar berita
     */
    public function showImage(Berita $berita)
    {
        if (!$berita->image) {
            abort(404, 'Gambar tidak ditemukan');
        }

        return response($berita->image->blob_data, 200)
               ->header('Content-Type', $berita->image->mime_type)
               ->header('Content-Disposition', 'inline; filename="' . $berita->image->filename . '"')
               ->header('Cache-Control', 'public, max-age=86400');
    }

    /**
     * Method untuk download gambar berita
     */
    public function downloadImage(Berita $berita)
    {
        if (!$berita->image) {
            abort(404, 'Gambar tidak ditemukan');
        }

        return response($berita->image->blob_data, 200)
               ->header('Content-Type', $berita->image->mime_type)
               ->header('Content-Disposition', 'attachment; filename="' . $berita->image->filename . '"');
    }
}