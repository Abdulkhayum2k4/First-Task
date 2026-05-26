<template>
  <ProofHeader />
  <div class="container-fluid ">
    <div class="row sidebar vh-100">
      <div class="col-2 p-0">
        <div class="p-3">
          <div v-for="item in menuItems" :key="item.name" class="menu-item rounded" :class="{ active: item.active }">
            <div class="d-flex justify-content-between align-items-center w-100 ">
              <div class="d-flex align-items-center gap-2 ">
                <span v-if="item.alert == true" class="">{{ item.name }}</span>
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
        </div>
      </div>

      <div class="col-10 p-3">
        <div class="bg-white h-100 rounded rounded-3">
          <ProofCards />
        </div>
      </div>
    </div>
    <div class="three_icons position-relative">
      <ThreeIcons class="dots position-absolute bottom-0 start-0 pe-3 pb-3" />
    </div>
    <div class="position-relative">
      <button class="btn btn-danger position-absolute bottom-0 end-0 me-5 mb-5">Actions</button>
    </div>
  </div>
</template>

<script setup>
import warning from "../../assets/redwarning.png";
import blackwarning from "../../assets/blackwarning.png";
import blacktick from "../../assets/blacktick.png";
import ProofCards from "./ProofCards.vue";
import ProofHeader from "./ProofHeader.vue";
import ThreeIcons from "../threeIcons/ThreeIcons.vue";

const menuItems = [
  {
    name: "ID Proof",
    active: true,
    alert: true,
    completed: false,
  },
  {
    name: "Reg Card",
    completed: true,
  },
  {
    name: "Folios",
    completed: true,
  },
  {
    name: "Invoices",
    completed: true,
  },
  {
    name: "POS Checks",
    anywarning: true,
  },
  {
    name: "Payments & c...",
    completed: true,
  },
  {
    name: "Other details",
    completed: true,
  },
];
</script>

<style scoped>
.sidebar {
  background: var(--bg-clr);
}

.menu-item {
  padding: 14px 12px;
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
