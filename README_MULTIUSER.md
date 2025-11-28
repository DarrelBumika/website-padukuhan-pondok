# Website Padukuhan Pondok - Sistem Multiuser

## Overview
Website Padukuhan Pondok telah diupgrade dari sistem statis menjadi sistem multiuser dengan role-based access control. Sistem ini memungkinkan pengelolaan konten yang lebih dinamis dan terstruktur.

## Fitur Utama

### 1. Sistem Autentikasi Multiuser
- **User Umum**: Hanya dapat melihat website
- **Super Admin**: Dapat mengubah halaman prestasi, fasilitas, dan menambah berita
- **Admin Organisasi**: Hanya dapat menambah berita untuk organisasinya

### 2. Halaman Login Terpisah
- URL: `/admin/login`
- Terpisah dari website utama
- Hanya admin yang dapat mengakses

### 3. Dashboard Admin
- Statistik jumlah berita, prestasi, dan fasilitas
- Quick actions untuk menambah konten
- Data terbaru dari setiap kategori

### 4. Manajemen Konten
- **Berita**: CRUD lengkap dengan gambar dan organisasi
- **Prestasi**: CRUD lengkap (hanya Super Admin)
- **Fasilitas**: CRUD lengkap (hanya Super Admin)

## Struktur Database

### Tabel Users
- `role`: enum('user', 'admin_organisasi', 'super_admin')
- `organisasi_id`: foreign key ke tabel organisasis

### Tabel Baru
- `organisasis`: Data organisasi kemasyarakatan
- `berita`: Data berita dengan status publish
- `prestasi`: Data prestasi dengan tanggal dan penghargaan
- `fasilitas`: Data fasilitas dengan lokasi dan kategori

## Akses Berdasarkan Role

### Super Admin
- Akses ke semua fitur
- Dapat mengelola berita, prestasi, dan fasilitas
- Dapat melihat semua data

### Admin Organisasi
- Hanya dapat mengelola berita untuk organisasinya
- Tidak dapat mengakses prestasi dan fasilitas
- Data terbatas pada organisasinya

### User Umum
- Hanya dapat melihat website publik
- Tidak memiliki akses ke admin panel

## URL dan Routes

### Website Publik
- `/` - Beranda
- `/berita` - Daftar berita
- `/berita/{id}` - Detail berita
- `/prestasi` - Daftar prestasi
- `/fasilitas` - Daftar fasilitas
- `/organisasi` - Daftar organisasi
- `/organisasi/{id}` - Detail organisasi

### Admin Panel
- `/admin/login` - Halaman login admin
- `/admin/dashboard` - Dashboard admin
- `/admin/berita` - Manajemen berita
- `/admin/prestasi` - Manajemen prestasi (Super Admin)
- `/admin/fasilitas` - Manajemen fasilitas (Super Admin)

## Akun Default

### Super Admin
- Email: `superadmin@padukuhan-pondok.com`
- Password: `admin123`

### Admin Organisasi
- Email: `admin@padukuhan-pondok.com`
- Password: `admin123`

## Cara Menjalankan

1. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

2. **Setup Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Setup Database**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

4. **Build Assets**
   ```bash
   npm run build
   ```

5. **Jalankan Server**
   ```bash
   php artisan serve
   ```

## Struktur File

### Backend (Laravel)
- `app/Models/` - Model untuk Berita, Prestasi, Fasilitas
- `app/Http/Controllers/Admin/` - Controller untuk admin panel
- `app/Http/Controllers/PublicController.php` - Controller untuk website publik
- `app/Http/Middleware/RoleMiddleware.php` - Middleware untuk role-based access

### Frontend (Vue.js)
- `resources/js/Pages/Admin/` - Halaman admin panel
- `resources/js/Pages/Auth/AdminLogin.vue` - Halaman login admin
- `resources/js/Pages/` - Halaman website publik (updated)

## Fitur Keamanan

1. **Role-based Access Control**: Setiap role memiliki akses terbatas
2. **Middleware Protection**: Route admin dilindungi middleware
3. **Data Isolation**: Admin organisasi hanya melihat data organisasinya
4. **File Upload Security**: Validasi tipe dan ukuran file

## Pengembangan Selanjutnya

1. **Notifikasi**: Sistem notifikasi untuk admin
2. **Audit Log**: Log aktivitas admin
3. **Email Integration**: Kirim email untuk notifikasi
4. **API**: REST API untuk mobile app
5. **Search**: Fitur pencarian yang lebih advanced

## Troubleshooting

### Error Migration
Jika ada error saat migration, pastikan:
1. Database sudah dibuat
2. Koneksi database benar di `.env`
3. Jalankan `php artisan migrate:fresh` jika perlu

### Error Permission
Pastikan folder `storage` dan `bootstrap/cache` writable:
```bash
chmod -R 775 storage bootstrap/cache
```

### Error Assets
Jika assets tidak load, jalankan:
```bash
npm run dev
# atau
npm run build
```

## Kontak
Untuk pertanyaan atau bantuan, silakan hubungi tim pengembang.
