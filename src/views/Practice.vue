<script setup>
import { ref } from "vue";

const showText = ref(false);
</script>

<template>
  <button @click="showText = !showText">Toggle</button>

  <p v-if="showText" >This text is visible now.</p>
</template>
