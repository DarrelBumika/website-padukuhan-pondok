<script setup>
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import MainLayout from '@/Layouts/MainLayout.vue';
import Card from '@/Components/FasilitasCard.vue';

const products = ref([
  {
    id: 1,
    name: 'SPAH',
    description: 'Saluran Pengolahan Air Hujan (SPAH) berupa saluran jalan dengan sumur resapan tiap tiga titik untuk mengurangi debit air hujan.',
    // image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
  },
  {
    id: 2,
    name: 'IPAL Komunal',
    description: 'Instalasi Pengolahan Air Limbah cair terpusat agar aman dibuang ke lingkungan sesuai baku mutu, dengan saluran pipa menuju bak IPAL.',
    image: 'images/ipal.png',
  },
  {
    id: 3,
    name: 'Irigasi',
    description: 'Sistem penyediaan dan pengaturan air untuk pertanian agar tanaman tetap tumbuh normal meskipun tanah kekurangan air.',
    image: 'images/irigasi.png',
  },
  {
    id: 4,
    name: 'TPS3R',
    description: 'Pengelolaan sampah 3R (Reduce, Reuse, Recycle) dengan teknologi mesin pencacah dan pengayak kompos untuk solusi sampah yang lebih efisien.',
    image: 'images/tps3r.png',
  },
  {
    id: 5,
    name: 'Masjid',
    description: 'Tempat ibadah umat Muslim di RT 04 dan RT 05.',
    image: 'images/masjid.png',
  },
  {
    id: 6,
    name: 'Titik Kumpul Evakuasi',
    description: 'Lokasi aman untuk berkumpul saat darurat seperti gempa, sekaligus tempat berlindung sementara.',
    image: 'images/titik_kumpul_evakuasi.png',
  },
  {
    id: 7,
    name: 'GOR Pondok Sport',
    description: 'Fasilitas olahraga dan pertemuan warga Padukuhan Pondok.',
    image: 'images/gor_pondok_sport.png',
  },
  {
    id: 8,
    name: 'Jembatan',
    description: 'Terdapat jembatan besar penghubung Pondok–Manukan dan jembatan kecil di RT 05.',
    image: 'images/jembatan.png',
  },
  {
    id: 9,
    name: 'Pos Keamanan dan Informasi',
    description: 'Tempat penjagaan dan pemberian informasi bagi warga.',
    image: 'images/pos_keamanan_dan_informasi.png',
  },
  {
    id: 10,
    name: 'Penerangan Jalan Pondok',
    description: 'Lampu jalan yang sebagian besar dipasang swadaya warga.',
    image: 'images/penerangan_jalan_pondok.png',
  },
  {
    id: 11,
    name: 'Makam Padukuhan Pondok',
    description: 'Terdapat dua makam, masing-masing di RT 03 dan RT 05.',
    image: 'images/makam_padukuhan_pondok.png',
  },
  {
    id: 12,
    name: 'Posyandu Balita dan Lansia',
    description: 'Tempat pelayanan kesehatan rutin untuk balita dan lansia guna mencegah stunting dan menurunkan angka kematian.',
    image: 'images/posyandu_balita_dan_lansia.png',
  },
  {
    id: 13,
    name: 'Balai Pertemuan RT',
    description: 'Fasilitas pertemuan warga di RT 05.',
    image: 'images/balai_pertemuan_rt.png',
  },
])
</script>

<template>
    <Head title="Beranda" />

    <MainLayout>
        <div class="w-full flex flex-col">
            <img class="w-full" src="/images/fasilitas_banner.png" alt="fasilitas banner"/>

            <div class="w-full flex justify-center">
                <div class="max-w-[1134px] flex flex-col items-center gap-12">
                    <div class="flex flex-col gap-9">
                        <div class="w-fit px-11 py-1.5 bg-primary-2 rounded-full -mt-9">
                            <h1 class="title-2 text-white">
                                Fasilitas Pedukuhan Pondok
                            </h1>
                        </div>
                        <p class="medium-5 text-justify">
                            Padukuhan Pondok memiliki beragam fasilitas seperti SPAH, IPAL komunal, irigasi, TPS3R, masjid, titik kumpul evakuasi, GOR, jembatan, pos keamanan dan penerangan jalan, makam, posyandu balita dan lansia, serta balai pertemuan RT yang mendukung kebutuhan warga sehari-hari.
                        </p>
                    </div>
                    
                    <div class="w-full grid grid-cols-4 gap-9">
                        <Card
                            v-for="product in products"
                            :key="product.id"
                            :title="product.name"
                            :description="product.description"
                            :image-url="product.image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>