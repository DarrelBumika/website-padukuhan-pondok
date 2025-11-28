<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fasilitas extends Model
{
    protected $table = 'fasilitas';
    
    protected $fillable = [
        'nama',
        'deskripsi',
        'gambar',
        'is_published',
        'user_id',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
