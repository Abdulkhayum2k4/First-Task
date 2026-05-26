<script setup>
import praying from "../../assets/praying.png";
import crs from "../../assets/crs.png";
import room from "../../assets/room.png";
import stay from "../../assets/stay.png";
import Ellipse_654 from "../../assets/Ellipse_654.png";
import Ellipse_655 from "../../assets/Ellipse_655.png";
import Ellipse_656 from "../../assets/Ellipse_656.png";
</script>

<template>
  <div class="d-flex justify-content-between p-4 whole ">
    <div class="d-flex align-items-center ">
      <i class="ri-arrow-left-line pe-3 fs-1"></i>
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
            <i class="ri-circle-fill pe-1"></i>
            <p>Pending approval</p>
          </div>
          <p>Mail : maniXXXXgmail.com</p>
        </div>
      </div>
    </div>
    <div class="d-flex gap-4">
      <div class="d-flex align-items-center gap-3">
        <img :src="praying" class="icons p-2 rounded rounded-1" />
        <div>
          <p>Check in by</p>
          <strong>Maruthi k</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <img :src="room" class="icons p-2 rounded rounded-1" />
        <div>
          <p>Room</p>
          <strong>R-3276</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <img :src="crs" class="icons p-2 rounded rounded-1" />
        <div>
          <p>CRS ID</p>
          <strong>2834682735</strong>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <img :src="stay" class="icons p-2 rounded rounded-1" />
        <div>
          <p>Stay period</p>
          <strong>12/02/2025 - 14/02/2025</strong>
        </div>
      </div>

      <div class="align-self-center">
        <div class="d-flex">
          <div class="position-relative">
            <img :src="Ellipse_654" class="kla k" />
            <p class="alk position-absolute start-50 translate-middle-x">A</p>
          </div>
          <div class="position-relative">
            <img :src="Ellipse_655" class="kla l" />
            <p class="alk position-absolute start-50 translate-middle-x">L</p>
          </div>
          <div class="position-relative">
            <img :src="Ellipse_656" class="kla a" />
            <p class="alk position-absolute start-50 translate-middle-x">K</p>
          </div>
        </div>
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
.icons {
  width: 30px;
  height: 30px;
  background-color: #eeeeee;
}
.whole {
  min-width: 1496px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, white, #eef1fe);
}
.ri-circle-fill {
  font-size: 8px;
  align-self: center;
}
.alk {
  bottom: 10%;
}
.kla {
  width: 30px;
  height: 30px;
}
.l {
  margin: 0 -8px;
}
</style>
