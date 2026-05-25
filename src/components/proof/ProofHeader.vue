<script setup>
import praying from "../../assets/praying.jpeg";
</script>

<template>
  <div class="d-flex justify-content-between p-4 whole">
    <div class="d-flex align-items-center">
      <i class="ri-arrow-left-line"></i>
      <div class="d-flex">
        <div>
          <p class="conf">Conf. : 21546123546</p>
          <h2 class="p-0 m-0">Glen Maxwell</h2>
          <p>Mobile : 87XXXXXXXX92</p>
        </div>
        <div class="d-flex justify-content-end align-items-end mx-2">|</div>
        <div class="d-flex flex-column justify-content-between">
          <div
            class="pending d-flex rounded rounded-5 px-3 py-1 align-self-center"
          >
            <i class="ri-circle-fill"></i>
            <p>Pending approval</p>
          </div>
          <p>Mail : maniXXXXgmail.com</p>
        </div>
      </div>
    </div>
    <div class="d-flex gap-5">
      <div class="d-flex align-items-center">
        <img :src="praying" class="p-2 rounded rounded-1" />
        <div>
          <p>Check in by</p>
          <strong>Maruthi k</strong>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <img :src="praying" class="p-2 rounded rounded-1" />
        <div>
          <p>Room</p>
          <strong>R-3276</strong>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <img :src="praying" class="p-2 rounded rounded-1" />
        <div>
          <p>CRS ID</p>
          <strong>2834682735</strong>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <img :src="praying" class="p-2 rounded rounded-1" />
        <div>
          <p>Stay period</p>
          <strong>12/02/2025 - 14/02/2025</strong>
        </div>
      </div>

      <div class="align-self-center">
        <div>ALK</div>
        <p>+14 guests</p>
      </div>

      <button class="btn btn-outline-dark align-self-center">Collapse</button>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.conf {
  color: var(--primary-green);
}
.pending {
  background-color: #f4edc9;
  color: #b7a30f;
}
img {
  width: 25px;
  height: 25px;
  background-color: #eeeeee;
}
.whole {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>
