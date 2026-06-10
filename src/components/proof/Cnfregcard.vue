<template>
  <div class="w-100">
    <div
      class="container-fluid d-flex justify-content-between border"
      style="box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5)"
    >
      <div class="align-self-center">
        <p>CNF 13134553</p>
      </div>
      <div class="align-items-center">
        <p class="d-flex align-items-center gap-2">
          <span class="fs-3">-</span>
          <span class="bg-secondary-subtle p-1 m-2">100</span>
          <span class="fs-3">+</span>
        </p>
      </div>
      <div class="d-flex gap-3 align-self-center">
        <p><img :src="sharee" height="15px" width="20px" /></p>
        <p><img :src="downloadd" height="25px" width="25px" /></p>
      </div>
    </div>
  </div>

  <div class="col-4 w-100">
    <div class="px-2 pb-2">
      <img class="cnfImg" :src="cnfregcardd" />
    </div>
  </div>
</template>
<script setup>
import downloadd from "../../assets/downloaddd.png";
import sharee from "../../assets/sharee.png";
import cnfregcardd from "../../assets/cnfregcardd.png";
</script>

<style scoped>
.cnfImg{
  width: 100%;
}
</style>