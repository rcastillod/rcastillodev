<template>
  <div class="grid h-screen w-full overflow-hidden">
    <AppHeader />
    <div class="content">
      <div class="content__caption">
        <h1 class="content__caption-title">
          <div>
            <span class="content__title">Web development,</span
            ><br class="hidden md:block" />
            <span class="content__title">design</span>
            <span class="hide-from-sm text-secondary">→</span>
            <em class="content__title text-stroke">Creativity</em
            ><br class="hidden md:block" />
            <span class="content__title">experience</span>
          </div>
        </h1>
      </div>
      <div class="content__caption-background">
        <div class="content__caption-background-title">
          <span class="text">Development</span>
          <span class="text">Design</span>
          <span class="text">Creativity</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-area: 1 / 1 / 2 / 2;
  place-items: center;
  padding-inline: 1.5rem;
  position: relative;
  overflow: hidden;
}

.content__caption-title {
  font-size: clamp(2.25rem, 7vw, 7rem);
  position: relative;
  margin: 0;
  font-weight: bold;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  z-index: 9;
}

@media (max-width: 767px) {
  .content__caption-title > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
}

/* Content background title */
.content__caption-background {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 6%;
  padding-top: 5%;
  font-size: calc(1rem + 19.5vw);
  font-weight: bold;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  line-height: 1;
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
}
</style>
