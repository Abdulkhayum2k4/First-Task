<template>
  <div
    class="d-flex align-items-center gap-1 position-relative"
    style="width: fit-content"
  >
    <select
      v-model="selectedSort"
      class="rounded border-0 pe-4"
      style="appearance: none; outline: none"
    >
      <option value="sort">Sort</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>

    <i class="ri-arrow-up-down-fill position-absolute end-0"></i>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedSort = ref("sort");
</script>
