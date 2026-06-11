<template>
  <div
    v-for="item in menuItems"
    :key="item.name"
    class="menu-item rounded py-2 fs-6"
    :class="{ active: activeMenu === item.name }"
    @click="activeMenu = item.name"
  >
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="d-flex align-items-center gap-2">
        <span v-if="item.alert == true" class="ps-1 ms-1">{{ item.name }}</span>
        <span v-else>{{ item.name }}</span>
      </div>
      <span v-if="item.alert">
        <img :src="warning" />
      </span>
      <span v-if="item.completed" class="text-dark">
        <img :src="blacktick" />
      </span>
      <span v-if="item.anywarning">
        <img :src="blackwarning" />
      </span>
    </div>
  </div>
</template>

<script setup>
import warning from "../../assets/redwarning.png";
import blackwarning from "../../assets/blackwarning.png";
import blacktick from "../../assets/blacktick.png";
import { ref } from "vue";

const activeMenu = ref("ID Proof ");

const menuItems = [
  {
    name: "ID Proof",

    alert: true,
    completed: false,
    path: "/idProof",
  },
  {
    name: "Reg Card",
    completed: true,
    path: "/regCardForm",
  },
  {
    name: "Folios",
    completed: true,
    path: "/folios",
  },
  {
    name: "Invoices",
    completed: true,
    path: "/invoices",
  },
  {
    name: "POS Checks",
    anywarning: true,
    path: "/posChecks",
  },
  {
    name: "Payments",
    completed: true,
    path: "/payments",
  },
  {
    name: "Other details",
    completed: true,
    path: "other",
  },
];
</script>

<style scoped>
.sidebar {
  background: var(--bg-clr);
}

.menu-item {
  font-size: 18px;
  color: #222;
  cursor: pointer;
  padding-left: 10px;
  transition: all 0.2s ease;
}

.menu-item.active {
  background: black;
  color: black;
  border-left: 4px solid olive;
  font-weight: 600;
  border-radius: 6px;
}

.menu-item:hover:not(.active) {
  background: #f5f5f5;
}
</style>
