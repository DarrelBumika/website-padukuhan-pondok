<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import MainLayout from '@/Layouts/MainLayout.vue';

const menuItems = ref([
    { id: 'deskirpsi', title: 'Deskripsi', active: true },
    { id: 'dokumentasi', title: 'Dokumentasi', active: false },
    { id: 'administrasi', title: 'Administrasi', active: false },
    { id: 'berita', title: 'Berita', active: false }
]);

const props = defineProps({
  organisasi: Object,
  beritaOrganisasi: Object,
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const setActiveMenu = (menuId) => {
  menuItems.value.forEach(item => {
    item.active = item.id === menuId;
  });
};
</script>

<template>
    <Head :title="organisasi ? organisasi.name : 'Organisasi Tidak Ditemukan'" />

    <MainLayout>
        <div class="w-full flex flex-col">
            <img src="/images/profile_banner.png" class="w-full shadow-2xl" alt="Profile Banner" />
            
            <div class="w-full flex flex-col justify-center items-center gap-14 py-5">
                <div class="flex gap-20">
                    <img 
                        :src="organisasi.image || '/images/organisasi/default.png'" 
                        class="w-[200px] h-[200px] rounded-lg object-cover shadow-2xl -mt-[100px]" 
                        alt="Profile Banner" 
                    />
                    <div class="w-4xl flex flex-col gap-3">
                        <h1 class="title-2">{{ organisasi.name }}</h1>
                        <p class="regular-5">{{ organisasi.description.substring(0, 150) }}...</p>
                    </div>
                </div>

                <div class="flex gap-20">
                    <div class="w-[200px] h-fit bg-primary-2 flex flex-col rounded-lg px-2 py-6 gap-2 sticky top-0">
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
                                :href="`#${item.id}`"
                            >
                                {{ item.title }}
                            </a>
                        </div>
                    </div>

                    <div class="w-4xl flex flex-col gap-6 rounded-lg flex-1">
                        <div id="description">
                            <h2 class="large-1 mb-6 text-primary-8">Deskripsi {{ organisasi.name }}</h2>
                            <p class="regular-4 text-gray-700 leading-relaxed">
                                {{ organisasi.description }}
                            </p>
                        </div>

                        <div id="dokumentasi">
                            <h2 class="large-1 mb-6 text-primary-8">Dokumentasi {{ organisasi.name }}</h2>

                        </div>

                        <div id="administrasi">
                            <h2 class="large-1 mb-6 text-primary-8">Administrasi {{ organisasi.name }}</h2>
                        </div>

                        <div id="berita">
                            <h2 class="large-1 mb-6 text-primary-8">Berita Terkait {{ organisasi.name }}</h2>
                            <div v-if="beritaOrganisasi && beritaOrganisasi.data && beritaOrganisasi.data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div 
                                    v-for="berita in beritaOrganisasi.data" 
                                    :key="berita.id"
                                    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <img 
                                        v-if="berita.gambar"
                                        :src="`/storage/${berita.gambar}`"
                                        :alt="berita.judul"
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
                                            {{ berita.judul }}
                                        </h3>
                                        <p class="text-gray-600 text-sm mb-2">
                                            {{ berita.konten.substring(0, 100) }}...
                                        </p>
                                        <div class="flex justify-between items-center text-sm text-gray-500">
                                            <span>{{ formatDate(berita.created_at) }}</span>
                                            <Link 
                                                :href="route('berita.detail', berita.id)"
                                                class="text-blue-600 hover:text-blue-800"
                                            >
                                                Baca selengkapnya →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center py-8">
                                <p class="text-gray-500">Belum ada berita untuk organisasi ini.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <div v-if="organisasi" class="flex flex-col justify-center items-center py-16 px-40 gap-14"> -->
            <!-- Back Button -->
            <!-- <div class="w-full flex justify-start">
                <Link 
                    :href="route('organisasi')"
                    class="flex items-center gap-2 medium-3 text-primary-6 hover:text-primary-7 transition-colors"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Kembali ke Daftar Organisasi
                </Link>
            </div> -->

            <!-- Organization Header -->
            <!-- <div class="flex flex-col justify-center items-center gap-10">
                <div class="flex flex-col justify-center items-center gap-5">
                    <h1 class="title-2 text-center">
                        {{ organisasi.name }}
                    </h1>
                </div>
            </div> -->

            <!-- Organization Content -->
            <!-- <div class="w-full max-w-4xl">
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden"> -->
                    <!-- Organization Image -->
                    <!-- <div class="w-full h-96 overflow-hidden">
                        <img
                            :src="organisasi.image"
                            :alt="organisasi.name"
                            class="w-full h-full object-cover"
                        />
                    </div> -->
                    
                    <!-- Organization Description -->
                    <!-- <div class="p-8">
                        <h2 class="large-1 mb-6 text-primary-8">Deskripsi Organisasi</h2>
                        <p class="regular-4 text-gray-700 leading-relaxed">
                            {{ organisasi.description }}
                        </p>
                    </div>
                </div>
            </div> -->

            <!-- Related Organizations -->
            <!-- <div class="w-full max-w-4xl">
                <h2 class="large-1 mb-6 text-center text-primary-8">Organisasi Lainnya</h2>
                <div class="grid grid-cols-3 gap-6">
                    <Link
                        v-for="otherOrg in organisasiData.filter(org => org.id !== organisasi.id).slice(0, 3)"
                        :key="otherOrg.id"
                        :href="route('organisasi.detail', { id: otherOrg.id })"
                        class="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div class="w-full h-48 overflow-hidden">
                            <img
                                :src="otherOrg.image"
                                :alt="otherOrg.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div class="p-4">
                            <h3 class="medium-3 text-gray-800 group-hover:text-primary-6 transition-colors">
                                {{ otherOrg.name }}
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div> -->

        <!-- Organization Not Found -->
        <!-- <div v-else class="flex flex-col justify-center items-center py-16 px-40 gap-14">
            <div class="text-center">
                <h1 class="title-2 text-red-600 mb-4">Organisasi Tidak Ditemukan</h1>
                <p class="regular-4 text-gray-600 mb-8">
                    Organisasi yang Anda cari tidak ditemukan atau mungkin telah dihapus.
                </p>
                <Link 
                    :href="route('organisasi')"
                    class="inline-flex items-center gap-2 py-3 px-6 bg-primary-2 medium-1 text-white rounded-4xl hover:bg-primary-3 transition-colors"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Kembali ke Daftar Organisasi
                </Link>
            </div>
        </div> -->
    </MainLayout>
</template>
