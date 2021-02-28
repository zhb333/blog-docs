<template>
  <div class="decor" style="position: relative">
    <svg
      id="header-decor"
      class="decor bottom"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        class="large left"
        d="M0 0 L50 50 L0 100"
        fill="rgba(255,255,255, .1)"
      ></path>
      <path
        class="large right"
        d="M100 0 L50 50 L100 100"
        fill="rgba(255,255,255, .1)"
      ></path>
      <path
        class="medium left"
        d="M0 100 L50 50 L0 33.3"
        fill="rgba(255,255,255, .3)"
      ></path>
      <path
        class="medium right"
        d="M100 100 L50 50 L100 33.3"
        fill="rgba(255,255,255, .3)"
      ></path>
      <path
        class="small left"
        d="M0 100 L50 50 L0 66.6"
        fill="rgba(255,255,255, .5)"
      ></path>
      <path
        class="small right"
        d="M100 100 L50 50 L100 66.6"
        fill="rgba(255,255,255, .5)"
      ></path>
      <path
        d="M0 99.9 L50 49.9 L100 99.9 L0 99.9"
        fill="rgba(255,255,255, 1)"
      ></path>
      <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(255,255,255, 1)"></path>
    </svg>
    <div
      style="
        height: 2px;
        width: 100%;
        bottom: -1px;
        position: absolute;
        background: #fff;
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "Decor",
};
</script>

<style scoped>
.decor {
  max-height: 200px;
}
</style>