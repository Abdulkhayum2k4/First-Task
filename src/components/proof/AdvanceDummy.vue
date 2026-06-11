<template>
  <div class="container-fluid py-0">
    <div class="card rounded shadow-sm border-0">
      <div
        class="card-header bg-white d-flex justify-content-between align-items-center"
      >
        <div class="d-flex gap-2">
          <p><img :src="pdficon" class="object-fit-contain" /></p>
          <p class="mb-0 fw-bold pt-1" style="font-size: 11px">Advance 1</p>
        </div>
        <div class="d-flex gap-1">
          <p class="fw-semibold"><i class="ri-arrow-left-s-line"></i></p>
          <p
            class="fw-semibold text-white bg-secondary px-2 rounded"
            style="font-size: 14px"
          >
            1
          </p>
          <p class="fw-semibold">of 3</p>
          <p class="fw-semibold"><i class="ri-arrow-right-s-line"></i></p>
        </div>
        <div class="d-flex gap-3">
          <p><img :src="scanner" width="15" /></p>
          <p><img :src="download" width="15" /></p>
          <p><img :src="fullscreen" width="15" /></p>
        </div>
      </div>

      <div class="card_body_wrapper" style="background-color: #fafafa">
        <div class="d-flex justify-content-center p-1">
          <img :src="citybankinvoice" class="invoice_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pdficon from "../../assets/pdficon.png";
import scanner from "../../assets/scannerr.png";
import download from "../../assets/downloadd.png";
import fullscreen from "../../assets/fullscreen.png";
import citybankinvoice from "../../assets/citibankinvoice.png";
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px !important;
  overflow: hidden;
}

.card_body_wrapper {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.invoice_img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
