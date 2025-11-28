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
								<h1 class="text-xl font-semibold text-gray-900">Manajemen Fasilitas</h1>
							</div>
						</div>
						<div class="flex items-center space-x-4">
							<Link
								:href="route('admin.dashboard')"
								class="text-sm text-gray-500 hover:text-gray-700"
							>
								← Dashboard
							</Link>
							<Link
								:href="route('admin.fasilitas.create')"
								class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
							>
								<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
								</svg>
								Tambah Fasilitas
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<!-- Daftar Fasilitas -->
				<div class="bg-white shadow overflow-hidden sm:rounded-lg">
					<div class="divide-y divide-gray-200">
						<div v-for="fasilitas in fasilitas.data" :key="fasilitas.id" class="p-4">
							<div class="flex items-start space-x-4">
								<div class="flex-shrink-0">
									<img
										v-if="fasilitas.gambar"
										:src="`/storage/${fasilitas.gambar}`"
										:alt="fasilitas.nama"
										class="h-12 w-12 rounded-lg object-cover"
									>
									<div
										v-else
										class="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center"
									>
										<svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
									</div>
								</div>
								<div class="flex-1 min-w-0">
									<div class="flex items-center">
										<p class="text-sm font-medium text-gray-900 truncate">
											{{ fasilitas.nama }}
										</p>
										<span
											v-if="fasilitas.is_published"
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
										{{ fasilitas.user.name }} • {{ formatDate(fasilitas.created_at) }}
									</p>
									<p v-if="fasilitas.lokasi" class="text-sm text-gray-500">
										Lokasi: {{ fasilitas.lokasi }}
									</p>
									<p v-if="fasilitas.kategori" class="text-sm text-gray-500">
										Kategori: {{ fasilitas.kategori }}
									</p>
								</div>
								<div class="flex items-center space-x-2">
									<Link
										:href="route('admin.fasilitas.show', fasilitas.id)"
										class="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
									>
										Lihat
									</Link>
									<Link
										:href="route('admin.fasilitas.edit', fasilitas.id)"
										class="text-yellow-600 hover:text-yellow-900 text-sm font-medium"
									>
										Edit
									</Link>
									<button
										@click="deleteFasilitas(fasilitas.id)"
										class="text-red-600 hover:text-red-900 text-sm font-medium"
									>
										Hapus
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination -->
				<div v-if="fasilitas.links.length > 3" class="mt-4">
					<div class="flex justify-between items-center">
						<div class="flex-1 flex justify-between sm:hidden">
							<Link
								v-if="fasilitas.prev_page_url"
								:href="fasilitas.prev_page_url"
								class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								Previous
							</Link>
							<Link
								v-if="fasilitas.next_page_url"
								:href="fasilitas.next_page_url"
								class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								Next
							</Link>
						</div>
						<div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
							<div>
								<p class="text-sm text-gray-700">
									Showing
									<span class="font-medium">{{ fasilitas.from }}</span>
									to
									<span class="font-medium">{{ fasilitas.to }}</span>
									of
									<span class="font-medium">{{ fasilitas.total }}</span>
									results
								</p>
							</div>
							<div>
								<nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
									<Link
										v-for="(link, i) in fasilitas.links"
										:key="i"
										v-if="i !== 0 && i !== fasilitas.links.length - 1"
										:href="link.url"
										:class="[
											link.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
											'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
										]"
										v-html="link.label"
									/>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</AdminLayout>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

defineProps({
	fasilitas: Object,
})

const form = useForm({})

const deleteFasilitas = (id) => {
	if (confirm('Apakah Anda yakin ingin menghapus fasilitas ini?')) {
		form.delete(route('admin.fasilitas.destroy', id))
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