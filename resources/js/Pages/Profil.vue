<script setup>
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

// Data menu items
const menuItems = ref([
    { id: 1, title: 'Luas dan Batas Wilayah', active: true },
    { id: 2, title: 'Orbitasi', active: false },
    { id: 3, title: 'Iklim dan Penggunaan Tanah', active: false },
    { id: 4, title: 'Program Kampung Iklim', active: false },
    { id: 5, title: 'Kampung Budaya', active: false }
]);

// Content untuk setiap menu
const menuContent = ref({
    1: {
        title: 'Luas dan Batas Wilayah',
        content: 'Informasi mengenai luas wilayah dan batas-batas administratif daerah.'
    },
    2: {
        title: 'Orbitasi',
        content: 'Data mengenai jarak dan waktu tempuh ke berbagai lokasi strategis.'
    },
    3: {
        title: 'Iklim dan Penggunaan Tanah',
        content: 'Kondisi iklim dan klasifikasi penggunaan lahan di wilayah ini.'
    },
    4: {
        title: 'Program Kampung Iklim',
        content: 'Program-program yang berkaitan dengan adaptasi dan mitigasi perubahan iklim.'
    },
    5: {
        title: 'Kampung Budaya',
        content: 'Inisiatif pelestarian dan pengembangan budaya lokal.'
    }
});

// Fungsi untuk mengubah menu aktif
const setActiveMenu = (selectedId) => {
    menuItems.value.forEach(item => {
        item.active = item.id === selectedId;
    });
};

// Mendapatkan konten yang aktif
const getActiveContent = () => {
    const activeItem = menuItems.value.find(item => item.active);
    return activeItem ? menuContent.value[activeItem.id] : menuContent.value[1];
};
</script>

