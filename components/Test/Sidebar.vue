<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <transition
      enter-active-class="ease-in-out duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-primary/50 bg-opacity-50 backdrop-blur-md transition-opacity"
      ></div>
    </transition>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="container mx-auto">
          <div class="py-[120px] pl-[5%] pr-[140px]">
            <h1 class="text-white">HOLA</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
import { ref } from "vue";
const show = ref(false);
const iframeLoaded = ref(false);
function close() {
  show.value = false;
  setTimeout(() => {
    document.body.style.removeProperty("overflow");
    emit("close");
  }, 500);
}
const slideOver = ref(null);
useClickOutside(slideOver, () => close());
onMounted(() => {
  show.value = true;
  document.body.style.setProperty("overflow", "hidden");
});
</script>
