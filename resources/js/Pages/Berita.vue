<script setup>
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import BeritaHomeCard from '@/Components/BeritaHomeCard.vue';

defineProps({
  berita: Object,
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
    <Head title="Berita" />

    <MainLayout>
        <div class="flex flex-col justify-center items-center py-16 px-40 gap-14">
            <div class="flex flex-col justify-center items-center gap-10">
                <div class="flex flex-col justify-center items-center gap-5">
                    <h1 class="title-2">
                        Berita dari Padukuhan Pondok
                    </h1>
                    <p class="medium-5 text-center text-primary-6">
                        berbagai informasi dan kabar terbaru dari Padukuhan Pondok. Berita yang ditampilkan meliputi kegiatan masyarakat, <br />
                        acara seni dan budaya, kegiatan keagamaan, program pembangunan, hingga berbagai aktivitas sosial yang melibatkan <br />
                        warga.
                    </p>
                </div>
                <input 
                    type="text"
                    placeholder="Search"
                    class="w-[600px] input py-3 px-6 border-1 border-white-3 rounded-full"
                />
            </div>

            <div class="grid grid-cols-4 gap-9">
                <BeritaHomeCard
                    v-for="berita in berita.data"
                    :key="berita.id"
                    :id="berita.id"
                    :title="berita.judul"
                    :description="berita.konten.substring(0, 100) + '...'"
                    :imageUrl="berita.gambar ? `/storage/${berita.gambar}` : '/images/home_title_clip_image.png'"
                    :date="formatDate(berita.created_at)"
                />
            </div>

            <!-- Pagination -->
            <!-- <div v-if="berita.links" class="mt-8">
                <nav class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <Link
                            v-if="berita.links.prev"
                            :href="berita.links.prev"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Previous
                        </Link>
                        <Link
                            v-if="berita.links.next"
                            :href="berita.links.next"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Next
                        </Link>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing {{ berita.from }} to {{ berita.to }} of {{ berita.total }} results
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <template v-for="(link, index) in berita.links" :key="index">
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