<template>
    <Head title="Profil" />

    <MainLayout class="relative">
        <div class="w-full flex flex-col">
            <img src="/images/profile_banner.png" class="w-full shadow-2xl" alt="Profile Banner" />
            
            <div class="w-full flex justify-center gap-14">
                <div class="h-fit bg-primary-2 flex flex-col rounded-lg px-2 py-6 gap-2 sticky top-0 translate-y-12">
                    <div class="flex flex-col space-y-2">
                        <a 
                            v-for="item in menuItems" 
                            :key="item.id"
                            :class="[
                                'max-w-52 px-6 py-2 cursor-pointer rounded transition-colors duration-200',
                                item.active 
                                    ? 'bg-darker-5 !font-bold regular-5 text-white'
                                    : 'hover:bg-accent-2 regular-5 text-white font-normal'
                            ]"
                            @click="setActiveMenu(item.id)"
                            :href="`#section-${item.id}`"
                        >
                            {{ item.title }}
                        </a>
                    </div>
                </div>
                <div class="max-w-4xl flex flex-col gap-6 rounded-lg ml-4 flex-1 m-12">
                    <div id="section-1" class="flex flex-col gap-4">
                        <h1 class="large-2 text-black">Luas dan Batas Wilayah</h1>
                        <p class="regular-5 text-black text-justify">
                            Wilayah Padukuhan memiliki luas kurang lebih ± 341.200 m². Adapun batas-batas wilayahnya meliputi: di sebelah utara berbatasan dengan Padukuhan Plosokuning V dan Padukuhan Bawuk Karangjati, di sebelah selatan berbatasan dengan Padukuhan Mlandangan, di sebelah timur berbatasan dengan Padukuhan Manukan dan Padukuhan Sanggrahan, sedangkan di sebelah barat berbatasan langsung dengan Padukuhan Manukan.
                        </p>
                        <div class="w-full flex justify-center items-center">
                            <img src="/images/peta_padukuhan_pondok.png" class="w-96 rounded-lg" alt="Profile Banner" />
                        </div>
                    </div>

                    <div id="section-2" class="flex flex-col gap-4">
                        <h1 class="large-2 text-black">Orbitasi</h1>
                        <p class="regular-5 text-black text-justify">
                            Jarak dari padukuhan ke pusat Kalurahan adalah sekitar 2 km dengan waktu tempuh kurang lebih 9 menit. Sementara itu, jarak menuju Kapanewon sekitar 2,9 km dengan waktu tempuh 10 menit. Adapun jarak ke pusat Kabupaten adalah sekitar 8,3 km dengan waktu tempuh kurang lebih 26 menit.
                        </p>
                        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4689.574920579418!2d110.3988212339279!3d-7.741930556815205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a596d42ff7739%3A0x63b6247d89324d22!2sPondok%2C%20Condong%20Catur%2C%20Depok%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e1!3m2!1sen!2sid!4v1757178434421!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div id="section-3" class="flex flex-col gap-4">
                        <h1 class="large-2 text-black">Iklim dan Penggunaan Tanah</h1>
                        <p class="regular-5 text-black text-justify">
                             Wilayah padukuhan memiliki kondisi iklim dengan curah hujan sedang, suhu rata-rata harian berkisar antara 25–33°C, serta jumlah bulan hujan berkisar antara 4 hingga 8 bulan dalam setahun. Penggunaan tanah di padukuhan terbagi ke dalam beberapa kategori. Tanah lahan hijau dimanfaatkan sebagai sawah dan perkebunan. Tanah lahan kuning digunakan untuk tempat usaha, pemukiman, gudang, kolam ikan, dan berbagai kegiatan lainnya. Selain itu, terdapat pula tanah untuk fasilitas umum yang digunakan untuk masjid, makam, gedung olahraga (GOR), serta poskamling.
                        </p>
                    </div>

                    <div id="section-4" class="flex flex-col gap-6">
                        <img src="/images/program_kampung_iklim_banner.png" class="w-full rounded-lg" alt="Profile Banner" />

                        <div class="flex flex-col gap-4">
                            <h1 class="large-2 text-black">Program Kampung Iklim (PROKLIM)</h1>
                            <p class="regular-5 text-black text-justify">
                                Padukuhan Pondok ditetapkan sebagai peserta Program Kampung Iklim (Proklim) karena memiliki potensi, kelembagaan, dan komitmen masyarakat dalam menjaga lingkungan. Program ini melibatkan berbagai kegiatan adaptasi dan mitigasi perubahan iklim yang dilakukan bersama pemerintah dan masyarakat.
                            </p>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h1 class="medium-2 text-black">a. Kegiatan Adaptasi</h1>
                            <p class="regular-5 text-black text-justify">
                                Masyarakat mengelola air dengan membangun sumur resapan, saluran hujan, serta memelihara irigasi dan terjunan air agar lahan pertanian tetap produktif. Warga juga memanfaatkan pekarangan untuk menanam buah, sayur, dan beternak ikan, sehingga mendukung ketahanan pangan. Pola tanam padi–palawija–padi diterapkan untuk menjaga kesuburan tanah. Selain itu, kesehatan lingkungan diperkuat melalui kader jumantik, program 3M, rumah sehat dengan sirkulasi udara baik, serta kerja bakti rutin.
                            </p>
                            <div class="flex gap-4">
                                <img src="/images/kegiatan_adaptasi_1.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_adaptasi_2.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_adaptasi_3.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_adaptasi_4.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h1 class="medium-2 text-black">b. Kegiatan Mitigasi</h1>
                            <p class="regular-5 text-black text-justify">
                                Upaya mitigasi dilakukan dengan penggunaan pupuk organik, pengurangan kebiasaan membakar jerami, serta pemanfaatan IPAL komunal dengan penangkap gas metan. Pengelolaan sampah berjalan melalui TPS3R Kenanga, kegiatan pengomposan, dan pemilahan sampah rumah tangga. Beberapa warga juga masih menggunakan tungku hemat kayu bakar untuk usaha kuliner tradisional yang ramah lingkungan.
                            </p>
                            <div class="flex gap-4">
                                <img src="/images/kegiatan_mitigasi_1.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_mitigasi_2.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_mitigasi_3.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/kegiatan_mitigasi_4.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h1 class="medium-2 text-black">c. Manfaat Program</h1>
                            <p class="regular-5 text-black text-justify">
                                Melalui Proklim, Padukuhan Pondok mampu menjaga ketersediaan air, meningkatkan ketahanan pangan, serta menciptakan lingkungan bersih dan sehat. Program ini juga membantu mengurangi emisi, mengelola sampah secara bijak, dan membangun kesadaran masyarakat untuk hidup lebih peduli terhadap lingkungan.
                            </p>
                        </div>
                    </div>

                    <div id="section-5" class="flex flex-col gap-6">
                        <img src="/images/kampung_budaya_banner.png" class="w-full rounded-lg" alt="Profile Banner" />

                        <div class="flex flex-col gap-4">
                            <h1 class="large-2 text-black">Kampung Budaya</h1>
                            <p class="regular-5 text-black text-justify">
                                Padukuhan Pondok sebagai Kampung Budaya memiliki kekayaan tradisi yang dijaga dan dikembangkan oleh warganya. Berbagai kelompok seni tumbuh di sini, di antaranya Jathilan Roso Tunggal dan Karawitan Sekar Putri, yang menjadi kebanggaan sekaligus media pelestarian budaya bagi masyarakat.
                            </p>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h1 class="medium-2 text-black">1. Jathilan Roso Tunggal</h1>
                            <p class="regular-5 text-black text-justify">
                                Organisasi Kesenian Jathilan Roso Tunggal berdiri pada tanggal 25 November 1964 dan bermarkas di RT 01 RW 06 Padukuhan Pondok. Anggotanya berasal dari berbagai kalangan, mulai dari anak-anak hingga orang dewasa, dengan semangat yang sama yaitu mencintai kesenian tradisional. Peran Jathilan Roso Tunggal sangat penting dalam melestarikan budaya Jawa, khususnya seni pertunjukan jathilan yang sarat makna spiritual dan sosial.  Selain itu, Jathilan Roso Tunggal juga kerap diundang dalam berbagai acara, baik Hari Besar Nasional maupun agenda penting di Kalurahan Condongcatur, sehingga eksistensinya semakin dikenal oleh masyarakat luas.
                            </p>
                            <div class="flex gap-4">
                                <img src="/images/jathilan_roso_tunggal_1.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/jathilan_roso_tunggal_2.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/jathilan_roso_tunggal_3.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/jathilan_roso_tunggal_4.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h1 class="medium-2 text-black">2. Karawitan Sekar Putri</h1>
                            <p class="regular-5 text-black text-justify">
                                Kelompok Kesenian Karawitan Sekar Putri lahir pada tahun 2018 dengan tempat latihan rutin di Sanggar Darmo Budaya Pondok. Kegiatan latihan biasanya diadakan setiap hari Rabu sore, dengan anggota utama para ibu-ibu pecinta seni karawitan. Karawitan Sekar Putri tidak hanya berfokus pada kegiatan musikal, tetapi juga memiliki peran edukatif, yakni mengenalkan seni karawitan kepada anak-anak agar tumbuh rasa cinta terhadap budaya lokal sejak dini. Kelompok ini juga aktif mengikuti berbagai pementasan dan festival kesenian di tingkat Kabupaten Sleman. Melalui aktivitas tersebut, Karawitan Sekar Putri berhasil memperkenalkan keindahan gamelan dan kekuatan musikalitas tradisi Jawa ke khalayak yang lebih luas, sekaligus meneguhkan Padukuhan Pondok sebagai pusat pengembangan seni budaya.
                            </p>
                            <div class="flex gap-4">
                                <img src="/images/karawitan_1.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/karawitan_2.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/karawitan_3.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                                <img src="/images/karawitan_4.png" class="flex-1 rounded-lg" alt="Profile Banner" />
                            </div>
                        </div>
                    </div>

                    <!-- <div class="flex flex-col gap-4">
                        <h1 class="large-2 text-black">Video Profil Kampung Budaya Padukuhan Pondok</h1>
                        <div class="w-full flex justify-center items-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/w_eNLYWjGNY?si=mTphnxw6J7U76w5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </MainLayout>
</template>