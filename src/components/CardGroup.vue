<script setup>
import StatsCard from "./StatsCard.vue";

defineProps({
  items: Array,
});
</script>

<template>
  <div class="group-card">
    <template v-for="(item, index) in items" :key="index">
      <StatsCard
        :title="item.title"
        :count="item.count"
        :color="item.color"
        :isLink="item.isLink"
      />

      <div v-if="index !== items.length - 1" class="separator" />
    </template>
  </div>
</template>

<style scoped>
.group-card {
  display: flex;
  align-items: center;

  background: white;
  border-radius: 10px;

  min-width: 0;

  flex-grow: 1;
  flex-basis: auto;
}

.separator {
  width: 2px;
  height: 60px;

  background-color: #d1d5db;

  flex-shrink: 0;
}
</style>
