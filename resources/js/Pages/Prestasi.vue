<script setup>
import { Head } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import ImageDisplay from '@/Components/ImageDisplay.vue';
</script>

<template>
    <Head title="Beranda" />

    <MainLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <h1 class="text-2xl font-bold mb-6">Prestasi Padukuhan Pondok</h1>
                        <ImageDisplay category="prestasi" />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>