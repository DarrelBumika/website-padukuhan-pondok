<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen">
            <nav class="sm:flex sm:flex-col sm:justify-center sm:items-center min-h-20 bg-primary-6 sticky top-0">
                <div class="max-w-7xl flex mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <!-- <div class="shrink-0 flex items-center">
                                <Link :href="route('beranda')">
                                    <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div> -->

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link :href="route('beranda')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('beranda') }">
                                    Beranda
                                </Link>
                                <Link :href="route('profil')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('profil') }">
                                    Profil
                                </Link>
                                <Link :href="route('organisasi')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('organisasi') }">
                                    Organisasi
                                </Link>
                                <Link :href="route('berita')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('berita') }">
                                    Berita
                                </Link>
                                <Link :href="route('fasilitas')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('fasilitas') }">
                                    Fasilitas
                                </Link>
                                <Link :href="route('prestasi')"
                                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent large-3 text-white hover:text-white hover:underline focus:outline-none transition duration-150 ease-in-out"
                                    :class="{ 'underline': route().current('prestasi') }">
                                    Prestasi
                                </Link>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <Link :href="route('beranda')"
                            class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:text-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            :class="{ 'border-white underline': route().current('beranda') }">
                            Beranda
                        </Link>
                        <Link :href="route('profil')"
                            class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:text-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            :class="{ 'border-white underline': route().current('profil') }">
                            Profil
                        </Link>
                        <Link :href="route('berita')"
                            class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:text-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            :class="{ 'border-white underline': route().current('berita') }">
                            Berita
                        </Link>
                        <Link :href="route('fasilitas')"
                            class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:text-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            :class="{ 'border-white underline': route().current('fasilitas') }">
                            Fasilitas
                        </Link>
                        <Link :href="route('prestasi')"
                            class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:text-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            :class="{ 'border-white underline': route().current('prestasi') }">
                            Prestasi
                        </Link>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main class="w-full">
                <slot />
            </main>

            <footer class="w-full justify-center items-center mt-32 py-16 text-white bg-darker-3 relative">
                <img class="absolute top-0 right-0 -translate-y-1/2" src="/images/ornament-2.png" alt="ornament 2"/>
                <div class="flex flex-col justify-center items-center gap-4 px-40">
                    <h1 class="large-1">Tumbuh Bersama Pondok</h1>
                    <p class="regular-5">Upaya gerak nyata dan kontribusi dalam perkembangan serta kemajuan bangsa.</p>
                    <img src="/images/logo_kkn_pondok.png" alt="logo kkn pondok"/>
                    <div class="flex gap-4">
                        <div class="border-[1px] rounded-full p-2 border-darker-6 hover:cursor-pointer">
                            <img src="/images/icon_youtube.png" alt="icon twitter"/>
                        </div>
                        <div class="border-[1px] rounded-full p-2 border-darker-6 hover:cursor-pointer">
                            <img src="/images/icon_instagram.png" alt="icon instagram"/>
                        </div>
                        <div class="border-[1px] rounded-full p-2 border-darker-6 hover:cursor-pointer">
                            <img src="/images/icon_tiktok.png" alt="icon tiktok"/>
                        </div>
                    </div>
                    <div class="w-full h-[1px] bg-darker-10 opacity-10"></div>
                    <p class="regular-1">© 2025 KKN UNY Pondok. All Rights Reserved. </p>
                </div>
                <img class="absolute bottom-0 left-0" src="/images/ornament-1.png" alt="ornament 1"/>
            </footer>
        </div>
    </div>
</template>
