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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'role')) {
                $table->enum('role', ['user', 'admin_organisasi', 'super_admin'])->default('user');
            }
            if (!Schema::hasColumn('users', 'organisasi_id')) {
                $table->unsignedBigInteger('organisasi_id')->nullable();
                $table->foreign('organisasi_id')->references('id')->on('organisasis')->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'organisasi_id')) {
                $table->dropForeign(['organisasi_id']);
                $table->dropColumn('organisasi_id');
            }
            if (Schema::hasColumn('users', 'role')) {
                $table->dropColumn('role');
            }
        });
    }
};
