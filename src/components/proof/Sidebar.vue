<template>
  <div
    v-for="item in menuItems"
    :key="item.name"
    class="menu-item rounded py-2 fs-6"
    :class="{ active: item.active }"
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

const menuItems = [
  {
    name: "ID Proof",
    active: true,
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
    name: "Payments & c...",
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
}
.menu-item.active {
  background: #ffecec;
  color: #ff4d4f;
  border-left: 4px solid #ff4d4f;
  font-weight: 600;
}
.menu-item:hover {
  background: #f0f0f0;
}
</style>
