<script setup>
import { Head } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import BeritaHomeCard from '@/Components/BeritaHomeCard.vue';
import OrganisasiCard from '@/Components/OrganisasiCard.vue';

defineProps({
  beritaTerbaru: Array,
  prestasiTerbaru: Array,
  fasilitasTerbaru: Array,
  organisasis: Array,
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
    <Head title="Beranda" />

    <MainLayout>
        <div class="w-full flex flex-col">
            <!-- Hero -->
            <div class="w-full flex flex-col justify-center items-center py-20 gap-20">
                <div class="flex flex-col justify-center items-center gap-10 bg-[url('/images/home_title_clip_image.png')] bg-cover bg-center bg-clip-text text-transparent">
                    <div class="title-1">
                        Selamat Datang di <br/> 
                        Padukuhan Pondok
                    </div>
                    <div class="extralarge-5">
                        Desa Condongcatur, Kecamatan Depok, Kabupaten Sleman, DIY
                    </div>
                </div>

                <div class="relative w-full flex justify-center items-center">
                    <img src="/images/hero_bg.png" alt="" />
                    <div class="absolute w-full h-64 bottom-0 bg-linear-to-t from-primary-1 to-transparent" />
                    <div class="absolute w-full h-64 bottom-0 bg-linear-to-t from-white to-transparent" />

                    <div class="absolute flex left-[15%] top-[20%] bg-white p-8 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] gap-5">
                        <div class="flex flex-col gap-5 mb-7">
                            <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-20 w-20 -top-10 -left-10 rotate-[-115deg]"/>
                            <h1 class="extralarge-1">Kampung Proklim</h1>
                            <p>
                                Padukuhan Pondok merupakan <br/>
                                Kampung Iklim tingkat Nasional yang <br/> 
                                menjadi perwakilan dari Kalurahan <br/>
                                Condongcatur dan Kapanewon Depok
                            </p>
                        </div>
                    
                        <div class="w-fit h-fit bg-primary-2 rounded-2xl p-1 self-end">
                            <img src="/images/ornament/hero_ornament_3.png" alt="" class="w-12"/>
                        </div>
                    </div>
                    
                    <div class="absolute flex flex-col gap-5 right-[20%] bottom-[20%] bg-white p-8 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-20 w-20 -top-10 -right-10 rotate-[33deg]"/>

                        <h1 class="extralarge-1">Kampung Budaya</h1>
                        <p>
                            Melestarikan Budaya Nusantara <br/>
                            melalui Jathilan Roso Tunggal dan <br/>
                            Karawitan Sekar Putri
                        </p>

                        <img src="/images/ornament/hero_ornament_2.png" alt="" class="absolute h-12 w-12 -bottom-6 left-6 bg-primary-2 p-1 rounded-full"/>
                    </div>
                </div>
            </div>

            <!-- Deskripsi dan Profil -->
            <div class="flex flex-col justify-center items-center gap-32 py-16">
                <div class="flex gap-40">
                    <div class="w-[500px] flex flex-col gap-9">
                        <h1 class="extralarge-1">Deskripsi Padukuhan Pondok</h1>
                        <p class="regular-5 text-justify">
                            Padukuhan Pondok berada di Kalurahan Condongcatur, Kapanewon 
                            Depok, Sleman. Berjarak sekitar 5 km dari pusat Yogyakarta dan 
                            terdiri dari 2 RW serta 6 RT. Diapit Sungai Buntung dan Kladuan, 
                            wilayah ini sejuk, asri, serta memiliki potensi pertanian, peternakan, 
                            dan seni budaya. Tradisi gotong royong yang kuat menjadikan 
                            lingkungan harmonis dan nyaman, didukung antusiasme warga dalam 
                            menjaga kelestarian alam dan kesejahteraan bersama.
                        </p>
                        <Link 
                            class="w-fit p-5 bg-primary-2 regular-1 text-white rounded-4xl"
                            :href="route('profil')"
                            >
                            Selengkapnya
                        </Link>
                    </div>

                    <img class="w-[500px]" src="/images/deskripsi_images.png" alt="" />
                </div>

                <div class="relative flex flex-col justify-center items-center gap-9 outline-1 outline-white-2 py-10 px-20 rounded-lg">
                    <h1 class="extralarge-1">
                        Profil Pondok
                    </h1>
                    <img class="w-[500px]" src="/images/profile_images.png" alt="" />
                    <p class="w-[1000px] text-center">
                        Padukuhan Pondok memiliki keunggulan di bidang sosial, agraris, 
                        dan kebudayaan. Semangat gotong royong warganya masih kuat, 
                        tercermin dalam berbagai kegiatan kemasyarakatan dan pembangunan 
                        bersama. Dengan iklim sejuk dan lahan sawah luas, masyarakat 
                        tetap aktif dalam pertanian yang menjaga kelestarian alam 
                        sekaligus menjadi sumber penghidupan. Selain itu, seni dan 
                        budaya lokal terus dilestarikan sebagai identitas sekaligus 
                        perekat kerukunan warga, menjadikan Padukuhan Pondok harmonis, 
                        asri, dan berdaya.
                    </p>

                    <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-20 w-20 -bottom-10 -left-10 rotate-[33deg]"/>
                    <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-20 w-20 -top-10 -right-10 rotate-[33deg]"/>
                </div>
            </div>

            <!-- Sambutan -->
            <div class="relative w-full flex justify-center items-center gap-16 py-12 bg-linear-to-r from-black to-primary-2">
                <img src="/images/ornament/weaves_ornament.png" alt="" class="absolute bottom-0 left-0 translate-y-1/2 rotate-180"/>

                <div class="w-64 h-64 bg-white rounded-full" />
                
                <div class="flex flex-col gap-5 w-[800px]">
                    <h1 class="heading-1 text-white">
                        Sambutan Dukuh Pondok
                    </h1>
                    <p class="large-4 text-white">
                        Bapak Irfani Reza Pahlevi, Spd, Mpd.
                    </p>
                    <p class="regular-5 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare, enim non varius 
                        pellentesque, velit mi finibus orci, a ultricies ipsum nibh non neque. In dignissim enim 
                        rhoncus erat ultricies, vel imperdiet nibh lacinia. Curabitur consequat felis in arcu 
                        accumsan suscipit. Etiam elementum tincidunt massa ut dictum. Etiam sed tellus porttitor, 
                        aliquet tellus in, luctus enim. Aliquam vitae felis nec sapien fringilla aliquam nec 
                        vitae purus. Proin iaculis at nibh vel tempus. Aenean justo arcu, faucibus eu imperdiet et, 
                        consectetur ut mi.
                    </p>
                </div>

                <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-36 w-36 -bottom-18 right-10 rotate-[33deg]"/>
                <img src="/images/ornament/leaves_ornament.png" alt="" class="absolute h-16 w-16 -top-8 right-64 rotate-[146deg]"/>
            </div>

            <!-- Organisasi -->
            <div class="w-full flex flex-col justify-center items-center py-16 gap-4 bg-linear-to-b from-primary-9 to-transparent">
                <div class="bg-primary-7 caption-2 text-white rounded-4xl py-2 px-5">ORGANISASI</div>

                <div class="flex flex-col gap-2 justify-center items-center">
                    <h1 class="title-3">Organisasi Padukuhan Pondok</h1>
                    <p class="regular-5">
                        Berbagai Organisasi Kemasyarakatan yang ada di Padukuhan Pondok
                    </p>
                </div>

                <div class="grid grid-cols-4 gap-9 pt-9">
                    <OrganisasiCard
                        v-for="organisasi in organisasis.slice(0, 4)"
                        :key="organisasi.id"
                        :id="organisasi.id"
                        :title="organisasi.name"
                        :imageUrl="organisasi.image"
                        :imageAlt="organisasi.name"
                    />
                </div>

                <Link 
                    class="w-fit py-4 px-10 bg-primary-2 medium-1 text-white rounded-4xl"
                    :href="route('organisasi')"
                    >
                    Selengkapnya
                </Link>
            </div>

            <!-- Potansi Padukuhan -->
            <div class="flex flex-col justify-center bg-linear-to-r from-accent-10 to-primary-2 pt-16 rounded-t-[48px]">
                <div class="flex justify-center">
                    <div class="w-80 flex flex-col justify-center">
                        <div class="w-fit bg-primary-7 caption-2 text-white rounded-4xl py-2 px-5">POTENSI</div>
                        
                        <div class="flex flex-col gap-2 justify-center items-center">
                            <h1 class="heading-2 text-white">Potansi Padukuhan Pondok</h1>
                            <p class="regular-5 text-white">
                                Berbagai potensi yang ada di Padukuhan Pondok
                            </p>
                        </div>

                        <img
                            class="w-full"
                            src="/images/peta_pondok.png"
                            alt=""
                        />
                    </div>

                    <div class="flex flex-col gap-5">
                        <div class="flex justify-end gap-5">
                            <div class="flex flex-col justify-center items-center bg-white rounded-lg p-2">
                                <img src="/images/beranda/potensi_1.png" alt="" class="rounded-t-lg"/>
                                <div class="w-full flex flex-col p-4 gap-5">
                                    <h3 class="extralarge-2">
                                        Potensi Pertanian
                                    </h3>
                                    <p>
                                        Pertanian <a class="font-bold">padi–palawija–padi</a>. Larangan <br />
                                        pembakaran jerami, dukungan <a class="font-bold">irigasi</a>, <br />
                                        serta pembersihan <a class="font-bold">saluran air</a> menjadikan <br />
                                        pertanian lebih optimal.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center bg-white rounded-lg p-7 bg-linear-to-b from-[#5DA00C] to-[#31491A] text-white">
                                <img src="/images/beranda/potensi_2.png" alt="" class="rounded-t-lg"/>
                                <div class="w-full flex flex-col p-4 gap-5">
                                    <h3 class="extralarge-2">
                                        Potensi Seni dan Budaya
                                    </h3>
                                    <p>
                                        Seni budaya berkembang lewat <a class="font-bold">karawitan</a> <br />
                                        dan <a class="font-bold">jathilan</a>, kelembagaan, serta <br />
                                        keikutsertaan dalam event daerah.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-5">
                            <div class="flex flex-col  justify-center items-center p-5 bg-white rounded-lg">
                                <img src="/images/beranda/potensi_3.png" alt="" class="rounded-t-lg"/>
                                <div class="w-full flex flex-col p-4 gap-5">
                                    <h3 class="extralarge-2">
                                        Potensi Peternakan
                                    </h3>
                                    <p>
                                        Pemeliharaan kandang, pemilihan <br />
                                        bibit, dan pengaturan pola makan <br />
                                        ternak. Kotoran ternak <br />
                                        dimanfaatkan sebagai pupuk, <br />
                                        sementara hasilnya didistribusikan <br />
                                        ke pasar.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center p-5 bg-white rounded-lg">
                                <img src="/images/beranda/potensi_4.png" alt="" class="rounded-t-lg"/>
                                <div class="w-full flex flex-col p-4 gap-5">
                                    <h3 class="extralarge-2">
                                        Potensi Perikanan
                                    </h3>
                                    <p>
                                        Perikanan yang dikelola melalui <br />
                                        pembibitan, tata kelola kolam, <br />
                                        pakan ikan dan distribusi hasil <br />
                                        untuk meningkatkan ekonomi <br />
                                        warga.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center items-center p-5 bg-white rounded-lg">
                                <img src="/images/beranda/potensi_5.png" alt="" class="rounded-t-lg"/>
                                <div class="w-full flex flex-col p-4 gap-5">
                                    <h3 class="extralarge-2">
                                        Potensi Sosial
                                    </h3>
                                    <p>
                                        Posyandu balita dan lansia, <br />
                                        kegiatan PKK dan KWT. <br />
                                        Pengelolaan IPAL, TPS3R, dan <br />
                                        dukungan program TPPO <br />
                                        untuk menjaga lingkungan dan <br />
                                        keamanan masyarakat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img class="w-full h-[400px] object-cover object-top" src="/images/potensi_illustration.png" alt="" />
            </div>

            <!-- Berita -->
            <div class="relative w-full flex flex-col justify-center items-center py-9 gap-10">
                <img class="absolute w-24 -top-12 left-0 rotate-[146deg]" src="/images/ornament/leaves_ornament.png" alt="" />
                <img class="absolute w-36 -top-18 right-10 rotate-[123deg]" src="/images/ornament/leaves_ornament.png" alt="" />

                <div class="flex flex-col justify-center items-center gap-5">
                    <div class="w-fit bg-primary-7 caption-2 text-white rounded-4xl py-2 px-5">BERITA</div>
                        
                    <div class="flex flex-col gap-2 justify-center items-center">
                        <h1 class="heading-2">Berita Padukuhan Pondok</h1>
                        <p class="regular-5">
                            Berbagai Berita Kegiatan yang ada di Padukuhan Pondok
                        </p>
                    </div>
                </div>

                <div 
                    v-if="beritaTerbaru.length > 0"
                    class="grid grid-cols-3 gap-16">
                    <BeritaHomeCard
                        v-for="berita in beritaTerbaru.slice(0, 3)"
                        :key="berita.id"
                        :id="berita.id"
                        :title="berita.judul"
                        :description="berita.konten.substring(0, 100) + '...'"
                        :imageUrl="berita.gambar ? `/storage/${berita.gambar}` : '/images/home_title_clip_image.png'"
                        :date="formatDate(berita.created_at)"
                    />
                </div>

                <div
                    v-if="beritaTerbaru.length <= 0"
                    class="w-7xl h-80 bg-accent-11 rounded-2xl flex justify-center items-center">
                    Belum Ada Berita yang Tersedia
                </div>

                <Link 
                    class="bg-primary-2 rounded-full text-white regular-1 p-4"
                    :href="route('berita')"
                    >
                    Selengkapnya
                </Link>
            </div>

            <!-- Pembangunan -->
             <div class="relative w-full h-[568px] flex justify-center items-center bg-[url('/images/home_title_clip_image.png')] bg-cover">
                <div class="absolute top-0 w-full h-full bg-black opacity-70" />
                <div class="absolute top-0 w-full h-28 bg-linear-to-b from-white to-transparent" />

                <div class="flex flex-col justify-center items-center z-9">
                    <div class="w-fit bg-primary-7 caption-2 text-lighter-6 rounded-4xl py-2 px-5">Pembangunan</div>
                        
                    <div class="flex flex-col gap-2 justify-center items-center text-white">
                        <h1 class="heading-2">Mari Bersama Membangun Pondok</h1>
                        <p class="regular-5">
                            Bersama masyarakat Pondok bersatu, bersinergi, menuju Pondok yang lebih baik
                        </p>
                    </div>
                </div>
             </div>
        </div>
    </MainLayout>
</template>