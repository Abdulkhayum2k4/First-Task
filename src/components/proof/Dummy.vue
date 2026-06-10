<template>
  <div class="py-3 bodyy" style="font-size: 12px;">
    <div class="card rounded shadow-sm border-0">

      <div class="card-header bg-white d-flex justify-content-between align-items-center">
        <div>
          <p class="mb-0 fw-semibold" style="font-size: 15px;">POS Check - 1221</p>
        </div>
        <div class="d-flex gap-2">
          <span class="fw-semibold" style="color: #e23744; font-size: 12px;">Re-opened</span>
          <span><img :src="seperator" alt="" /></span>
          <span class="fw-semibold" style="color: #5637e2; font-size: 12px;">Requested e-inv</span>
        </div>
      </div>

      <div class="card_container">
        <div class="card-body" style="background-color: #fafafa">
          <div class="mb-4 p-1 border-bottom">
            <p class="mb-1 fw-semibold" style="font-size: 13px;">Check Details</p>
            <div class="p-2">
              <div class="d-flex mb-3 gap-2">
                <div style="font-size: 12px;">Check Number</div>
                <div class="fw-semibold" style="font-size: 13px;">234234</div>
              </div>
              <div class="d-flex mb-3 gap-2">
                <div style="font-size: 12px;">Check Date</div>
                <div class="fw-semibold" style="font-size: 13px;">21/02/2024 12:10 - 21/02/2024 14:55</div>
              </div>
              <div class="mb-3 d-flex gap-2">
                <div style="font-size: 12px;">Total Bill Amount</div>
                <div class="fw-semibold" style="font-size: 13px;">₹ 32,999.30</div>
              </div>
              <div class="d-flex mb-3 gap-2">
                <div style="font-size: 12px;">Outlet</div>
                <div class="fw-semibold" style="font-size: 13px;">Le Cafe</div>
              </div>
            </div>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <p class="fw-semibold mb-3" style="font-size: 13px;">Signatures</p>
            <div
              v-for="(item, index) in signatures"
              :key="index"
              class="d-flex align-items-center mb-2 fw-medium p-1 gap-2"
            >
              <span class="fw-normal" style="font-size: 12px;">{{ item.label }}</span>
              <span class="d-flex gap-2" style="color: #e23744">
                <img :src="thubmsdown" alt="" class="object-fit-contain" />
                <span class="fw-bold" style="font-size: 13px;">Not-Signed</span>
              </span>
            </div>
          </div>

          <div class="mb-4">
            <div class="d-flex align-items-center mb-3 pb-3 gap-2 border-bottom">
              <span class="fw-semibold" style="font-size: 13px;">Invoice Linked</span>
              <button
                class="bg-transparent rounded px-3 fw-medium"
                style="color: #e23744; border: 1px solid #e23744; font-size: 11px"
              >
                link
              </button>
            </div>
            <div class="d-flex align-items-center gap-2 pb-3 border-bottom">
              <span class="fw-semibold" style="font-size: 13px;">E-Invoice</span>
              <button
                class="bg-transparent rounded px-2 fw-medium"
                style="color: #e23744; border: 1px solid #e23744; font-size: 11px"
              >
                Generate
              </button>
            </div>
          </div>

          <div class="mb-4 pb-3 d-flex justify-content-between align-items-center border-bottom">
            <div>
              <span class="fw-semibold" style="font-size: 13px;">Attachments (3)</span>
              <a 
                href="#"
                class="ms-2 text-decoration-none fw-semibold"
                style="color: #5637e2; font-size: 13px;"
              >View</a>
            </div>
            <button
              class="text-white px-2 py-1 rounded border-0 fw-medium"
              style="background-color: var(--primary-red)"
            >
              Actions
            </button>
          </div>

          <div class="mb-4 d-flex gap-3 border-bottom pb-3">
            <h6 class="fw-semibold" style="font-size: 13px;">Remarks</h6>
            <p class="mb-0 fw-semibold">---</p>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <h6 class="fw-bold mb-3" style="font-size: 13px;">Guest Details</h6>
            <div class="p-1">
              <div class="d-flex mb-2 gap-3 pb-1">
                <div style="font-size: 12px;">Guest Name</div>
                <div class="fw-bold" style="font-size: 12px;">---</div>
              </div>
              <div class="d-flex mb-2 gap-3 pb-1">
                <div style="font-size: 12px;">Guest Employee ID</div>
                <div class="fw-bold" style="font-size: 12px;">---</div>
              </div>
              <div class="d-flex mb-2 gap-3">
                <div style="font-size: 12px;">Room Number</div>
                <div class="fw-bold" style="font-size: 12px;">---</div>
              </div>
            </div>
          </div>

          <div class="mb-4 p-1 border-bottom">
            <h6 class="fw-bold mb-3" style="font-size: 13px;">Share Details</h6>
            <div class="p-1">
              <div class="d-flex mb-2 pb-1 gap-3">
                <div class="text-muted" style="font-size: 12px;">Mobile Number</div>
                <div class="fw-bold" style="font-size: 12px;">92XXXXXXXX26</div>
              </div>
              <div class="d-flex mb-2 gap-3">
                <div class="text-muted" style="font-size: 12px;">Email ID</div>
                <div class="fw-bold" style="font-size: 12px;">---</div>
              </div>
            </div>
          </div>

          <div class="border-bottom mb-4 p-1">
            <h6 class="fw-bold mb-3" style="font-size: 13px;">Payment Details</h6>
            <div class="p-1">
              <div class="d-flex gap-2 mb-2">
                <span style="font-size: 12px;">Amex Card (36XXXXXX)</span>
                <span class="fw-semibold" style="font-size: 13px;">₹ 25,299.20</span>
              </div>
              <div class="d-flex gap-2">
                <span style="font-size: 12px;">UPI (36XXXXXX)</span>
                <span class="fw-semibold" style="font-size: 13px;">₹ 2,000.00</span>
              </div>
            </div>
          </div>

          <div class="mb-2 p-1">
            <h6 class="fw-bold mb-3" style="font-size: 13px;">Activity log</h6>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
</style>