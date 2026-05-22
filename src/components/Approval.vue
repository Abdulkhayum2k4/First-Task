<script setup>
import CardGroup from "./CardGroup.vue";

const groups = [
  [
    {
      title: "Total Check ins",
      count: 100,
      color: "#000000",
      isLink: false,
    },
  ],

  [
    {
      title: "Documents To collect",
      count: 172,
      color: "#666666",
      isLink: true,
    },
    {
      title: "Not collected",
      count: 12,
      color: "#FE5358",
      isLink: true,
    },
    {
      title: "Collected",
      count: 160,
      color: "#34C759",
      isLink: true,
    },
  ],

  [
    {
      title: "Documents Unverified",
      count: 100,
      color: "#FE5358",
      isLink: true,
    },
    {
      title: "Documents verified",
      count: 60,
      color: "#34C759",
      isLink: true,
    },
  ],

  [
    {
      title: "Total Foreigners",
      count: 83,
      color: "#2563EB",
      isLink: true,
    },
    {
      title: "C-Forms SENT",
      count: 46,
      color: "#34C759",
      isLink: true,
    },
    {
      title: "C-Forms Pending",
      count: 37,
      color: "#FE5358",
      isLink: true,
    },
  ],
];
</script>

<template>
  <div class="dashboard">
    <CardGroup v-for="(group, index) in groups" :key="index" :items="group" />
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  gap: 8px;

  width: 100%;

  padding: 0px 10px 10px 10px;

  flex-wrap: nowrap;
}
</style>
