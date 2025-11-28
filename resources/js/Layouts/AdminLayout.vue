<script setup>
import { useForm } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'

const form = useForm({})
const logout = () => {
	form.post('/admin/logout')
}

defineProps({
	userRole: String,
})
</script>

<template>
	<div class="w-lvw h-lvh flex">
		<div class="w-fit h-full flex flex-col justify-between bg-primary-4 p-5">
			<div class="flex flex-col gap-5">
				<div class="flex gap-1 items-center justify-center">
					<img src="/images/logo_kkn_pondok.png" alt="logo" class="w-[100px]">
					<div class="border h-1/2 border-white"></div>
					<p class="medium-2 text-white ms-4">
						Padukuhan
						Pondok.
					</p>
				</div>
				<div class="border w-full border-white"></div>
				<div class="flex flex-col gap-2">
					<Link :href="route('admin.dashboard')"
                        class="inline-flex items-center px-5 py-3 border-b-2 border-transparent medium-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                        :class="{ 'bg-darker-4 rounded-lg': route().current('admin.dashboard') }">
						<img src="/images/admin/ic_dashboard.png" alt="ic_dashboard" class="w-[20px] me-2">
						Dashboard
					</Link>
					<Link :href="route('admin.berita.create')"
                        class="inline-flex items-center px-5 py-3 border-b-2 border-transparent medium-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                        :class="{ 'bg-darker-4 rounded-lg': route().current('admin.berita.*') }">
						<img src="/images/admin/ic_berita.png" alt="ic_berita" class="w-[20px] me-2">
						Berita
					</Link>
					<Link :href="route('admin.prestasi.create')"
                        class="inline-flex items-center px-5 py-3 border-b-2 border-transparent medium-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                        :class="{ 'bg-darker-4 rounded-lg': route().current('admin.prestasi.*') }">
						<img src="/images/admin/ic_prestasi.png" alt="ic_prestasi" class="w-[20px] me-2">
						Prestasi
					</Link>
					<Link :href="route('admin.fasilitas.create')"
                        class="inline-flex items-center px-5 py-3 border-b-2 border-transparent medium-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                        :class="{ 'bg-darker-4 rounded-lg': route().current('admin.fasilitas.*') }">
						<img src="/images/admin/ic_fasilitas.png" alt="ic_fasilitas" class="w-[20px] me-2">
						Fasilitas
					</Link>
				</div>
			</div>

			<div class="flex flex-col gap-6 justify-center items-center">
				<form class="w-full flex" @submit.prevent="logout">
					<button :href="route('logout')" method="post" as="button" 
						class="w-full justify-center inline-flex items-center p-4 bg-darker-3 rounded-lg medium-5 text-white tracking-widest hover:cursor-pointer">
						<img src="/images/admin/ic_logout.png" alt="ic_logout" class="w-[20px] me-2">
						Logout
					</button>
				</form>
				<div class="border border-white w-full"></div>
				<p class="text-white">© 2025 KKN UNY Pondok</p>
			</div>
		</div>
		<div class="w-full flex justify-center items-center">
			<slot />
		</div>
	</div>
</template>