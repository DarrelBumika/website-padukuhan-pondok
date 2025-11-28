<template>
    <div 
        class="flex flex-col"
        @click="handleClick"
    >
        <a class="regular-3">{{ id }}. {{ title }}</a>
        <p class="regular-5">{{ description }}</p>

        <div 
            v-if="images.length > 0"
            class="flex gap-5 pt-2"
        >
            <img
                v-for="image in images"
                :key="image.id"
                :src="image.url"
                :alt="image.alt"
                class="w-[200px] h-[200px] rounded-lg object-cover"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    images: {
        type: Array,
        default: () => [],
        validator(value) {
            // Validasi setiap item dalam array images
            return value.every(img => 
                typeof img === 'object' &&
                img.hasOwnProperty('id') &&
                img.hasOwnProperty('url') &&
                img.hasOwnProperty('alt')
            )
        }
    }
})
</script>