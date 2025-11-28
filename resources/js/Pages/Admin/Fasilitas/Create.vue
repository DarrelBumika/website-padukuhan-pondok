<script setup>
import { Head } from '@inertiajs/vue3'
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const form = useForm({
	nama: '',
	deskripsi: '',
	gambar: null,
	is_published: false,
})

const handleFileChange = (event) => {
  	form.gambar = event.target.files[0]
}

const submit = () => {
	form.post(route('admin.fasilitas.store'), {
		forceFormData: true,
	})
}
</script>

<template>
	<AdminLayout>
		<Head title="Fasilitas" />
		<div class="w-full h-full flex flex-col px-16 py-8 gap-6 overflow-scroll">
				<!-- Navigation -->
				<div class="flex flex-col gap-3">
					<h1 class="heading-2">
						Upload Fasilitas Padukuhan Pondok
					</h1>

					<div class="border border-[#D0D0D0] w-full"></div>
				</div>

				<form @submit.prevent="submit">
					<div class="rounded-lg gap-8">
						<div class="w-full flex flex-col gap-8">
							<div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">1. Judul Fasilitas</h2>
								</div>
								<input
									type="text"
									name="nama"
									id="nama"
									v-model="form.nama"
									class="w-full border border-[#D0D0D0] px-4 py-3 rounded-lg regular-5" 
									placeholder="Tuliskan Nama Fasilitas"
									:class="{ 'border-red-300': form.errors.judul }"
									/>
								<div v-if="form.errors.judul" class="mt-1 text-sm text-red-600">
									{{ form.errors.judul }}
								</div>
							</div>
							<div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">2. Deskirpsi Fasilitas</h2>
								</div>
								<input
									type="text"
									name="deskripsi"
									id="deskripsi"
									v-model="form.deskripsi"
									class="w-full border border-[#D0D0D0] px-4 py-3 rounded-lg regular-5" 
									placeholder="Tuliskan Deskripsi Fasilitas"
									:class="{ 'border-red-300': form.errors.deskripsi }"
									/>
								<div v-if="form.errors.judul" class="mt-1 text-sm text-red-600">
									{{ form.errors.deskripsi }}
								</div>
							</div>
							<div class="w-full flex flex-col gap-6">
								<div class="flex flex-col gap-3">
									<h2 class="large-3">3. Dokumentasi Fasilitas</h2>
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
							</div>
							<button class="w-full flex justify-center items-center rounded-full p-4 bg-darker-3 text-white large-2 hover:cursor-pointer" type="submit">
								Upload Fasilitas
							</button>
						</div>
					</div>
				</form>
			</div>
	</AdminLayout>
</template>
