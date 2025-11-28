<template>
	<Head title="Dashboard" />

	<AdminLayout>
		<div class="w-full h-full overflow-scroll">
			<!-- Navigation -->
			 
			<div class="relative w-full py-16 px-9 flex items-center bg-primary-1 shadow overflow-hidden">
				<div class="absolute left-0 w-full h-full bg-linear-to-r from-black to-transparent z-10"></div>
				<div class="flex flex-col justify-between z-10">
					<div class="flex items-center justify-center space-x-2">
						<span class="heading-2 text-white">Halo, Selamat datang {{ userRole === 'super_admin' ? 'Super Admin' : 'Admin Organisasi' }}</span>
					</div>
					<div>
						<p class="large-4 text-white">Dashboard Website Padukuhan Pondok</p>
					</div>
				</div>
				<img
					src="/images/admin/dashboard_banner.jpg"
					alt="Dashboard Banner"
					class="absolute left-0 z-0"
				/>
			</div>

			<div class="w-fulll mx-auto py-6 sm:px-6 lg:px-8">
				<!-- Stats -->
				<div class="h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

					<div class="relative flex flex-col p-5 bg-darker-6 overflow-hidden shadow rounded-lg gap-5">
						<p class="title-1 text-white">
							{{ stats.published_berita }}
						</p>
						<p class="large-2 text-white">
							Berita
						</p>
						<img 
							src="/images/admin/ic_berita.png"
							alt="ic_berita"
							class="absolute bottom-5 right-5 w-[200px] opacity-50"
						/>
					</div>

					<div class="relative flex flex-col p-5 bg-darker-6 overflow-hidden shadow rounded-lg gap-5">
						<p class="title-1 text-white">
							{{ stats.total_prestasi }}
						</p>
						<p class="large-2 text-white">
							Prestasi
						</p>
						<img 
							src="/images/admin/ic_prestasi.png"
							alt="ic_prestasi"
							class="absolute bottom-5 right-5 w-[200px] opacity-50"
						/>
					</div>

					<div class="relative flex flex-col p-5 bg-darker-6 overflow-hidden shadow rounded-lg gap-5">
						<p class="title-1 text-white">
							{{ stats.total_fasilitas }}
						</p>
						<p class="large-2 text-white">
							Fasilitas
						</p>
						<img 
							src="/images/admin/ic_fasilitas.png"
							alt="ic_fasilitas"
							class="absolute bottom-5 right-5 w-[200px] opacity-50"
						/>
					</div>
				</div>

				<!-- Quick Actions -->
				<!-- <div class="bg-white shadow rounded-lg mb-8">
					<div class="px-4 py-5 sm:p-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							<Link
								:href="route('admin.berita.create')"
								class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
								</svg>
								Tambah Berita
							</Link>

							<Link
								v-if="userRole === 'super_admin'"
								:href="route('admin.prestasi.create')"
								class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
							>
								<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
								</svg>
								Tambah Prestasi
							</Link>

							<Link
								v-if="userRole === 'super_admin'"
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
				</div> -->

				<!-- Recent Content -->
				<div class="flex flex-col gap-9">
					<!-- Recent Berita -->
					<div class="rounded-lg gap-8">
						<div class="w-full flex flex-col gap-8">
							<div class="w-full bg-primary-4 p-3 rounded-lg">
								<h3 class="large-2 text-white">Berita Terbaru Padukuhan Pondok</h3>
							</div>
							<div class="flex gap-8">
								<BeritaHomeCard
									v-for="berita in beritaTerbaru"
									:key="berita.id"
									:id="berita.id"
									:title="berita.judul"
									:description="berita.konten.substring(0, 100) + '...'"
									:imageUrl="berita.gambar ? `/storage/${berita.gambar}` : '/images/home_title_clip_image.png'"
									:date="formatDate(berita.created_at)"
								/>
							</div>
						</div>
					</div>

					<!-- Recent Prestasi (Super Admin only) -->
					<div class="rounded-lg gap-8">
						<div class="w-full flex flex-col gap-8">
							<div class="w-full bg-primary-4 p-3 rounded-lg">
								<h3 class="large-2 text-white">Prestasi Terbaru Padukuhan Pondok</h3>
							</div>
							<div class="flex flex-col gap-8">
								<PrestasiComponent
									v-for="prestasi in prestasiTerbaru"
									:key="prestasi.id"
									:id="prestasi.id"
									:title="prestasi.judul"
									:description="prestasi.deskripsi"
									:imageUrl="prestasi.gambar ? `/storage/${prestasi.gambar}` : null"
									:date="formatDate(prestasi.tanggal_prestasi)"
									:penghargaan="prestasi.penghargaan"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</AdminLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import BeritaHomeCard from '@/Components/BeritaHomeCard.vue'
import PrestasiComponent from '@/Components/PrestasiComponent.vue'

defineProps({
	stats: Object,
	beritaTerbaru: Array,
	prestasiTerbaru: Array,
	userRole: String,
})

const formatDate = (date) => {
	return new Date(date).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})
}
</script>
