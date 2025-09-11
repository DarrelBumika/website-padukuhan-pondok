<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'public_id',
        'url',
        'secure_url',
        'format',
        'width',
        'height',
        'alt_text',
        'caption',
        'category'
    ];

    protected $casts = [
        'width' => 'integer',
        'height' => 'integer',
    ];
}
