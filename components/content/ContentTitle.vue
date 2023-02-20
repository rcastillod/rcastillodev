<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1
    class="title text-primary dark:text-white font-bold text-6xl mb-8 relative"
  >
    {{ title }}
  </h1>
</template>

<style scoped>
.title {
}
</style>
