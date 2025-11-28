<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'mime_type',
        'file_size',
        'blob_data'
    ];

    /**
     * Cast attributes untuk handling yang lebih baik
     */
    protected $casts = [
        'file_size' => 'integer'
    ];

    /**
     * Attributes yang tidak boleh di-mass assign untuk keamanan
     */
    protected $guarded = ['id'];

    /**
     * Attributes yang harus disembunyikan saat serialization
     * untuk menghindari blob_data muncul di JSON response
     */
    protected $hidden = [
        'blob_data'
    ];

    /**
     * Simpan file gambar ke dalam blob
     *
     * @param \Illuminate\Http\UploadedFile $file
     * @return self
     */
    public static function storeFromUploadedFile($file)
    {
        $blobData = file_get_contents($file->getRealPath());
        
        return self::create([
            'filename' => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'file_size' => $file->getSize(),
            'blob_data' => $blobData
        ]);
    }

    /**
     * Simpan file gambar dari path
     *
     * @param string $path
     * @param string|null $filename
     * @return self
     */
    public static function storeFromPath($path, $filename = null)
    {
        if (!file_exists($path)) {
            throw new \Exception('File not found: ' . $path);
        }

        $mimeType = mime_content_type($path);
        $fileSize = filesize($path);
        $blobData = file_get_contents($path);
        
        return self::create([
            'filename' => $filename ?: basename($path),
            'mime_type' => $mimeType,
            'file_size' => $fileSize,
            'blob_data' => $blobData
        ]);
    }

    /**
     * Generate URL untuk menampilkan gambar
     *
     * @return string
     */
    public function getImageUrl()
    {
        return route('image.show', $this->id);
    }

    /**
     * Generate data URL untuk display langsung
     *
     * @return string
     */
    public function getDataUrl()
    {
        return 'data:' . $this->mime_type . ';base64,' . base64_encode($this->blob_data);
    }
}