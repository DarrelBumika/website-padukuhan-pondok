<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    category: {
        type: String,
        required: true
    }
});

const images = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(route('images.by.category', props.category));
        images.value = response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
});
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="image in images" :key="image.id" class="relative">
            <img
                :src="image.secure_url"
                :alt="image.alt_text"
                class="w-full h-48 object-cover rounded-lg shadow-md"
            >
            <div v-if="image.caption" class="mt-2 px-2">
                <p class="text-sm text-gray-700">{{ image.caption }}</p>
            </div>
        </div>
    </div>
</template>