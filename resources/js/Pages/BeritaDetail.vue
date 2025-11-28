<script setup>
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

const props = defineProps({
  berita: Object,
  beritaLainnya: Array,
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>

<template>
    <Head :title="berita ? berita.judul : 'Berita Tidak Ditemukan'" />

    <MainLayout>
        <div v-if="berita" class="w-5xl flex flex-col pt-10 pb-32 gap-10">
            <!-- Gambar Berita -->
            <img 
                v-if="berita.gambar"
                :src="`/storage/${berita.gambar}`"
                :alt="berita.judul"
                class="w-full h-[400px] object-cover rounded-lg"
            />
            <div 
                v-else
                class="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center"
            >
                <span class="text-gray-500 text-lg">Tidak ada gambar</span>
            </div>

            <!-- Header Berita -->
            <div class="w-full flex flex-col gap-4">
                <h1 class="headline-2 text-justify">
                    {{ berita.judul }}
                </h1>
                <div class="flex gap-4 regular-5 text-gray-600">
                    <span v-if="berita.organisasi">{{ berita.organisasi.name }}</span>
                    <span>•</span>
                    <span>{{ formatDate(berita.created_at) }}</span>
                </div>
            </div>

            <!-- Konten Berita -->
            <div class="regular-5 text-justify prose max-w-none">
                <div v-html="berita.konten"></div>
            </div>

            <!-- Berita Lainnya -->
            <div v-if="beritaLainnya && beritaLainnya.length > 0" class="mt-16">
                <h2 class="text-2xl font-bold mb-6">Berita Lainnya</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div 
                        v-for="beritaLain in beritaLainnya" 
                        :key="beritaLain.id"
                        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img 
                            v-if="beritaLain.gambar"
                            :src="`/storage/${beritaLain.gambar}`"
                            :alt="beritaLain.judul"
                            class="w-full h-48 object-cover"
                        />
                        <div 
                            v-else
                            class="w-full h-48 bg-gray-200 flex items-center justify-center"
                        >
                            <span class="text-gray-500">Tidak ada gambar</span>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-lg mb-2 line-clamp-2">
                                {{ beritaLain.judul }}
                            </h3>
                            <p class="text-gray-600 text-sm mb-2">
                                {{ beritaLain.konten.substring(0, 100) }}...
                            </p>
                            <div class="flex justify-between items-center text-sm text-gray-500">
                                <span>{{ formatDate(beritaLain.created_at) }}</span>
                                <Link 
                                    :href="route('berita.detail', beritaLain.id)"
                                    class="text-blue-600 hover:text-blue-800"
                                >
                                    Baca selengkapnya →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="w-5xl flex flex-col justify-center items-center pt-20 pb-32 gap-10">
            <div class="text-center">
                <h1 class="headline-2 text-red-600 mb-4">Berita Tidak Ditemukan</h1>
                <p class="text-lg text-gray-600 mb-8">Maaf, berita yang Anda cari tidak dapat ditemukan.</p>
                <Link 
                    :href="route('berita')" 
                    class="bg-primary-7 text-white px-6 py-3 rounded-lg hover:bg-primary-8 transition-colors"
                >
                    Kembali ke Daftar Berita
                </Link>
            </div>
        </div>
    </MainLayout>
</template>
