<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-auto" src="/images/logo_kkn_pondok.png" alt="Logo">
            </div>
            <div class="ml-4">
              <h1 class="text-xl font-semibold text-gray-900">Edit Berita</h1>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <Link
              :href="route('admin.berita.index')"
              class="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Kembali ke Daftar Berita
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="bg-white shadow rounded-lg">
        <form @submit.prevent="submit" class="space-y-6 p-6">
          <div>
            <label for="judul" class="block text-sm font-medium text-gray-700">
              Judul Berita
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="judul"
                id="judul"
                v-model="form.judul"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300': form.errors.judul }"
              />
              <div v-if="form.errors.judul" class="mt-1 text-sm text-red-600">
                {{ form.errors.judul }}
              </div>
            </div>
          </div>

          <div v-if="userRole === 'super_admin'">
            <label for="organisasi_id" class="block text-sm font-medium text-gray-700">
              Organisasi
            </label>
            <div class="mt-1">
              <select
                name="organisasi_id"
                id="organisasi_id"
                v-model="form.organisasi_id"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300': form.errors.organisasi_id }"
              >
                <option value="">Pilih Organisasi</option>
                <option
                  v-for="organisasi in organisasis"
                  :key="organisasi.id"
                  :value="organisasi.id"
                >
                  {{ organisasi.name }}
                </option>
              </select>
              <div v-if="form.errors.organisasi_id" class="mt-1 text-sm text-red-600">
                {{ form.errors.organisasi_id }}
              </div>
            </div>
          </div>

          <div>
            <label for="gambar" class="block text-sm font-medium text-gray-700">
              Gambar
            </label>
            <div class="mt-1">
              <div v-if="berita.gambar" class="mb-4">
                <img
                  :src="`/storage/${berita.gambar}`"
                  :alt="berita.judul"
                  class="h-32 w-32 object-cover rounded-lg"
                >
                <p class="text-sm text-gray-500 mt-1">Gambar saat ini</p>
              </div>
              <input
                type="file"
                name="gambar"
                id="gambar"
                @change="handleFileChange"
                accept="image/*"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300': form.errors.gambar }"
              />
              <div v-if="form.errors.gambar" class="mt-1 text-sm text-red-600">
                {{ form.errors.gambar }}
              </div>
            </div>
          </div>

          <div>
            <label for="konten" class="block text-sm font-medium text-gray-700">
              Konten Berita
            </label>
            <div class="mt-1">
              <textarea
                name="konten"
                id="konten"
                rows="10"
                v-model="form.konten"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300': form.errors.konten }"
              ></textarea>
              <div v-if="form.errors.konten" class="mt-1 text-sm text-red-600">
                {{ form.errors.konten }}
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <input
              type="checkbox"
              name="is_published"
              id="is_published"
              v-model="form.is_published"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="is_published" class="ml-2 block text-sm text-gray-900">
              Publikasikan berita ini
            </label>
          </div>

          <div class="flex justify-end space-x-3">
            <Link
              :href="route('admin.berita.index')"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Batal
            </Link>
            <button
              type="submit"
              :disabled="form.processing"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              <span v-if="form.processing">Menyimpan...</span>
              <span v-else>Update Berita</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
  berita: Object,
  organisasis: Array,
  userRole: String,
})

const form = useForm({
  judul: props.berita.judul,
  konten: props.berita.konten,
  gambar: null,
  organisasi_id: props.berita.organisasi_id,
  is_published: props.berita.is_published,
})

const handleFileChange = (event) => {
  form.gambar = event.target.files[0]
}

const submit = () => {
  form.put(route('admin.berita.update', props.berita.id), {
    forceFormData: true,
  })
}
</script>
