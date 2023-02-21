<template>
  <div class="grid h-screen w-full overflow-hidden">
    <AppHeader />
    <div class="content">
      <div class="content__caption">
        <h1 class="content__caption-title">
          <div>
            <span class="content__title">Web development</span>,<br />
            <span class="content__title">design</span>
            <span class="hide-from-sm text-secondary">→</span>
            <em class="content__title text-stroke">Creativity</em><br />
            <span class="content__title">experience</span>
          </div>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-area: 1 / 1 / 2 / 2;
  place-items: center;
}
.content__caption-title {
  font-size: clamp(38px, 6vw, 112px);
  position: relative;
  margin: 0;
  font-weight: bold;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  z-index: 9;
}
</style>
