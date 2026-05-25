<template>
  <select v-model="selectedSort">
    <option value="sort">Sort</option>
    <option value="ascending">Ascending</option>
    <option value="descending">Descending</option>
  </select>
</template>

<script setup>
import { ref } from "vue";
const selectedSort = ref("");
</script>
