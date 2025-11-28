<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Berita extends Model
{
    protected $table = 'berita';
    
    protected $fillable = [
        'judul',
        'konten',
        'image_id',
        'slug',
        'is_published',
        'user_id',
        'organisasi_id',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($berita) {
            if (empty($berita->slug)) {
                $berita->slug = Str::slug($berita->judul);
            }
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function organisasi(): BelongsTo
    {
        return $this->belongsTo(Organisasi::class, 'organisasi_id');
    }

    public function image(): BelongsTo
    {
        return $this->belongsTo(Image::class, 'image_id');
    }
}
