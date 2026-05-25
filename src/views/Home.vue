<template>
  <Navbar />
  <div class="bgclr">
    <Document />
    <Approval />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Document from "../components/Document.vue";
import Approval from "../components/Approval.vue";
</script>

<style scoped>
.bgclr {
  background-color: #eceff6;
}
</style>
