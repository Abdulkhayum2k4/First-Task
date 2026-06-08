<script setup>
import ThreeIcons from "@/components/proof/ThreeIcons.vue";
</script>

<template>
  <div class="whole_content">
    <header class="sidebar p-3">
      <div class="header_content py-3">
        <slot name="side_content"></slot>
      </div>
    </header>
    <main class="main_area p-3">
      <div class="main_content rounded rounded-3">
        <slot name="content"></slot>
      </div>
    </main>
    <div class="three_icons">
      <ThreeIcons class="dots" />
    </div>
  </div>
</template>

<style scoped>
.whole_content {
  display: flex;
  background: var(--bg-clr);
  height: 87vh;
}

.sidebar {
  width: 190px;
  flex-shrink: 0;
}

.main_area {
  flex: 1;
  min-width: 0;
}

.main_content {
  background-color: white;
  height: 83vh;
}

.three_icons {
  position: relative;
}

.dots {
  position: absolute;
  bottom: 0;
  left: 2rem;
  transform: translateY(50%);
}
</style>
