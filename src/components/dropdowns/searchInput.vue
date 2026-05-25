<template>
  <div class="searchInput d-flex justify-content-between align-items-center bg-white ">
    <input
      type="text"
      v-model="search"
      class="rounded rounded-1 border-0 "
      placeholder="search"
    />
    <i class="ri-search-line pe-3"></i>
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
  width: 70px;
}
.searchInput{
  height: 28px;
  width: 101px;
}
input:focus {
  outline: none;
  box-shadow: none;
  border: none;
}
</style>
