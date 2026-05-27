<script setup>
defineProps({
  title: String,
  count: Number,
  color: String,
  isLink: Boolean,
});
</script>

<template>
  <div class="sub-card">
    <a
      v-if="isLink"
      class="count link"
      :style="{
        color: color,
        borderBottomColor: color,
      }"
    >
      {{ count }}
    </a>
    <p v-else class="count" :style="{ color: color }">
      {{ count }}
    </p>
    <p>{{ title }}</p>
  </div>
</template>

<style scoped>
.sub-card {
  padding: 10px;
}

.count {
  margin: 0;
  font-size: clamp(8px, 2vw, 16px);
  font-weight: 700;
}

p {
  margin: 0;
  font-size: clamp(11px, 1.1vw, 14px);
  color: #555;
  white-space: nowrap;
}
</style>
