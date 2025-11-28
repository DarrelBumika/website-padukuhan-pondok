<script setup>
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import PrestasiComponent from '@/Components/PrestasiComponent.vue';

defineProps({
  prestasi: Object,
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
    <Head title="Prestasi" />

    <MainLayout>
        <div class="w-full flex flex-col justify-center items-center gap-14">
            <div class="w-full flex flex-col justify-center items-center">
                <img src="/images/banner/prestasi_banner.png" alt="Logo" class="w-full">
                <div class="justify-center gap-5">
                    <h1 class="w-fit -translate-y-1/2 title-2 text-white bg-primary-2 py-2 px-10 rounded-full">
                        Prestasi Padukuhan Pondok
                    </h1>
                    <p class="max-w-6xl regular-5 text-justify text-primary-6">
                        Padukuhan Pondok telah menorehkan berbagai prestasi membanggakan, mulai dari Juara 1 Lomba Wajah Padukuhan Kategori Fisik “Lingkungan” Tahun 2019, Juara 3 Kategori Non Fisik “Administrasi” Tahun 2019, hingga kejuaraan gerak jalan, bulutangkis, dan futsal tingkat kalurahan. Selain itu, Padukuhan Pondok juga pernah meraih penghargaan sebagai Kelompok Berprestasi Kabupaten Sleman Tahun 2016. Prestasi-prestasi tersebut hanyalah sebagian dari deretan capaian Padukuhan Pondok, berikut merupakan daftar penghargaan lainnya.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-2 max-w-6xl mb-32">
                <PrestasiComponent
                    v-for="prestasi in prestasi.data"
                    :key="prestasi.id"
                    :id="prestasi.id"
                    :title="prestasi.judul"
                    :description="prestasi.deskripsi"
                    :imageUrl="prestasi.gambar ? `/storage/${prestasi.gambar}` : null"
                    :date="formatDate(prestasi.tanggal_prestasi)"
                    :penghargaan="prestasi.penghargaan"
                />
            </div>

            <!-- Pagination -->
            <!-- <div v-if="prestasi.links" class="mt-8">
                <nav class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <Link
                            v-if="prestasi.links.prev"
                            :href="prestasi.links.prev"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Previous
                        </Link>
                        <Link
                            v-if="prestasi.links.next"
                            :href="prestasi.links.next"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Next
                        </Link>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing {{ prestasi.from }} to {{ prestasi.to }} of {{ prestasi.total }} results
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <template v-for="(link, index) in prestasi.links" :key="index">
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