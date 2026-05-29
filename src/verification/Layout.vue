<script setup>
import ThreeIcons from "@/components/proof/ThreeIcons.vue";
</script>

<template>
  <div class="whole_content row m-0">
    <header class="col-2">
      <div class="header_content py-3">
        <slot name="side_content"></slot>
      </div>
    </header>
    <main class="col-10 p-3">
      <div class="main_content rounded rounded-3">
        <slot name="content"></slot>
      </div>
    </main>
    <div class="three_icons position-relative">
      <ThreeIcons
        class="dots position-absolute bottom-0 ms-5 translate-middle-y"
      />
    </div>
  </div>
</template>

<style scoped>
.whole_content {
  background: var(--bg-clr);
  height: 87vh;
}
.main_content {
  background-color: white;
  height: 83vh;
}
</style>
