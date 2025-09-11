<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Validator;

class ImageController extends Controller
{
    public function index()
    {
        $images = Image::latest()->get();
        return inertia('Images/Index', ['images' => $images]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'alt_text' => 'nullable|string|max:255',
            'caption' => 'nullable|string|max:255',
            'category' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        try {
            $uploadedImage = Cloudinary::upload($request->file('image')->getRealPath(), [
                'folder' => 'padukuhan-pondok',
                'transformation' => [
                    'quality' => 'auto',
                    'fetch_format' => 'auto',
                ]
            ]);

            $image = Image::create([
                'public_id' => $uploadedImage->getPublicId(),
                'url' => $uploadedImage->getPath(),
                'secure_url' => $uploadedImage->getSecurePath(),
                'format' => $uploadedImage->getFileType(),
                'width' => $uploadedImage->getWidth(),
                'height' => $uploadedImage->getHeight(),
                'alt_text' => $request->alt_text,
                'caption' => $request->caption,
                'category' => $request->category
            ]);

            return back()->with('success', 'Gambar berhasil diunggah.');
        } catch (\Exception $e) {
            return back()->with('error', 'Terjadi kesalahan saat mengunggah gambar.');
        }
    }

    public function destroy(Image $image)
    {
        try {
            Cloudinary::destroy($image->public_id);
            $image->delete();
            return back()->with('success', 'Gambar berhasil dihapus.');
        } catch (\Exception $e) {
            return back()->with('error', 'Terjadi kesalahan saat menghapus gambar.');
        }
    }

    public function getImagesByCategory($category)
    {
        $images = Image::where('category', $category)
                       ->latest()
                       ->get();
        return response()->json($images);
    }
}
