<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

const props = defineProps({
    images: Array
});

const form = useForm({
    image: null,
    alt_text: '',
    caption: '',
    category: ''
});

const categories = ref([
    'berita',
    'fasilitas',
    'prestasi',
    'lainnya'
]);

const handleImageUpload = (event) => {
    form.image = event.target.files[0];
};

const submit = () => {
    form.post(route('images.store'), {
        onSuccess: () => {
            form.reset();
            document.getElementById('imageUpload').value = '';
        }
    });
};

const deleteImage = (image) => {
    if (confirm('Apakah Anda yakin ingin menghapus gambar ini?')) {
        form.delete(route('images.destroy', image.id));
    }
};
</script>

<template>
    <MainLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Upload Form -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-6">
                    <h2 class="text-2xl font-semibold mb-4">Upload Gambar Baru</h2>
                    <form @submit.prevent="submit" class="space-y-4">
                        <div>
                            <label for="imageUpload" class="block text-sm font-medium text-gray-700">Pilih Gambar</label>
                            <input
                                id="imageUpload"
                                type="file"
                                @input="handleImageUpload"
                                accept="image/*"
                                class="mt-1 block w-full"
                                required
                            >
                        </div>

                        <div>
                            <label for="category" class="block text-sm font-medium text-gray-700">Kategori</label>
                            <select
                                v-model="form.category"
                                id="category"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Pilih Kategori</option>
                                <option v-for="category in categories" :key="category" :value="category">
                                    {{ category.charAt(0).toUpperCase() + category.slice(1) }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label for="alt_text" class="block text-sm font-medium text-gray-700">Teks Alternatif</label>
                            <input
                                v-model="form.alt_text"
                                type="text"
                                id="alt_text"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Deskripsi singkat gambar untuk aksesibilitas"
                            >
                        </div>

                        <div>
                            <label for="caption" class="block text-sm font-medium text-gray-700">Caption</label>
                            <input
                                v-model="form.caption"
                                type="text"
                                id="caption"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Caption atau deskripsi gambar"
                            >
                        </div>

                        <div class="flex justify-end">
                            <button
                                type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                :disabled="form.processing"
                            >
                                {{ form.processing ? 'Mengunggah...' : 'Upload' }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Image Gallery -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-4">Galeri Gambar</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div v-for="image in images" :key="image.id" class="relative group">
                            <img
                                :src="image.secure_url"
                                :alt="image.alt_text"
                                class="w-full h-48 object-cover rounded-lg"
                            >
                            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                                <button
                                    @click="deleteImage(image)"
                                    class="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                                >
                                    Hapus
                                </button>
                            </div>
                            <div class="mt-2">
                                <p class="text-sm font-medium text-gray-900">{{ image.caption || 'Tanpa caption' }}</p>
                                <p class="text-sm text-gray-500">{{ image.category }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>