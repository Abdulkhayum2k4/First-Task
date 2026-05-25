<template>
  <select v-model="selectedOption" class="rounded rounded-1 border-0 p-1">
    <option value="All">All</option>
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
  </select>

</template>

<script setup>
import { ref } from 'vue'

const selectedOption = ref('All')
</script>
