<script setup>
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import Card from '@/Components/FasilitasCard.vue';
import FasilitasCard from '@/Components/FasilitasCard.vue';

defineProps({
  fasilitas: Object,
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
    <Head title="Fasilitas" />

    <MainLayout>
        <div class="w-full flex flex-col justify-center items-center gap-14">
            <div class="w-full flex flex-col justify-center items-center">
                <img src="/images/fasilitas_banner.png" alt="Logo" class="w-full">
                <div class="justify-center gap-5">
                    <h1 class="w-fit -translate-y-1/2 title-2 text-white bg-primary-2 py-2 px-10 rounded-full">
                        Fasilitas Padukuhan Pondok
                    </h1>
                    <p class="max-w-6xl regular-5 text-justify text-primary-6">
                        Padukuhan Pondok memiliki beragam fasilitas seperti SPAH, IPAL komunal, irigasi, TPS3R, masjid, titik kumpul evakuasi, GOR, jembatan, pos keamanan dan penerangan jalan, makam, posyandu balita dan lansia, serta balai pertemuan RT yang mendukung kebutuhan warga sehari-hari.
                    </p>
                </div>
            </div>

            <div class="max-w-7xl grid grid-cols-3 gap-9 mb-32">
                <FasilitasCard
                    v-for="fasilitas in fasilitas.data"
                    :key="fasilitas.id"
                    :id="fasilitas.id"
                    :title="fasilitas.nama"
                    :description="fasilitas.deskripsi"
                    :imageUrl="fasilitas.gambar ? `/storage/${fasilitas.gambar}` : '/images/home_title_clip_image.png'"
                />
            </div>

            <!-- Pagination -->
            <!-- <div v-if="fasilitas.links" class="mt-8">
                <nav class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <Link
                            v-if="fasilitas.links.prev"
                            :href="fasilitas.links.prev"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Previous
                        </Link>
                        <Link
                            v-if="fasilitas.links.next"
                            :href="fasilitas.links.next"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Next
                        </Link>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing {{ fasilitas.from }} to {{ fasilitas.to }} of {{ fasilitas.total }} results
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <template v-for="(link, index) in fasilitas.links" :key="index">
                                    <Link
                                        v-if="link.url"
                                        :href="link.url"
                                        v-html="link.label"
                                        class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                        :class="link.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'"
                                    />
                                    <span
                                        v-else
                                        v-html="link.label"
                                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                                    />
                                </template>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div> -->
        </div>
    </MainLayout>
</template>