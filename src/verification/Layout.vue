<script setup>
import ThreeIcons from "@/components/proof/ThreeIcons.vue";
</script>

<template>
  <div class="whole_content">
    <header class="sidebar p-3 position-relative">
      <div class="header_content py-3">
        <slot name="side_content"></slot>
        <div class="three_icons">
          <ThreeIcons class="dots" />
        </div>
      </div>
    </header>
    <main class="main_area p-3">
      <div class="main_content rounded rounded-3">
        <slot name="content"></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
.whole_content {
  display: flex;
  background: var(--bg-clr);
  min-height: 87vh;
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
  /* background-color: white; */
  min-height: 83vh;
}

.three_icons {
  position: absolute;
  bottom: 1%;
  left: 20%;
  transform: translateY(-50%);
}
</style>
