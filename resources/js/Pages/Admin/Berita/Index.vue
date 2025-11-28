<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

defineProps({
  berita: Object,
  userRole: String,
})

const form = useForm({})

const deleteBerita = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
    form.delete(route('admin.berita.destroy', id))
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
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
              <div class="ml-4">
                <h1 class="text-xl font-semibold text-gray-900">Manajemen Berita</h1>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <Link
                :href="route('admin.berita.create')"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Tambah Berita
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Berita List -->
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <ul class="divide-y divide-gray-200">
            <li v-for="berita in berita.data" :key="berita.id">
              <div class="px-4 py-4 flex items-center justify-between">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-16 w-16">
                    <img
                      v-if="berita.gambar"
                      :src="`/storage/${berita.gambar}`"
                      :alt="berita.judul"
                      class="h-16 w-16 rounded-lg object-cover"
                    >
                    <div
                      v-else
                      class="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center"
                    >
                      <svg class="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="flex items-center">
                      <h3 class="text-lg font-medium text-gray-900">{{ berita.judul }}</h3>
                      <span
                        v-if="berita.is_published"
                        class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        Published
                      </span>
                      <span
                        v-else
                        class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        Draft
                      </span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                      {{ berita.user.name }} • {{ formatDate(berita.created_at) }}
                    </p>
                    <p v-if="berita.organisasi" class="text-sm text-gray-500">
                      {{ berita.organisasi.name }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <Link
                    :href="route('admin.berita.show', berita.id)"
                    class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Lihat
                  </Link>
                  <Link
                    :href="route('admin.berita.edit', berita.id)"
                    class="text-yellow-600 hover:text-yellow-900 text-sm font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    @click="deleteBerita(berita.id)"
                    class="text-red-600 hover:text-red-900 text-sm font-medium"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Pagination -->
        <div v-if="berita.links" class="mt-6">
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
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
