<template>
	<Head title="Admin Login" />
	<div class="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-[#3D5300] to-[#1F2F10]">
		<div class="relative overflow-hidden flex flex-col px-12 py-16 rounded-2xl bg-white gap-16">
			<img 
				src="/images/ornament/login_ornament.png" 
				alt="login ornament"
				class="absolute top-0 left-0 w-full"
			/>
			
			<div class="flex flex-col justify-center items-center gap-3">
				<h1 class="title-2">Login</h1>
				<h2 class="medium-3 text-[#4E712D]">Admin Website Pedukuhan Pondok</h2>
			</div>
			<div class="flex flex-col gap-6">
				<form 
					class="flex flex-col gap-6"
                    @submit.prevent="submit"
                >
					<div class="flex flex-col gap-8">
						<div class="flex flex-col gap-5">
							<label 
								for="email" 
								class="medium-3"
							>
								Email
							</label>
							<input 
								type="email" 
								id="email" 
								autocomplete="email"
								v-model="form.email"
								required 
								class="w-[500px] input rounded-lg p-5 outline-1 regular-5 outline-black-5" 
								:class="{ 'border-red-300': form.errors.email }"
								placeholder="Masukkan email admin anda" 
							/>
							<div v-if="form.errors.email" class="mt-1 text-sm text-red-600">
								{{ form.errors.email }}
							</div>
						</div>
						<div class="flex flex-col gap-5">
							<label 
								for="password" 
								class="medium-3"
							>
								Password
							</label>
							<input 
								type="password" 
								id="password" 
								autocomplete="current-password"
								v-model="form.password" 
								required
								class="w-[500px] input rounded-lg p-5 outline-1 regular-5 outline-black-5" 
								placeholder="Masukkan password anda" 
							/>
							<div v-if="form.errors.password" class="mt-1 text-sm text-red-600">
								{{ form.errors.password }}
							</div>
						</div>
					</div>

					<hr class="border border-black-5" />

					<button 
						type="submit"
						:disabled="form.processing"
						class="bg-darker-3 p-5 medium-3 text-white rounded-full hover:cursor-pointer">
						Login
					</button>
				</form>
			</div>
		</div>

		<img src="/images/ornament-1.png" alt="login ornament" class="absolute bottom-0 left-0">
		<img src="/images/ornament-1.png" alt="login ornament" class="absolute bottom-0 right-0 scale-x-[-1]">
  	</div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  	email: '',
  	password: '',
  	remember: false,
})

const submit = () => {
  	form.post('/admin/login')
}
</script>
