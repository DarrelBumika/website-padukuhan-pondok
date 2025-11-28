<!-- <template>
  <div class="min-h-screen bg-gray-50">
	<!-- Navigation -->
	<!-- <nav class="bg-white shadow">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
		  <div class="flex items-center">
			<div class="flex-shrink-0">
			  <img class="h-8 w-auto" src="/images/logo_kkn_pondok.png" alt="Logo">
			</div>
			<div class="ml-4">
			  <h1 class="text-xl font-semibold text-gray-900">Tambah Berita Baru</h1>
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
			  <span v-else>Simpan Berita</span>
			</button>
		  </div>
		</form>
	  </div>
	</div>
  </div>
</template> -->

<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
  organisasis: Array,
  userRole: String,
})

const form = useForm({
  judul: '',
  konten: '',
  gambar: null,
  organisasi_id: props.userRole === 'admin_organisasi' ? 1 : '', // Default untuk admin organisasi
  is_published: false,
})

const handleFileChange = (event) => {
  form.gambar = event.target.files[0]
}

const submit = () => {
  form.post(route('admin.berita.store'), {
	forceFormData: true,
  })
}
</script>

<template>
	<Head title="Berita" />

	<AdminLayout>
		<div class="w-full h-full flex flex-col px-16 py-8 gap-6 overflow-scroll">
			<!-- Navigation -->
			<div class="flex flex-col gap-3">
				<h1 class="heading-2">
					Upload Berita Padukuhan Pondok
				</h1>

				<div class="border border-[#D0D0D0] w-full"></div>

				<div class="relative w-full flex justify-center items-center overflow-hidden p-10 bg-linear-to-b from-[#3E5A24] to-[#293700] rounded-lg">
					<img src="/images/admin/berita_timeline.png" alt="berita timeline" class="">
					<img src="/images/ornament-1.png" alt="ornament 1" class="absolute bottom-0 left-0 w-80">
					<img src="/images/ornament-1.png" alt="ornament 2" class="absolute bottom-0 right-0 w-80 scale-x-[-1]">
				</div>
			</div>

			<form @submit.prevent="submit">
				<div class="rounded-lg gap-8">
					<div class="w-full flex flex-col gap-8">
						<div class="w-full bg-primary-4 p-3 rounded-lg">
							<h3 class="large-2 text-white">Dokumentasi Berita</h3>
						</div>
						<div class="w-full flex flex-col gap-6">
							<div class="flex flex-col gap-3">
								<h2 class="large-3">1. Gambar Sampul Berita</h2>
								<p class="regular-5 text-black-5">Silahkan upload foto dengan rasio 16:9 atau landscape.</p>
							</div>
							<input
								type="file"
								name="gambar"
								id="gambar"
								@change="handleFileChange"
								accept="image/*"
								class="w-full h-[200px] border border-[#D0D0D0] p-2 rounded-md"
								:class="{ 'border-red-300': form.errors.gambar }"
							/>
							<div v-if="form.errors.gambar" class="mt-1 text-sm text-red-600">
									{{ form.errors.gambar }}
								</div>
						</div>
						<!-- <div class="w-full flex flex-col gap-6">
							<div class="flex flex-col gap-3">
								<h2 class="large-3">2. Galeri Berita</h2>
								<p class="regular-5 text-black-5">Silahkan upload foto dengan rasio 1:1 atau persegi.</p>
							</div>
							
							<input
								type="file"
								name="gambar"
								id="gambar"
								@change="handleFileChange"
								accept="image/*"
								class="w-[200px] h-[200px] border border-[#D0D0D0] p-2 rounded-md"
								:class="{ 'border-red-300': form.errors.gambar }"
							/>
						</div> -->

						<div class="w-full flex flex-col gap-8">
							<div class="w-full bg-primary-4 p-3 rounded-lg">
								<h3 class="large-2 text-white">Informasi dan Isi Berita</h3>
							</div>
							<div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">1. Judul Berita</h2>
								</div>
								<input
									type="text"
									name="judul"
									id="judul"
									v-model="form.judul"
									class="w-full border border-[#D0D0D0] px-4 py-3 rounded-lg regular-5" 
									placeholder="Tuliskan Judul Berita"
									:class="{ 'border-red-300': form.errors.judul }"
									/>
								<div v-if="form.errors.judul" class="mt-1 text-sm text-red-600">
									{{ form.errors.judul }}
								</div>
							</div>
							<!-- <div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">2. Tanggal Berita</h2>
								</div>
								<input type="date" class="w-fit border border-[#D0D0D0] px-4 py-3 rounded-lg regular-5" placeholder="Tuliskan Judul Berita"/>
							</div> -->
							<div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">2. Isi Berita</h2>
								</div>
								<textarea
									name="konten"
									id="konten"
									rows="10"
									v-model="form.konten"
									class="w-full h-[200px] border border-[#D0D0D0] px-4 py-3 rounded-lg regular-5" 
									placeholder="Tuliskan Isi Berita"
									:class="{ 'border-red-300': form.errors.konten }"
								></textarea>
								<div v-if="form.errors.konten" class="mt-1 text-sm text-red-600">
									{{ form.errors.konten }}
								</div>
							</div>
						</div>
						<button class="w-full flex justify-center items-center rounded-full p-4 bg-darker-3 text-white large-2 hover:cursor-pointer" type="submit">
							Upload Berita
						</button>
					</div>
				</div>
			</form>
		</div>
	</AdminLayout>
</template>
