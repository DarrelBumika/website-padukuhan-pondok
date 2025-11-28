<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prestasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PrestasiController extends Controller
{
    public function index()
    {
        $prestasi = Prestasi::with('user')->latest()->paginate(10);
        
        return Inertia::render('Admin/Prestasi/Index', [
            'prestasi' => $prestasi,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Prestasi/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean',
        ]);

        $data = $request->all();
        $data['user_id'] = auth()->id();
        $data['is_publised'] = true;

        // Upload gambar jika ada
        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('prestasi', 'public');
        }
        
        Prestasi::create($data);
        
        return redirect()->route('admin.prestasi.index')
            ->with('success', 'Prestasi berhasil dibuat!');
    }

    public function show(Prestasi $prestasi)
    {
        $prestasi->load('user');
        
        return Inertia::render('Admin/Prestasi/Show', [
            'prestasi' => $prestasi,
        ]);
    }

    public function edit(Prestasi $prestasi)
    {
        return Inertia::render('Admin/Prestasi/Edit', [
            'prestasi' => $prestasi,
        ]);
    }

    public function update(Request $request, Prestasi $prestasi)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tanggal_prestasi' => 'required|date',
            'penghargaan' => 'nullable|string|max:255',
            'is_published' => 'boolean',
        ]);

        $data = $request->all();
        
        // Upload gambar jika ada
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama
            if ($prestasi->gambar) {
                Storage::disk('public')->delete($prestasi->gambar);
            }
            $data['gambar'] = $request->file('gambar')->store('prestasi', 'public');
        }
        
        $prestasi->update($data);
        
        return redirect()->route('admin.prestasi.index')
            ->with('success', 'Prestasi berhasil diperbarui!');
    }

    public function destroy(Prestasi $prestasi)
    {
        // Hapus gambar jika ada
        if ($prestasi->gambar) {
            Storage::disk('public')->delete($prestasi->gambar);
        }
        
        $prestasi->delete();
        
        return redirect()->route('admin.prestasi.index')
            ->with('success', 'Prestasi berhasil dihapus!');
    }
}
