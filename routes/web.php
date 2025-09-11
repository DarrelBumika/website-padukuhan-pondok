<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Beranda');
})->name('beranda');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');

Route::get('/organisasi', function () {
    return Inertia::render('Organisasi');
})->name('organisasi');

Route::get('/berita', function () {
    return Inertia::render('Berita');
})->name('berita');

Route::get('/fasilitas', function () {
    return Inertia::render('Fasilitas');
})->name('fasilitas');

Route::get('/prestasi', function () {
    return Inertia::render('Prestasi');
})->name('prestasi');

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
