<template>
  <div class="searchInput d-flex justify-content-between align-items-center">
    <input
      type="text"
      v-model="search"
      class="rounded rounded-1 border-0"
      placeholder="search"
    />
    <i class="ri-search-line"></i>
  </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref("");
</script>

<style scoped>
input {
  padding: 10px;
  background-color: transparent;
}
</style>
