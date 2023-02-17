<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <!--ElementsCustomCursor
      scaleElement="link"
      dotColor="#FF6100"
      borderColor="#FF6100"
    /-->
  </NuxtLayout>
</template>

<style>
/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */
html,
body {
  min-height: 100vh;
  scroll-behavior: smooth;
}
body {
  @apply dark:bg-primary relative;
}
</style>
