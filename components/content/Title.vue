<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-primary dark:text-white font-bold text-6xl mb-8">
    {{ title }}
  </h1>
</template>
