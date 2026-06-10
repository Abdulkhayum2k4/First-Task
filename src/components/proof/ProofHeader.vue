<script setup>
import praying from "../../assets/praying.png";
import crs from "../../assets/crs.png";
import room from "../../assets/room.png";
import stay from "../../assets/stay.png";
import Ellipse_654 from "../../assets/Ellipse_654.png";
import Ellipse_655 from "../../assets/Ellipse_655.png";
import Ellipse_656 from "../../assets/Ellipse_656.png";
import { ref } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const collapsed = ref(false);
</script>

<template>
  <div class="d-flex justify-content-between align-items-center px-4 py-2 whole">
    <div class="d-flex align-items-center gap-3">
      <i
        class="ri-arrow-left-line fs-4"
        @click="$router.push('/')"
        style="cursor: pointer"
      ></i>

      <div>
        <p class="conf mb-1" v-if="!collapsed">Conf. : 21546123546</p>

        <div class="d-flex align-items-center gap-3">
          <h4 class="mb-0 fw-semibold">Glen Maxwell</h4>

          <div
            v-if="!collapsed"
            class="pending d-flex align-items-center rounded-pill px-3 py-1"
          >
            <i class="ri-circle-fill me-1"></i>
            <span>Pending approval</span>
          </div>
        </div>

        <div v-if="!collapsed" class="d-flex align-items-center gap-2 mt-1">
          <small>Mobile : 87XXXXXXXX92</small>
          <span>|</span>
          <small>Mail : maniXXXXgmail.com</small>
        </div>

        <p class="conf mb-0 mt-1" v-if="collapsed">Conf. : 21546123546</p>
      </div>
    </div>

    <div v-if="!collapsed" class="d-flex align-items-center gap-5 flex-grow-1 justify-content-center">
      <div class="d-flex align-items-center gap-2">
        <img :src="praying" class="icons p-2 rounded" />
        <div>
          <p class="mb-0 small">Check in by</p>
          <strong>Maruthi k</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-2">
        <img :src="room" class="icons p-2 rounded" />
        <div>
          <p class="mb-0 small">Room</p>
          <strong>R-3276</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-2">
        <img :src="crs" class="icons p-2 rounded" />
        <div>
          <p class="mb-0 small">CRS ID</p>
          <strong>2834682735</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-2">
        <img :src="stay" class="icons p-2 rounded" />
        <div>
          <p class="mb-0 small">Stay period</p>
          <strong>12/02/2025 - 14/02/2025</strong>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center gap-4">
      <div v-if="!collapsed" class="text-center">
        <div class="d-flex">
          <div class="position-relative">
            <img :src="Ellipse_654" class="kla k" />
            <p class="alk position-absolute translate-middle-x">A</p>
          </div>

          <div class="position-relative">
            <img :src="Ellipse_655" class="kla l" />
            <p class="alk position-absolute translate-middle-x">L</p>
          </div>

          <div class="position-relative">
            <img :src="Ellipse_656" class="kla a" />
            <p class="alk position-absolute translate-middle-x">K</p>
          </div>
        </div>

        <small>+14 guests</small>
      </div>

      <template v-if="collapsed">
        <div v-if="route.path === '/regCard'">
          <div class="d-flex align-items-center  gap-3">
            <div  class="px-3 py-1 rounded-pill d-flex align-items-center"  style="background: #cfeecb; color: #25b700; font-size: 12px">
              <i class="ri-circle-fill me-1" style="font-size: 7px"></i>
              Checked-in 
            </div>

            <div style="color: #25b700; font-size: 15px; font-weight: 600">
              <i class="ri-check-line"></i>
              DM Verifed
            </div>
          </div>
        </div>

        <div v-if="route.path === '/posChecks'">
          <div
            class="px-3 py-1 rounded-pill d-flex align-items-center"
            style="background: #cfeecb; color: #25b700; font-size: 12px"
          >
            <i class="ri-circle-fill me-1" style="font-size: 7px"></i>
            Checked-in
          </div>
        </div>

        <div v-if="route.path === '/folios'">
          <div class="d-flex align-items-center gap-3">
            <div
              class="px-3 py-1 rounded-pill d-flex align-items-center"
              style="background: #cfeecb; color: #25b700; font-size: 12px"
            >
              <i class="ri-circle-fill me-1" style="font-size: 7px"></i>
              Checked-in
            </div>

            <div style="color: #25b700; font-size: 15px; font-weight: 600">
              <i class="ri-check-line"></i>
              DM Verified
            </div>
          </div>
        </div>

        <div v-if="route.path === '/invoices'">
          <h4>Invoices</h4>
        </div>

        <div v-if="route.path === '/payments'">
          <div class="d-flex align-items-center gap-3">
            <div
              class="px-3 py-1 rounded-pill d-flex align-items-center"
              style="background: #cfeecb; color: #25b700; font-size: 12px"
            >
              <i class="ri-circle-fill me-1" style="font-size: 7px"></i>
              Checked-in
            </div>

            <div style="color: #25b700; font-size: 15px; font-weight: 600">
              <i class="ri-check-line"></i>
              DM Verified
            </div>
          </div>
        </div>

        <div v-if="route.path === '/other'">
          <h4>Other</h4>
        </div>
      </template>

      <button
        class="btn btn-outline-dark fw-semibold"
        @click="collapsed = !collapsed"
      >
        {{ collapsed ? "View guest details" : "Collapse" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}

.whole {
  min-width: 1496px;
  min-height: 72px;
  padding: 12px 24px;
  background: linear-gradient(to right, #ffffff, #eef1fe);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.conf {
  color: var(--primary-green);
  font-size: 12px;
  font-weight: 600;
}

.guest-name {
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
}

.pending {
  background-color: #f4edc9;
  color: #b7a30f;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.contact-info {
  font-size: 12px;
  color: #555;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-item p {
  font-size: 12px;
  color: #666;
}

.info-item strong {
  font-size: 14px;
  font-weight: 600;
}

.icons {
  width: 32px;
  height: 32px;
  padding: 6px;
  background-color: #eeeeee;
  border-radius: 6px;
  object-fit: contain;
}

.kla {
  width: 30px;
  height: 30px;
}

.k {  
  z-index: 3;
}

.l {
  margin-left: -8px;
  z-index: 2;
}

.a {
  margin-left: -8px;
  z-index: 1;
}

.alk {
  bottom: 20%;
  left: 40%;
  font-size: 12px;
  color: white;
  font-weight: 600;
}

.guest-count {
  font-size: 12px;
  color: #555;
  text-align: center;
}

.ri-circle-fill {
  font-size: 8px;
  align-self: center;
}

.collapse-btn {
  min-width: 100px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
}

.checked-in {
  background-color: #cfeecb;
  color: #25b700;
  font-size: 12px;
  font-weight: 500;
}

.header-left {
  min-width: 330px;
}

.header-center {
  flex: 1;
}

.header-right {
  min-width: 220px;
}
</style>