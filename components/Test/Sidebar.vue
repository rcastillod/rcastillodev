<script setup>
import { ref } from "vue";

const emit = defineEmits(["close"]);

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
        <div class="container mx-auto h-full">
          <div
            class="pt-[40%] pb-[35%] px-4 md:py-[120px] md:pl-[5%] md:pr-[140px] h-full flex md:items-center flex-col md:flex-row md:justify-between"
          >
            <div class="w-full md:max-w-xl">
              <ContentTitle title="Sobre mi" />
              <p class="text-primary dark:text-white text-xl">
                Técnico en computación e informática, con 8 años de experiencia
                en desarrollo web. Detallista, creativo y meticuloso al momento
                de abordar un proyecto. Apasionado por el diseño y creatividad
                en los productos desarrollados. Experiencia en diseño UX/UI.
              </p>
            </div>
            <div class="mt-14 md:mt-0">
              <div
                class="text-primary dark:text-white text-2xl font-semibold tracking-wide mb-7"
              >
                Social Links:
              </div>
              <ul class="rc-social-nav md:text-right">
                <li>
                  <a
                    href="#"
                    class="text-primary dark:text-grey text-xl font-semibold"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-primary dark:text-grey text-xl font-semibold"
                    >Linkedin</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rc-social-nav li:not(:last-child) {
  margin-block-end: 0.5rem;
}
</style>
