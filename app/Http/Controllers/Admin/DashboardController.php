<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Berita;
use App\Models\Prestasi;
use App\Models\Fasilitas;
use App\Models\Organisasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        $stats = [
            'total_berita' => Berita::count(),
            'published_berita' => Berita::where('is_published', true)->count(),
            'total_prestasi' => Prestasi::count(),
            'published_prestasi' => Prestasi::where('is_published', true)->count(),
            'total_fasilitas' => Fasilitas::count(),
            'published_fasilitas' => Fasilitas::where('is_published', true)->count(),
        ];

        // Jika admin organisasi, hanya tampilkan data organisasinya
        if ($user->isAdminOrganisasi()) {
            $stats['total_berita'] = Berita::where('organisasi_id', $user->organisasi_id)->count();
            $stats['published_berita'] = Berita::where('organisasi_id', $user->organisasi_id)
                ->where('is_published', true)->count();
        }

        // Data untuk chart (berita per bulan)
        $beritaPerBulan = Berita::selectRaw('MONTH(created_at) as bulan, COUNT(*) as total')
            ->whereYear('created_at', date('Y'))
            ->groupBy('bulan')
            ->orderBy('bulan')
            ->get();

        // Data terbaru
        $beritaTerbaru = Berita::with(['user', 'organisasi'])
            ->latest()
            ->limit(3)
            ->get();

        $prestasiTerbaru = Prestasi::with('user')
            ->latest()
            ->limit(3)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'beritaPerBulan' => $beritaPerBulan,
            'beritaTerbaru' => $beritaTerbaru,
            'prestasiTerbaru' => $prestasiTerbaru,
            'userRole' => $user->role,
        ]);
    }
}
