<template>
  <header>
    <ul class="list-unstyled d-flex gap-4 mb-3 px-3 py-2 border-bottom">
      <li class="fw-bold">ID Prood</li>
      <li style="color: var(--other-red)" class="fw-semibold">
        <img :src="redwarning" /> Missing Proofs
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
              <img :src="guest.face" alt="" />
              <div class="flex-grow-1">
                <p class="mb-0 fw-bold" style="font-size: 14px">
                  {{ guest.name }}
                </p>
                <p
                  class="mb-0 fw-medium"
                  style="font-size: 12px; color: var(--other-red)"
                >
                  {{ guest.cform }}
                  <span
                    v-if="guest.checked"
                    class="fw-medium ps-2"
                    style="color: #005bd3; font-size: 12px"
                  >
                    {{ guest.type }}
                  </span>
                </p>
              </div>
              <div class="status-width text-end" style="width: 90px">
                <span
                  v-if="guest.checked"
                  class="fw-semibold small"
                  style="color: #17c400; font-size: 14px"
                >
                  <img :src="plane" alt="" />
                </span>
              </div>
            </div>

            <div class="">
              <div class="px-2 pt-3 pb-0 border-bottom">
                <div class="d-flex">
                  <div class="pt-2">
                    <span
                      class="py-4 px-1 rounded rounded-3"
                      style="background-color: #d9d9d9"
                    >
                      <img :src="aadhar" alt="" />
                    </span>
                  </div>
                  <div class="ps-2">
                    <p class="m-0 fw-semibold">
                      {{ guest.proofgiven }}
                      <i class="ri-arrow-right-s-line"></i>
                    </p>
                    <p class="m-0 fw-medium" style="font-size: 13px">
                      <img :src="scannerr" alt="" /><em>
                        Scanned 23/02 12:20
                      </em>
                    </p>
                    <p
                      v-if="guest.checked"
                      style="color: #e67e13"
                      class="fw-semibold pt-1 small"
                    >
                      {{ guest.situation }}
                    </p>
                    <p
                      v-else
                      style="color: #b7a30f"
                      class="fw-semibold pt-1 small"
                    >
                      {{ guest.situation }}
                    </p>
                  </div>
                </div>
              </div>

              <div v-if="guest.visa" class="p-0">
                <!-- VISA MISSING SECTION -->
                <div v-if="!guest.visaUploaded" class="border-bottom pb-3 p-2">
                  <div
                    class="d-flex justify-content-between align-items-center pt-3"
                  >
                    <div class="ms-2">
                      <h6 class="mb-0 fw-bold">
                        VISA <i class="ri-arrow-right-s-line"></i>
                      </h6>
                      <p class="fw-semibold small" style="color: #e67e13">
                        Missing
                      </p>
                    </div>
                    <div class="d-flex gap-2">
                      <button
                        class="px-2 py-1 rounded bg-white fw-semibold"
                        style="border: 2px solid var(--primary-red); color: var(--primary-red);"
                        @click="guest.visaUploaded = true"
                      >
                        Upload
                      </button>
                      <button
                        class="px-2 py-1 rounded bg-white fw-semibold"
                        style="border: 2px solid var(--primary-red); color: var(--primary-red);"
                      >
                        Scan
                      </button>
                    </div>
                  </div>
                </div>

                <!-- VISA UPLOADED SECTION -->
                <div v-else class="px-2 pt-3 pb-0 border-bottom">
                  <div class="d-flex">
                    <div class="pt-2 ps-1">
                      <span
                        class="py-4 px-1 rounded rounded-3"
                        style="background-color: #d9d9d9"
                      >
                        <img :src="passport" alt="" />
                      </span>
                    </div>
                    <div class="ps-2">
                      <p class="m-0 fw-semibold">
                        Visa <i class="ri-arrow-right-s-line"></i>
                      </p>
                      <p class="m-0 fw-medium" style="font-size: 13px">
                        <img :src="uploadd" alt="" />
                        <em> Scanned 23/02 12:20 </em>
                      </p>
                      <p style="color: #17c400" class="fw-semibold pt-1 small">
                        DM Verified
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-3 border-bottom">
                  <div
                    class="d-flex justify-content-between p-2 rounded"
                    style="border-style: dashed !important; border: 2px solid #005bd3;"
                  >
                    <p class="mb-0 fw-semibold">
                      C-Form <i class="ri-arrow-right-s-line"></i>
                    </p>
                    <p class="mb-0 fw-semibold small" style="color: #17c400">
                      Submitted
                    </p>
                  </div>
                </div>

                <div class="p-3 d-flex">
                  <div class="">
                    <img
                      :src="glenbabu"
                      alt=""
                      style="height: 40px; width: 40px"
                    />
                  </div>
                  <div class="ms-3">
                    <p class="fw-semibold small mb-0">
                      Face Image <i class="ri-arrow-right-s-line"></i>
                    </p>
                    <p style="color: #e67e13" class="fw-semibold small">
                      Pending DM Verification
                    </p>
                  </div>
                </div>

                <div class="bg-danger-subtle p-1 rounded-bottom m-0">
                  <img :src="redwarning" alt="" class="mb-1 ms-3" />
                  <span
                    style="color: var(--primary-red)"
                    class="fw-semibold small"
                    >Missing C-Form</span
                  >
                </div>
              </div>

              <div v-if="guest.faceimg">
                <div class="border-bottom pb-4 p-3">
                  <div
                    class="d-flex justify-content-between align-items-center pt-3"
                  >
                    <div class="ms-2">
                      <h6 class="mb-0 fw-bold">Face Image</h6>
                      <p class="fw-semibold small" style="color: #e67e13">
                        Missing
                      </p>
                    </div>
                    <div class="">
                      <div class="d-flex gap-2">
                        <button
                          class="px-2 py-1 rounded bg-white fw-semibold"
                          style="border: 2px solid var(--primary-red); color: var(--primary-red);"
                        >
                          Snap
                        </button>
                        <button
                          class="px-2 py-1 rounded bg-white fw-semibold"
                          style="border: 2px solid var(--primary-red); color: var(--primary-red);"
                        >
                          Upload
                        </button>
                      </div>
                      <p
                        class="fw-semibold small pt-1"
                        style="color: var(--primary-red)"
                      >
                        Take from ID
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-danger-subtle py-1 rounded-bottom m-0">
                  <img :src="redwarning" alt="" class="mb-1 ms-3" />
                  <span
                    style="color: var(--primary-red)"
                    class="fw-semibold small"
                    >Missing face image, Aadhar Number, ad...</span
                  >
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
import glenbabu from "../../assets/glenbabu.png";
import plane from "../../assets/plane.png";
import redwarning from "../../assets/redwarning.png";
import aadhar from "../../assets/aadhar.png";
import scannerr from "../../assets/scannerr.png";
import passport from "../../assets/passport.png";
import uploadd from "../../assets/uploadd.png";

const guests = ref([
  {
    name: "Glen Maxwell",
    cform: "Missing C form",
    type: "Main Guest",
    indian: false,
    checked: true,
    proofgiven: "Passport",
    situation: "Missing 2 details",
    face: glenbabu,
    visa: true,
    visaUploaded: false,
  },
  {
    name: "Martin Luther",
    cform: "Submitted C form",
    type: "",
    checked: false,
    indian: true,
    proofgiven: "Long Aadhar",
    situation: "Pending DM Verification",
    face: user,
    faceimg: true,
    visaUploaded: false,
  },
]);
</script>

<style scoped>
.widthchange {
  width: 340px;
}
</style>