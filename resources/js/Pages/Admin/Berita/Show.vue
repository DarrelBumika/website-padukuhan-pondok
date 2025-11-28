<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
  berita: Object,
})

const form = useForm({})

const deleteBerita = () => {
  if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
    form.delete(route('admin.berita.destroy', props.berita.id))
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <AdminLayout>
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
                <h1 class="text-xl font-semibold text-gray-900">Detail Berita</h1>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <Link
                :href="route('admin.berita.index')"
                class="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Kembali ke Daftar Berita
              </Link>
              <Link
                :href="route('admin.berita.edit', berita.id)"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Edit Berita
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <!-- Header -->
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-2xl font-bold text-gray-900">{{ berita.judul }}</h1>
                <div class="mt-2 flex items-center space-x-4">
                  <span class="text-sm text-gray-500">
                    Oleh: {{ berita.user.name }}
                  </span>
                  <span class="text-sm text-gray-500">
                    {{ formatDate(berita.created_at) }}
                  </span>
                  <span v-if="berita.organisasi" class="text-sm text-gray-500">
                    {{ berita.organisasi.name }}
                  </span>
                </div>
              </div>
              <div>
                <span
                  v-if="berita.is_published"
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  Published
                </span>
                <span
                  v-else
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
                >
                  Draft
                </span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="px-6 py-6">
            <div v-if="berita.gambar" class="mb-6">
              <img
                :src="`/storage/${berita.gambar}`"
                :alt="berita.judul"
                class="w-full h-64 object-cover rounded-lg"
              >
            </div>
            
            <div class="prose max-w-none">
              <div v-html="berita.konten" class="text-gray-700"></div>
            </div>
          </div>

          <!-- Actions -->
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div class="flex justify-between">
              <div class="flex space-x-3">
                <Link
                  :href="route('admin.berita.edit', berita.id)"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Berita
                </Link>
                <button
                  @click="deleteBerita"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Hapus Berita
                </button>
              </div>
              <div>
                <Link
                  :href="route('admin.berita.index')"
                  class="text-sm text-gray-500 hover:text-gray-700"
                >
                  ← Kembali ke Daftar Berita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
