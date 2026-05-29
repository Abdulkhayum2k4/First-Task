<template>
  <header>
    <ul class="list-unstyled d-flex gap-4 mb-3 px-3 py-2 border-bottom">
      <li class="fw-bold">ID Proof</li>
      <li style="color: var(--primary-red)" class="fw-semibold">
        <img :src="redwarning" alt="" /> Missing Proofs
      </li>
    </ul>
  </header>
  <div class="">
    <div class="container-fluid px-3 py-2">
      <div class="row g-3">
        <div class="col-auto" v-for="(guest, index) in guests" :key="index">
          <div
            class="card rounded-3 shadow-sm widthchange border"
            style="background-color: #fafafa"
          >
            <div
              class="card-body border-bottom d-flex align-items-center px-3 py-2"
              style="height: 60px"
            >
              <img
                :src="user"
                class="rounded-circle me-2"
                width="35"
                height="35"
              />

              <div class="flex-grow-1">
                <p class="mb-0 fw-bold" style="font-size: 14px">
                  {{ guest.name }}
                </p>
                <p class="text-primary mb-0" style="font-size: 12px">
                  {{ guest.type }}
                </p>
              </div>

              <div class="status-width text-end" style="width: 90px">
                <span
                  v-if="guest.checked"
                  class="fw-semibold small"
                  style="color: #17c400; font-size: 14px"
                >
                  Pre checked
                </span>
              </div>
            </div>

            <div class="p-2">
              <div class="p-2 border-bottom">
                <div
                  class="border rounded-3 px-3 py-2 mb-2 d-flex justify-content-between align-items-center bg-white"
                  style="height: 34px"
                >
                  <div class="fw-semibold text-warning">
                    <img :src="india" alt="" />
                    Indian ID
                  </div>
                  <div class="position-relative">
                    <button
                      class="btn btn-sm border-0 p-0 fw-bold fs-6"
                      style="color: var(--primary-red)"
                      @click="guest.showDropdown = !guest.showDropdown"
                    >
                      + Add
                    </button>

                    <LongModal v-if="showModal" @close="showModal = false">
                    </LongModal>

                    <div
                      v-if="guest.showDropdown"
                      class="custom-dropdown shadow"
                    >
                      <p @click="showModal = true">Long Aadhar</p>
                      <p>Short Aadhar</p>
                      <p>Driving License</p>
                      <p>Voter ID</p>
                      <p>Passport</p>
                    </div>
                  </div>
                </div>

                <div
                  class="border rounded-3 px-3 py-2 mb-2 d-flex justify-content-between align-items-center bg-white"
                  style="height: 34px"
                >
                  <div class="fw-semibold" style="color: #cf6e14">
                    <img :src="world" alt="" />
                    Foreign ID
                  </div>

                  <p class="mb-0 fw-bold" style="color: var(--primary-red)">
                    + Add
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center pt-3"
              >
                <h6 class="mb-0 fw-bold">Face Image</h6>

                <div class="d-flex gap-2">
                  <button
                    class="px-2 py-1 rounded bg-white fw-semibold"
                    style="
                      border: 2px solid var(--primary-red);
                      color: var(--primary-red);
                    "
                  >
                    Snap
                  </button>

                  <button
                    class="px-2 py-1 rounded bg-white fw-semibold"
                    style="
                      border: 2px solid var(--primary-red);
                      color: var(--primary-red);
                    "
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import user from "../../assets/user.png";
import india from "../../assets/india.png";
import world from "../../assets/world.png";
import redwarning from "../../assets/redwarning.png";

import LongModal from "./LongModal.vue";
const showModal = ref(false);

const guests = ref([
  {
    name: "Glen Maxwell",
    type: "Main Guest",
    checked: true,
    showDropdown: false,
  },
  {
    name: "Guest 2",
    type: "",
    checked: false,
    showDropdown: false,
  },
]);
</script>

<style scoped>
.widthchange {
  width: 340px;
}

.card {
  overflow: visible !important;
}

.custom-dropdown {
  position: absolute;
  top: 28px;
  right: 0;
  width: 180px;
  background: white;
  border-radius: 12px;
  padding: 10px 0;
  z-index: 9999;
}

.custom-dropdown p {
  padding: 10px 16px;
  margin: 0;
  cursor: pointer;
  font-size: 15px;
}

.custom-dropdown p:hover {
  background-color: #f5f5f5;
}
</style>
