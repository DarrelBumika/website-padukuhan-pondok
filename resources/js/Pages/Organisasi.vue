<script setup>
import { Head } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import OrganisasiCard from '@/Components/OrganisasiCard.vue';

defineProps({
  organisasis: Array,
});
</script>

<template>
    <Head title="Organisasi" />

    <MainLayout>
        <div class="flex flex-col justify-center items-center py-16 px-40 gap-14">
            <div class="flex flex-col justify-center items-center gap-10">
                <div class="flex flex-col justify-center items-center gap-5">
                    <h1 class="title-2">
                        Organisasi Kemasyarakatan Padukuhan Pondok
                    </h1>
                    <p class="medium-5 text-center text-primary-6">
                        Di Padukuhan Pondok terdapat berbagai organisasi kemasyarakatan seperti Karang Taruna, PKK, <br />
                        kelompok seni, organisasi keagamaan, kelompok tani, dan posyandu yang bersama-sama <br />
                        berperan aktif dalam mempererat kebersamaan, meningkatkan kesejahteraan, serta menjaga <br />
                        kerukunan warga.
                    </p>
                </div>
                <input 
                    type="text"
                    placeholder="Search"
                    class="w-[600px] input py-3 px-6 border-1 border-white-3 rounded-full"
                />
            </div>

            <div class="grid grid-cols-4 gap-9">
                <OrganisasiCard 
                    v-for="organisasi in organisasis"
                    :key="organisasi.id"
                    :id="organisasi.id"
                    :title="organisasi.name"
                    :imageUrl="organisasi.image"
                    :imageAlt="organisasi.name"
                />
            </div>
        </div>
    </MainLayout>
</template>