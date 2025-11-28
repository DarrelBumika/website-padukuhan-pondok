<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Prestasi extends Model
{
    protected $table = 'prestasi';
    
    protected $fillable = [
        'judul',
        'deskripsi',
        'gambar',
        'is_published',
        'user_id',
    ];

    protected $casts = [
        'tanggal_prestasi' => 'date',
        'is_published' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
