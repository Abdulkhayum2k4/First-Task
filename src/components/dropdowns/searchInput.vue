<template>
  <div class="position-relative d-inline-block">
    <input
      type="text"
      v-model="search"
      class="form-control border-0 pe-5"
      placeholder="Search"
    />

    <i
      class="ri-search-line position-absolute top-50 end-0 translate-middle-y me-3"
    ></i>
  </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
</script>
