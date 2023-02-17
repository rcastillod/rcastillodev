<script setup>
import { ref } from "vue";

const showChangelog = ref(false);
const iframeLoaded = ref(false);
const sidebar = ref(false);
const floatingWidget = ref(null);
useClickOutside(floatingWidget, () => (showChangelog.value = false));

const colorMode = useColorMode();
function toggleDarkMode(theme) {
  colorMode.preference = theme;
}
</script>

<template>
  <header class="fixed w-full z-50">
    <div class="px-[3.5%] pt-10 flex items-center justify-between">
      <div class="rc-logo">
        <a href="#">
          <nuxt-img
            v-if="$colorMode.preference === 'dark'"
            src="/logorcDevDark.svg"
            width="100"
          />
          <nuxt-img v-else src="/logorcDevDark.svg" width="100" />
        </a>
      </div>
      <div class="rc-menu">
        <div class="rc-menu-toggle-btn">
          <button
            @click="sidebar = true"
            :class="{ 'rc-menu-open': sidebar }"
            class="rc-menu-toggle-btn flex items-center justify-between"
          >
            <div class="text-primary dark:text-white">Sobre mi</div>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <test-sidebar
        v-if="sidebar"
        @close="sidebar = false"
        ref="overlayWidget"
      />
    </Teleport>
  </header>
</template>

<style scoped>
.rc-menu-toggle-btn {
  position: relative;
  width: 7.5rem;
  height: 3.125rem;
}
.rc-menu-toggle-btn span {
  position: relative;
  display: block;
  height: 2px;
  width: 1.25rem;
  background-color: transparent;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
}
.rc-menu-toggle-btn span::before,
.rc-menu-toggle-btn span::after {
  position: absolute;
  display: block;
  content: "";
  height: 2px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}
.rc-menu-toggle-btn span::before {
  top: -4px;
  width: 1.25rem;
}
.rc-menu-toggle-btn span::after {
  top: auto;
  bottom: -4px;
  right: 0;
  width: 0.875rem;
}
.rc-menu-toggle-btn.rc-menu-open span::before {
  top: 0;
  width: 20px;
  transform: rotate(45deg);
}
.rc-menu-toggle-btn.rc-menu-open span::after {
  bottom: 0;
  width: 20px;
  transform: rotate(-45deg);
}
</style>
