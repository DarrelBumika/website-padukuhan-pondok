<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Super Admin
        User::updateOrCreate(
            ['email' => 'superadmin@padukuhan-pondok.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('admin123'),
                'is_admin' => true,
                'role' => 'super_admin',
            ]
        );

        // Admin Organisasi
        User::updateOrCreate(
            ['email' => 'admin@padukuhan-pondok.com'],
            [
                'name' => 'Admin Organisasi',
                'password' => Hash::make('admin123'),
                'is_admin' => true,
                'role' => 'admin_organisasi',
                'organisasi_id' => 1,
            ]
        );
    }
}
