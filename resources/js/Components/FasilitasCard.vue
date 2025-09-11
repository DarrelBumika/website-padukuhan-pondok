<template>
  <div 
    :class="[
      'bg-white rounded-lg transition-shadow duration-300',
      sizeClasses,
      customClass
    ]"
    @click="handleClick"
  >
    <!-- Header dengan gambar (opsional) -->
    <div v-if="imageUrl">
      <img 
        :src="imageUrl" 
        :alt="imageAlt || title"
        class="w-full h-48 object-cover rounded-t-lg"
      />
    </div>

    <!-- Content Area -->
    <div class="flex flex-col gap-4 mt-6">
      <!-- Title -->
      <h3 
        v-if="title" 
        class="large-2"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p v-if="description" class="regular-5">
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
  }
})
</script>