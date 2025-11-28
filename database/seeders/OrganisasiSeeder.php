<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Organisasi;

class OrganisasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $organisasis = [
            [
                'name' => 'Pemerintah Desa',
                'description' => 'Pemerintah Desa Padukuhan Pondok',
                'image' => 'organisasi/pemerintah_desa.png',
                'is_active' => true,
            ],
            [
                'name' => 'BPD (Badan Permusyawaratan Desa)',
                'description' => 'Badan Permusyawaratan Desa Padukuhan Pondok',
                'image' => 'organisasi/bpd.png',
                'is_active' => true,
            ],
            [
                'name' => 'LPMD (Lembaga Pemberdayaan Masyarakat Desa)',
                'description' => 'Lembaga Pemberdayaan Masyarakat Desa Padukuhan Pondok',
                'image' => 'organisasi/lpmd.png',
                'is_active' => true,
            ],
            [
                'name' => 'PKK (Pemberdayaan Kesejahteraan Keluarga)',
                'description' => 'Pemberdayaan Kesejahteraan Keluarga Padukuhan Pondok',
                'image' => 'organisasi/pkk.png',
                'is_active' => true,
            ],
            [
                'name' => 'Karang Taruna',
                'description' => 'Karang Taruna Padukuhan Pondok',
                'image' => 'organisasi/karang_taruna.png',
                'is_active' => true,
            ],
        ];

        foreach ($organisasis as $organisasi) {
            Organisasi::updateOrCreate(
                ['slug' => $organisasi['slug'] ?? \Illuminate\Support\Str::slug($organisasi['name'])],
                $organisasi
            );
        }
    }
}
