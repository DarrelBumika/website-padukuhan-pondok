<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class ImageController extends Controller
{
    /**
     * Display a listing of images.
     */
    public function index()
    {
        $images = Image::select('id', 'filename', 'mime_type', 'file_size', 'created_at')
                      ->paginate(20);
        
        return response()->json($images);
    }

    /**
     * Store a newly uploaded image.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240', // max 10MB
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $image = Image::storeFromUploadedFile($request->file('image'));
            
            return response()->json([
                'success' => true,
                'message' => 'Image uploaded successfully',
                'data' => [
                    'id' => $image->id,
                    'filename' => $image->filename,
                    'mime_type' => $image->mime_type,
                    'file_size' => $image->file_size,
                    'url' => $image->getImageUrl(),
                    'created_at' => $image->created_at
                ]
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to upload image',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified image.
     */
    public function show($id)
    {
        $image = Image::find($id);

        if (!$image) {
            return response()->json([
                'success' => false,
                'message' => 'Image not found'
            ], 404);
        }

        // Return the image as binary response
        return response($image->blob_data, 200)
               ->header('Content-Type', $image->mime_type)
               ->header('Content-Disposition', 'inline; filename="' . $image->filename . '"')
               ->header('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    }

    /**
     * Display image information without blob data.
     */
    public function info($id)
    {
        $image = Image::select('id', 'filename', 'mime_type', 'file_size', 'created_at', 'updated_at')
                     ->find($id);

        if (!$image) {
            return response()->json([
                'success' => false,
                'message' => 'Image not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $image
        ]);
    }

    /**
     * Download the specified image.
     */
    public function download($id)
    {
        $image = Image::find($id);

        if (!$image) {
            return response()->json([
                'success' => false,
                'message' => 'Image not found'
            ], 404);
        }

        return response($image->blob_data, 200)
               ->header('Content-Type', $image->mime_type)
               ->header('Content-Disposition', 'attachment; filename="' . $image->filename . '"');
    }

    /**
     * Remove the specified image.
     */
    public function destroy($id)
    {
        $image = Image::find($id);

        if (!$image) {
            return response()->json([
                'success' => false,
                'message' => 'Image not found'
            ], 404);
        }

        try {
            $image->delete();
            
            return response()->json([
                'success' => true,
                'message' => 'Image deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete image',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Upload multiple images at once.
     */
    public function storeMultiple(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'images' => 'required|array|max:10', // max 10 images at once
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $uploadedImages = [];
        $errors = [];

        foreach ($request->file('images') as $index => $file) {
            try {
                $image = Image::storeFromUploadedFile($file);
                $uploadedImages[] = [
                    'id' => $image->id,
                    'filename' => $image->filename,
                    'mime_type' => $image->mime_type,
                    'file_size' => $image->file_size,
                    'url' => $image->getImageUrl(),
                    'created_at' => $image->created_at
                ];
            } catch (\Exception $e) {
                $errors[] = [
                    'index' => $index,
                    'filename' => $file->getClientOriginalName(),
                    'error' => $e->getMessage()
                ];
            }
        }

        return response()->json([
            'success' => empty($errors),
            'message' => count($uploadedImages) . ' images uploaded successfully',
            'data' => $uploadedImages,
            'errors' => $errors
        ], empty($errors) ? 201 : 207); // 207 Multi-Status for partial success
    }
}