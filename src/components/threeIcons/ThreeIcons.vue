<template>
  <div class="icons d-flex">
    <div
      class="fontisto border border-1 rounded rounded-circle position-relative"
    >
      <img
        :src="fontisto"
        class="position-absolute top-50 start-50 translate-middle"
      />
      <img :src="Ellipse_535" class="dot" />
    </div>
    <div
      class="vector border border-1 rounded rounded-circle position-relative"
    >
      <img
        :src="vector"
        class="position-absolute top-50 start-50 translate-middle"
      />
      <img :src="Ellipse_536" class="dot" />
    </div>
    <div class="picon border border-1 rounded rounded-circle position-relative">
      <img
        :src="picon"
        class="position-absolute top-50 start-50 translate-middle"
      />
      <img :src="Ellipse_532" class="dot" />
    </div>
  </div>
</template>

<script setup>
import Ellipse_532 from "../../assets/Ellipse_532.png";
import Ellipse_535 from "../../assets/Ellipse_535.png";
import Ellipse_536 from "../../assets/Ellipse_536.png";
import fontisto from "../../assets/fontisto.png";
import picon from "../../assets/picon.png";
import vector from "../../assets/vector.png";
</script>

<style scoped>
.fontisto {
  background-color: #f0bfd2;
  width: 35px;
  height: 35px;
  position: relative;
}
.dot {
  position: absolute;
  left: 70%;
}
.vector,
.picon {
  background-color: #c1e6c5;
  width: 35px;
  height: 35px;
}
</style>
