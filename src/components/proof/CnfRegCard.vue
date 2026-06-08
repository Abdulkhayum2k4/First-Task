<template>
  <div class="">
    <div class="col-4">
      <div
        class="container-fluid d-flex justify-content-between border"
        style="box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5)"
      >
        <div class="mt-2">
          <p>CNF 13134553</p>
        </div>
        <div class="align-items-center">
          <p class="d-flex align-items-center gap-2">
            <span class="fs-3">-</span>
            <span class="bg-secondary-subtle p-1 m-2">100</span>
            <span class="fs-3">+</span>
          </p>
        </div>
        <div class="d-flex gap-2 mt-2">
          <p><img :src="sharee" alt="" /></p>
          <p><img :src="downloadd" alt="" /></p>
        </div>
      </div>
    </div>

    <div class="col-4 mt-1">
      <div class="px-2 pb-2 bg-secondary-subtle">
        <img :src="cnfregcardd" alt="" width="495" />
      </div>
    </div>
  </div>
</template>
<script setup>
import downloadd from "../../assets/downloaddd.png";
import sharee from "../../assets/sharee.png";
import cnfregcardd from "../../assets/cnfregcardd.png";
</script>
