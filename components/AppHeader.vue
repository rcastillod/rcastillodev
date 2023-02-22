<script setup>
import { ref } from "vue";
import gsap from "gsap";

/* Color mode */
const colorMode = useColorMode();
function toggleDarkMode(theme) {
  colorMode.preference = theme;
}

// GSAP menu animation
const main = ref();
const tl = ref();
const ctx = ref();
const isOpen = ref(false);

const toggleTimeline = () => {
  isOpen.value = !isOpen.value;
  tl.value.reversed(!tl.value.reversed());
};

onMounted(() => {
  ctx.value = gsap.context(() => {
    tl.value = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 1.2,
          ease: "power4.inOut",
        },
      })
      .addLabel("start", 0)
      .to(
        ".cover-wrap",
        {
          duration: 1.6,
          startAt: { scale: "1.1" },
          ease: "power3.inOut",
          scale: 1,
        },
        "start"
      )
      .to(
        ".cover",
        {
          startAt: { y: "-100%" },
          y: "0%",
        },
        "start"
      )
      .to(
        ".cover__inner",
        {
          startAt: { y: "100%" },
          y: "0%",
        },
        "start"
      )
      .to(
        ".content__caption-title",
        {
          y: (position) => `${position % 2 === 0 ? 20 : -20}%`,
          stagger: 0.4,
        },
        "start"
      )
      .addLabel("menu", 0.5)
      .to(
        ".header__content",
        {
          duration: 1,
          startAt: { y: "-100%" },
          y: "0%",
        },
        "menu"
      )
      .addLabel("social", "menu+=0.6")
      .set(
        ".header__social a",
        {
          y: "-100px",
          opacity: 0,
        },
        "start"
      )
      .to(
        ".header__social a",
        {
          duration: 1,
          ease: "power4",
          startAt: { opacity: 1 },
          opacity: 1,
          y: "0",
          stagger: 0.2,
        },
        "social"
      )
      .reverse();
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <!-- Cover image -->
  <div class="cover-wrap" aria-hidden="true">
    <div class="cover">
      <div class="cover__inner"></div>
    </div>
  </div>
  <!-- Header -->
  <header class="header">
    <!-- Header top -->
    <div class="header__top flex items-center justify-between">
      <div class="logo -mt-1">
        <a href="#">
          <nuxt-img
            v-if="$colorMode.preference === 'dark'"
            src="/logorcDevDark.svg"
            width="100"
          />
          <nuxt-img v-else src="/logorcDevDark.svg" width="100" />
        </a>
      </div>
      <div class="menu">
        <div class="menu__toggle-btn">
          <button
            @click="toggleTimeline"
            :class="{ menu__open: isOpen }"
            class="menu__toggle-btn flex items-center justify-between"
          >
            <div class="text-primary dark:text-white">Sobre mi</div>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Menu content -->
    <div class="header__content-wrap">
      <div class="header__content">
        <div class="header__social">
          <a href="#">Linkedin</a>
          <a href="#" class="text-stroke">Behance</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Cover image menu */
.cover-wrap,
.cover,
.cover__inner {
  will-change: transform;
}

.cover-wrap {
  pointer-events: none;
  z-index: 100;
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
}

.cover {
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  overflow: hidden;
  transform: translateY(-100%);
}

.cover__inner {
  background-image: url(../public/cover-bg.jpg);
  background-position: 50%;
  background-size: cover;
  transform: translateY(100%);
}

/* Header */
.header {
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "top"
    "content";
  display: grid;
  opacity: 0.9;
  position: fixed;
  inset: 0;
  z-index: 100;
}

/* Header top */
.header__top {
  @apply px-6 md:px-16;
  pointer-events: auto;
  z-index: 100;
  grid-area: top;
}

.header__content-wrap {
  grid-area: content;
  margin-top: -6rem;
  overflow: hidden;
}

.header__content {
  @apply bg-primary;
  height: 100%;
  will-change: transform;
  padding-bottom: 1rem;
  display: grid;
  place-items: center;
  overflow: hidden;
  transform: translateY(-100%);
}

/* Header social */
.header__social {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.875em;
}

@media (min-width: 768px) {
  .header__social {
    flex-direction: row;
    gap: 3.125em;
  }
}

.header__social a {
  font-size: clamp(2.375rem, 7vw, 7rem);
  position: relative;
  margin: 0;
  font-weight: bold;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  z-index: 9;
}

.header__social a::before {
  @apply bg-secondary;
  content: "";
  position: absolute;
  bottom: 0.625rem;
  left: 0;
  border-radius: 0.9375rem;
  height: 0.9375rem;
  width: 0.9375rem;
  z-index: -1;
  transition: width 0.3s ease-in-out;
}

.header__social a:is(:hover, :focus)::before {
  width: 100%;
}

.header__social a.text-stroke {
  font-weight: bold;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
  -webkit-text-fill-color: transparent;
}

/* Menu toggle */
.menu__toggle-btn {
  position: relative;
  gap: 2.1875rem;
}

.menu__toggle-btn span {
  position: relative;
  display: block;
  height: 2px;
  width: 1.25rem;
  background-color: transparent;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
}

.menu__toggle-btn span::before,
.menu__toggle-btn span::after {
  position: absolute;
  display: block;
  content: "";
  height: 2px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}

.menu__toggle-btn span::before {
  top: -4px;
  width: 1.25rem;
}

.menu__toggle-btn span::after {
  top: auto;
  bottom: -4px;
  right: 0;
  width: 0.875rem;
}

.menu__toggle-btn.menu__open span::before {
  top: 0;
  width: 20px;
  transform: rotate(45deg);
}

.menu__toggle-btn.menu__open span::after {
  bottom: 0;
  width: 20px;
  transform: rotate(-45deg);
}
</style>
