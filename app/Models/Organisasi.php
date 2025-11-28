<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Organisasi extends Model
{
    use HasFactory;

    protected $table = 'organisasis';
    
    protected $fillable = [
        'name',
        'description',
        'image',
        'slug',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($organisasi) {
            if (empty($organisasi->slug)) {
                $organisasi->slug = Str::slug($organisasi->name);
            }
        });
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'organisasi_id');
    }

    public function berita(): HasMany
    {
        return $this->hasMany(Berita::class, 'organisasi_id');
    }
}
