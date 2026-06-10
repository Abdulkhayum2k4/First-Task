<template>
  <div class="checks py-3">
    <div class="card shadow-sm border-0">
      <div class="card-header bg-white d-flex justify-content-between align-items-center">
        <p class="mb-0 fw-semibold " style="font-size: 15px;">POS Checks (2)</p>
      </div>
      <div class="" style="background-color: #f8f8f8; font-size: 13px;" >
        <div class="card-body p-2 d-flex justify-content-between  mt-2" style="background-color: #ffe0e8">
          <div class="d-flex ">
            <p><img :src="redpin" alt="" width="15" /></p>
            <div class="ms-2 ">
              <div class="fw-bold">
                2156456
                <p class="fw-semibold">Artistry Pub</p>
              </div>
            </div>
          </div>
          <div>
            <em>
              <p class="fw-normal" style="font-size: 12px;">23/20/24 12:17</p>
            </em>
          </div>
        </div>
        <div class="p-2 d-flex justify-content-between" style="background-color: #fafafa">
          <div class="d-flex ms-3 vh-100">
            <p></p>
            <div class="ms-2">
              <p class="mb-0 pb-0 fw-bold">2332444</p>
              <p class="fw-semibold">Le Cafe</p>
            </div>
          </div>
          <div class="">
            <em>
              <p class="fw-normal" style="font-size: 12px;">23/20/24 19:18</p>
            </em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import redpin from "../../assets/redpin.png";
</script>

<style scoped>
.checks {
  width: 250px;
  height: 100%;
}

.card {
  border-radius: 10px !important;
  overflow: hidden;
}
</style>
