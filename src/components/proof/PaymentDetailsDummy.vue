<template>
  <div class="container-fluid py-0 bodyy">
    <div class="card rounded shadow-sm border-0">
      <div
        class="card-header bg-white d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Payment details - Advance 1</p>
      </div>

      <div class="card_body_wrapper border px-2 py-1">
        <div class="d-flex gap-3 p-2">
          <p><img :src="pd1" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p class="fw-semibold">Advance 1</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd2" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>TID :</p>
            <p class="fw-bold">78476554</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd3" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Payment Status :</p>
            <p class="fw-bold">Success</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd4" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Payment Date</p>
            <p class="fw-bold">02-05-2001 21:09:20</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd5" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Transaction ID :</p>
            <p class="fw-bold">7632847673</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd6" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Payment ID :</p>
            <p class="fw-bold">8763487647678476</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd7" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Signature on charge slip :</p>
            <p style="color: var(--primary-green)">
              Signed
              <img :src="greendone" alt="" class="align-content-center" />
            </p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd6" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>RRN :</p>
            <p class="fw-bold">8763487647678476</p>
          </div>
        </div>
        <div class="d-flex gap-3 px-2 py-1">
          <p><img :src="pd6" alt="" class="icon-img" /></p>
          <div class="d-flex gap-2">
            <p>Auth Code :</p>
            <p class="fw-bold">8763487647678476</p>
          </div>
        </div>

        <button class="actions_btn">Actions</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import pd1 from "../../assets/pd1.png";
import pd2 from "../../assets/pd2.png";
import pd3 from "../../assets/pd3.png";
import pd4 from "../../assets/pd4.png";
import pd5 from "../../assets/pd5.png";
import pd6 from "../../assets/pd6.png";
import pd7 from "../../assets/pd7.png";
import greendone from "../../assets/greendone.png";
</script>

<style scoped>
.bodyy {
  font-family: "Inter", sans-serif;
  height: 100%;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card_body_wrapper {
  flex: 1;
  position: relative;
  overflow-y: auto;
  line-height: 35px;
}

.icon-img {
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: auto;
}

.actions_btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background-color: var(--primary-red);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  padding: 4px 10px;
  cursor: pointer;
}
</style>