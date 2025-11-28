<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Fasilitas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FasilitasController extends Controller
{
    public function index()
    {
        $fasilitas = Fasilitas::with('user')->latest()->paginate(10);
        
        return Inertia::render('Admin/Fasilitas/Index', [
            'fasilitas' => $fasilitas,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Fasilitas/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean',
        ]);

        $data = $request->all();
        $data['user_id'] = auth()->id();
        $data['is_published'] = true;
        
        // Upload gambar jika ada
        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('fasilitas', 'public');
        }
        
        Fasilitas::create($data);
        
        return redirect()->route('admin.dashboard')
            ->with('success', 'Fasilitas berhasil dibuat!');
    }

    public function show(Fasilitas $fasilitas)
    {
        $fasilitas->load('user');
        
        return Inertia::render('Admin/Fasilitas/Show', [
            'fasilitas' => $fasilitas,
        ]);
    }

    public function edit(Fasilitas $fasilitas)
    {
        return Inertia::render('Admin/Fasilitas/Edit', [
            'fasilitas' => $fasilitas,
        ]);
    }

    public function update(Request $request, Fasilitas $fasilitas)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'lokasi' => 'nullable|string|max:255',
            'kategori' => 'nullable|string|max:255',
            'is_published' => 'boolean',
        ]);

        $data = $request->all();
        
        // Upload gambar jika ada
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama
            if ($fasilitas->gambar) {
                Storage::disk('public')->delete($fasilitas->gambar);
            }
            $data['gambar'] = $request->file('gambar')->store('fasilitas', 'public');
        }
        
        $fasilitas->update($data);
        
        return redirect()->route('admin.fasilitas.index')
            ->with('success', 'Fasilitas berhasil diperbarui!');
    }

    public function destroy(Fasilitas $fasilitas)
    {
        // Hapus gambar jika ada
        if ($fasilitas->gambar) {
            Storage::disk('public')->delete($fasilitas->gambar);
        }
        
        $fasilitas->delete();
        
        return redirect()->route('admin.fasilitas.index')
            ->with('success', 'Fasilitas berhasil dihapus!');
    }
}
