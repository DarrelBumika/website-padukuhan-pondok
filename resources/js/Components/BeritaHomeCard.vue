<template>
  <div 
    class="w-[320px] bg-white rounded-lg transition-shadow duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    @click="handleClick"
  >
    <!-- Header dengan gambar (opsional) -->
    <div v-if="imageUrl">
      <img 
        :src="imageUrl" 
        :alt="imageAlt || title"
        class="w-full h-[280px] object-cover rounded-t-lg"
      />
    </div>

    <!-- Content Area -->
    <div class="flex flex-col gap-4 p-5">

        <p class="caption-5">
            {{ date }}
        </p>

      <!-- Title -->
        <h3 
            v-if="title" 
            class="large-2"
        >
            {{ title }}
        </h3>

        <!-- Description -->
        <p v-if="description" class="regular-5 line-clamp-5">
            {{ description }}
        </p>

        <!-- Slot untuk konten kustom -->
        <div v-if="$slots.content" class="mb-4">
            <slot name="content"></slot>
        </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
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
  date: {
    type: String,
    default: ''
  }
})

const handleClick = () => {
  if (props.id) {
    // Navigate to organization detail page
    window.location.href = route('berita.detail', { id: props.id });
  }
}
</script>