<template>
  <div class="container-fluid py-3">
    <div class="card shadow-sm border-0">

      <div
        class="card-header bg-white d-flex justify-content-between align-items-center gap-1"
        style="font-size: 11px"
      >
        <div class="d-flex gap-2">
          <p><img :src="pdficon" class="object-fit-contain" /></p>
          <p class="mb-0 fw-semibold">firstcheck.pdf</p>
        </div>
        <div class="d-flex gap-2">
          <p class="fw-semibold"><i class="ri-arrow-left-s-line"></i></p>
          <p class="fw-semibold text-white bg-secondary px-2 rounded">1</p>
          <p class="fw-semibold">of</p>
          <p class="fw-semibold">3</p>
          <p class="fw-semibold"><i class="ri-arrow-right-s-line"></i></p>
        </div>
        <div class="d-flex gap-4">
          <p><img :src="refresh" width="15" /></p>
          <p><img :src="scanner" width="15" /></p>
          <p><img :src="download" width="15" /></p>
          <p><img :src="fullscreen" width="15" /></p>
        </div>
      </div>

      <div class="card_container">
        <div class="card-body" style="background-color: #fafafa">
          <div class="p-1 pb-0 pt-0 d-flex justify-content-center">
            <img :src="invoice" />
          </div>
        </div>
        <div class="card-body pt-0" style="background-color: #fafafa">
          <div class="p-1 pt-0 d-flex justify-content-center">
            <img :src="invoice" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import pdficon from "../../assets/pdficon.png";
import refresh from "../../assets/refreshh.png";
import scanner from "../../assets/scannerr.png";
import download from "../../assets/downloadd.png";
import fullscreen from "../../assets/fullscreen.png";
import invoice from "../../assets/invoicee.png";
</script>

<style scoped>
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