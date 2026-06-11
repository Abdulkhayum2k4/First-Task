<template>
  <div class="novotel-wrapper">
    <div class="novotel-header container-fluid d-flex justify-content-between border"
      style="box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5)">
      <div class="align-self-center">
        <p>CNF 13134553</p>
      </div>
      <div class="align-items-center">
        <p class="d-flex align-items-center gap-2">
          <span class="fs-3" style="cursor: pointer; user-select: none" @click="zoomOut">-</span>
          <span class="bg-secondary-subtle p-1 m-2">{{ zoomLevel }}%</span>
          <span class="fs-3" style="cursor: pointer; user-select: none" @click="zoomIn">+</span>
        </p>
      </div>
      <div class="d-flex gap-3 align-self-center">
        <p style="cursor: pointer" @click="shareImage"><img :src="sharee" height="15px" width="20px" /></p>
        <p style="cursor: pointer" @click="downloadImage"><img :src="downloadd" height="25px" width="25px" /></p>
      </div>
    </div>

    <div class="novotel-body">
      <div class="cnfContainer px-2 pb-2">
        <img
          class="cnfImg"
          :src="cnfregcardd"
          :style="{ width: zoomLevel + '%', maxWidth: 'none' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import downloadd from "../../assets/downloaddd.png";
import sharee from "../../assets/sharee.png";
import cnfregcardd from "../../assets/cnfregcardd.png";

const zoomLevel = ref(100);

const zoomIn = () => {
  if (zoomLevel.value < 200) zoomLevel.value += 10;
};

const zoomOut = () => {
  if (zoomLevel.value > 50) zoomLevel.value -= 10;
};

const downloadImage = () => {
  const link = document.createElement("a");
  link.href = cnfregcardd;
  link.download = "CNF_13134553.png";
  link.click();
};

const shareImage = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "CNF 13134553",
        text: "Reg Card",
        url: cnfregcardd,
      });
    } catch (err) {
      console.error("Share failed:", err);
    }
  } else {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard");
  }
};
</script>

<style scoped>
.novotel-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.novotel-header {
  flex-shrink: 0;
}

.novotel-body {
  flex: 1;
  overflow: auto;
}

.cnfImg {
  display: block;
  transition: width 0.2s ease;
}

.cnfContainer {
  background-color: #f7f7f7;
  min-height: 100%;
}
</style>