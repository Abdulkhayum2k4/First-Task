<template>
  <div class="py-3 bodyy" style="font-size: 12px">
    <div class="card rounded shadow-sm border-0">
      <div
        class="card-header bg-white d-flex justify-content-between align-items-center"
      >
        <div>
          <p class="mb-0 fw-semibold" style="font-size: 15px">
            POS Check - 1221
          </p>
        </div>
        <div class="d-flex gap-2">
          <span class="fw-semibold" style="color: #e23744; font-size: 12px"
            >Re-opened</span
          >
          <span><img :src="seperator" alt="" /></span>
          <span class="fw-semibold" style="color: #5637e2; font-size: 12px"
            >Requested e-inv</span
          >
        </div>
      </div>

      <div class="card_container">
        <div class="card-body" style="background-color: #fafafa">
          <div class="mb-4 p-1 border-bottom">
            <p class="mb-1 fw-semibold section-title">Check Details</p>
            <div class="p-2">
              <div class="info-row">
                <span class="info-label">Check Number</span>
                <span class="info-value">234234</span>
              </div>
              <div class="info-row">
                <span class="info-label">Check Date</span>
                <span class="info-value"
                  >21/02/2024 12:10 - 21/02/2024 14:55</span
                >
              </div>
              <div class="info-row">
                <span class="info-label">Total Bill Amount</span>
                <span class="info-value">₹ 32,999.30</span>
              </div>
              <div class="info-row">
                <span class="info-label">Outlet</span>
                <span class="info-value">Le Cafe</span>
              </div>
            </div>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <p class="fw-semibold mb-3 section-title">Signatures</p>
            <div
              v-for="(item, index) in signatures"
              :key="index"
              class="info-row"
            >
              <span class="info-label">{{ item.label }}</span>
              <span class="d-flex gap-2 info-value" style="color: #e23744">
                <img :src="thubmsdown" alt="" class="object-fit-contain" />
                <span class="fw-bold" style="font-size: 13px">Not-Signed</span>
              </span>
            </div>
          </div>

          <div class="mb-4">
            <div class="info-row mb-3 pb-3 border-bottom">
              <span class="info-label fw-semibold" style="font-size: 13px"
                >Invoice Linked</span
              >
              <span class="info-value">
                <button
                  class="bg-transparent rounded px-3 fw-medium"
                  style="
                    color: #e23744;
                    border: 1px solid #e23744;
                    font-size: 11px;
                  "
                >
                  link
                </button>
              </span>
            </div>
            <div class="info-row pb-3 border-bottom">
              <span class="info-label fw-semibold" style="font-size: 13px"
                >E-Invoice</span
              >
              <span class="info-value">
                <button
                  class="bg-transparent rounded px-2 fw-medium"
                  style="
                    color: #e23744;
                    border: 1px solid #e23744;
                    font-size: 11px;
                  "
                >
                  Generate
                </button>
              </span>
            </div>
          </div>

          <div
            class="mb-4 pb-3 d-flex justify-content-between align-items-center border-bottom"
          >
            <div>
              <span class="fw-semibold" style="font-size: 13px"
                >Attachments (3)</span
              >
              <a
                href="#"
                class="ms-2 text-decoration-none fw-semibold"
                style="color: #5637e2; font-size: 13px"
                >View</a
              >
            </div>
            <button
              class="text-white px-2 py-1 rounded border-0 fw-medium"
              style="background-color: var(--primary-red)"
            >
              Actions
            </button>
          </div>

          <div class="mb-4 border-bottom pb-3">
            <div class="info-row">
              <span class="info-label fw-semibold" style="font-size: 13px"
                >Remarks</span
              >
              <span class="info-value fw-semibold">---</span>
            </div>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <p class="fw-bold mb-3 section-title">Guest Details</p>
            <div class="info-row">
              <span class="info-label">Guest Name</span>
              <span class="info-value fw-bold">---</span>
            </div>
            <div class="info-row">
              <span class="info-label">Guest Employee ID</span>
              <span class="info-value fw-bold">---</span>
            </div>
            <div class="info-row">
              <span class="info-label">Room Number</span>
              <span class="info-value fw-bold">---</span>
            </div>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <p class="fw-bold mb-3 section-title">Share Details</p>
            <div class="info-row">
              <span class="info-label text-muted">Mobile Number</span>
              <span class="info-value fw-bold">92XXXXXXXX26</span>
            </div>
            <div class="info-row">
              <span class="info-label text-muted">Email ID</span>
              <span class="info-value fw-bold">---</span>
            </div>
          </div>

          <div class="border-bottom mb-4 p-1">
            <p class="fw-bold mb-3 section-title">Payment Details</p>
            <div class="info-row">
              <span class="info-label">Amex Card (36XXXXXX)</span>
              <span class="info-value fw-semibold">₹ 25,299.20</span>
            </div>
            <div class="info-row">
              <span class="info-label">UPI (36XXXXXX)</span>
              <span class="info-value fw-semibold">₹ 2,000.00</span>
            </div>
          </div>

          <div class="mb-2 p-1">
            <p class="fw-bold mb-3 section-title">Activity log</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import thubmsdown from "../../assets/thumbsdown.png";
import seperator from "../../assets/seperator.png";

const signatures = [
  { label: "Guest" },
  { label: "Outlet Manager" },
  { label: "FnB Manager" },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.bodyy {
  font-family: "Poppins", sans-serif;
}

.card {
  border-radius: 10px !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(83vh - 24px);
}

.card_container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.section-title {
  font-size: 13px;
}

.info-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
}

.info-label {
  width: 140px; 
  min-width: 140px;
  font-size: 12px;
}

.info-value {
  flex: 1;
  font-size: 12px;
  font-weight: bold;
}
</style>
