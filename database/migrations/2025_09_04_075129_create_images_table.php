<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('public_id')->unique(); // Cloudinary public ID
            $table->string('url'); // Cloudinary URL
            $table->string('secure_url'); // Cloudinary secure URL
            $table->string('format')->nullable(); // Image format (jpg, png, etc)
            $table->integer('width')->nullable(); // Image width
            $table->integer('height')->nullable(); // Image height
            $table->string('alt_text')->nullable(); // Alternative text for accessibility
            $table->string('caption')->nullable(); // Image caption or description
            $table->string('category')->nullable(); // Image category (e.g., berita, fasilitas, etc)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
