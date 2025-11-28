<template>
    <div 
        class="flex flex-col gap-5 cursor-pointer group hover:scale-105 transition-transform duration-300"
        @click="handleClick"
    >
        <div class="relative overflow-hidden rounded-lg">
            <img
                :src="imageUrl"
                :alt="imageAlt"
                class="w-[256px] h-[256px] object-cover group-hover:scale-110 transition-transform duration-300"
            />
        </div>

        <h1 class="large-2 max-w-[256px] group-hover:text-primary-6 transition-colors duration-300">{{ title }}</h1>

    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
})

const handleClick = () => {
  if (props.id) {
    // Navigate to organization detail page
    window.location.href = route('organisasi.detail', { id: props.id });
  }
}
</script>