<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\BeritaController;
use App\Http\Controllers\Admin\PrestasiController;
use App\Http\Controllers\Admin\FasilitasController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes (Website Utama)
Route::get('/', [PublicController::class, 'beranda'])->name('beranda');
Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');
Route::get('/organisasi', [PublicController::class, 'organisasi'])->name('organisasi');
Route::get('/organisasi/{organisasi}', [PublicController::class, 'organisasiDetail'])->name('organisasi.detail');
Route::get('/berita', [PublicController::class, 'berita'])->name('berita');
Route::get('/berita/{berita}', [PublicController::class, 'beritaDetail'])->name('berita.detail');
Route::get('/fasilitas', [PublicController::class, 'fasilitas'])->name('fasilitas');
Route::get('/prestasi', [PublicController::class, 'prestasi'])->name('prestasi');
ROute::get('/image/{id}', [ImageController::class, 'image'])->name('image');

// Login Routes (Terpisah dari website utama)
Route::get('/admin/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/admin/login', [LoginController::class, 'login']);
Route::post('/admin/logout', [LoginController::class, 'logout'])->name('logout');

// Admin Routes
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Berita Management
    Route::resource('berita', BeritaController::class);
    
    // Prestasi Management (Hanya Super Admin)
    Route::middleware('role:super_admin')->group(function () {
        Route::resource('prestasi', PrestasiController::class);
        Route::resource('fasilitas', FasilitasController::class);
    });
});

// Image Management Routes
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/images', [ImageController::class, 'index'])->name('images.index');
    Route::post('/images', [ImageController::class, 'store'])->name('images.store');
    Route::delete('/images/{image}', [ImageController::class, 'destroy'])->name('images.destroy');
    Route::get('/images/category/{category}', [ImageController::class, 'getImagesByCategory'])->name('images.by.category');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
