<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Prestasi;
use App\Models\Fasilitas;
use App\Models\Organisasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function beranda()
    {
        $beritaTerbaru = Berita::where('is_published', true)
            ->with(['user', 'organisasi'])
            ->latest()
            ->limit(6)
            ->get();
            
        $prestasiTerbaru = Prestasi::where('is_published', true)
            ->with('user')
            ->latest()
            ->limit(6)
            ->get();
            
        $fasilitasTerbaru = Fasilitas::where('is_published', true)
            ->with('user')
            ->latest()
            ->limit(6)
            ->get();
            
        $organisasis = Organisasi::where('is_active', true)->get();
        
        return Inertia::render('Beranda', [
            'beritaTerbaru' => $beritaTerbaru,
            'prestasiTerbaru' => $prestasiTerbaru,
            'fasilitasTerbaru' => $fasilitasTerbaru,
            'organisasis' => $organisasis,
        ]);
    }

    public function berita()
    {
        $berita = Berita::where('is_published', true)
            ->with(['user', 'organisasi'])
            ->latest()
            ->paginate(100);
            
        return Inertia::render('Berita', [
            'berita' => $berita,
        ]);
    }

    public function beritaDetail(Berita $berita)
    {
        if (!$berita->is_published) {
            abort(404);
        }
        
        $berita->load(['user', 'organisasi']);
        
        $beritaLainnya = Berita::where('is_published', true)
            ->where('id', '!=', $berita->id)
            ->latest()
            ->limit(4)
            ->get();
        
        return Inertia::render('BeritaDetail', [
            'berita' => $berita,
            'beritaLainnya' => $beritaLainnya,
        ]);
    }

    public function prestasi()
    {
        $prestasi = Prestasi::where('is_published', true)
            ->with('user')
            ->latest()
            ->paginate(100);
            
        return Inertia::render('Prestasi', [
            'prestasi' => $prestasi,
        ]);
    }

    public function fasilitas()
    {
        $fasilitas = Fasilitas::where('is_published', true)
            ->with('user')
            ->latest()
            ->paginate(100);
            
        return Inertia::render('Fasilitas', [
            'fasilitas' => $fasilitas,
        ]);
    }

    public function organisasi()
    {
        $organisasis = Organisasi::where('is_active', true)->get();
        
        return Inertia::render('Organisasi', [
            'organisasis' => $organisasis,
        ]);
    }

    public function organisasiDetail(Organisasi $organisasi)
    {
        if (!$organisasi->is_active) {
            abort(404);
        }
        
        $beritaOrganisasi = Berita::where('is_published', true)
            ->where('organisasi_id', $organisasi->id)
            ->with('user')
            ->latest()
            ->paginate(6);
        
        return Inertia::render('OrganisasiDetail', [
            'organisasi' => $organisasi,
            'beritaOrganisasi' => $beritaOrganisasi,
        ]);
    }
}
