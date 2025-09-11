<script setup>
import { Head } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import ImageDisplay from '@/Components/ImageDisplay.vue';
</script>

<template>
    <Head title="Organisasi" />

    <MainLayout>
        <div class="bg-white p-8 rounded-lg shadow">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">
                Organisasi
            </h1>
            <p class="text-lg text-gray-600">
                Website resmi Padukuhan Pondok, tempat Anda dapat menemukan informasi terkini
                tentang kegiatan, program, dan perkembangan di wilayah kami.
            </p>
        </div>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <h1 class="text-2xl font-bold mb-6">Organisasi Padukuhan Pondok</h1>
                        <ImageDisplay category="organisasi" />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>