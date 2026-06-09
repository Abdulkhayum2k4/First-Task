<template>
  <div class="pheader d-flex justify-content-between p-3">
    <div class="left-pcontent">
      <p class="fw-bold">Promotions</p>
      <p>10 seconds delay for each promotion</p>
    </div>
    <div
      class="right-pcontent d-flex justify-content-between align-items-center gap-2"
    >
      <img src="../../assets/plus.png" alt="" height="20" width="20" />
      <p>Add New Promotion</p>
    </div>
  </div>

  <div class="bg-succes d-flex justify-content-center align-items-center">
    <div class="whole postion-relative">
      <img :src="recpages" class="bg-dange" object-fit-cover />
      <div
        class="xyz d-flex justify-content-between bg-primar position-absolute"
      >
        <p
          style="background-color: black; color: white"
          class="px-3 rounded fw-semibold"
        >
          1/5
        </p>
        <p
          style="background-color: #d1f3cc; color: #17c400"
          class="rounded px-2 fw-semibold"
        >
          currently presenting
        </p>
      </div>

      <div class="pcontent d-flex justify-content-between w-55">
        <div class="insidepcontent">
          <p class="fw-bold mb-1 fw-semibold ms-3">
            Hyatt Regency Food and Beverage Promotion
          </p>
          <p class="mb-0 ms-3">created on 12/02/2025 12:27</p>
        </div>
        <div class="pimages d-flex align-items-center gap-4 me-3">
          <img src="../../assets/onoff.png" alt="" width="30" height="20" />
          <img
            src="../../assets/recyclebin.png"
            alt=""
            width="20"
            height="25"
          />
        </div>
      </div>
    </div>
    <div class="actioncontent bottom-0 mt-5" style="background-color: #17c400">
      <div
        class="one-pcontent d-flex justify-content-center align-items-center"
      >
        <img
          src="../../assets/pauseanimation.png"
          alt=""
          width="15"
          height="15"
        />
        <p class="fw-bold" style="color: #183153">Stop animation</p>
      </div>
      <div
        class="two-pcontent d-flex justify-content-center align-items-center"
      >
        <img
          src="../../assets/payanimation.png"
          alt=""
          width="15"
          height="15"
        />
        <p class="fw-bold" style="color: #183153">Stop animation</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import recpages from "../../assets/recpages.png";

const promotions = [
  {
    id: 1,
    image: recpages,
  },
  {
    id: 2,
    image: recpages,
  },
  {
    id: 3,
    image: recpages,
  },
];
</script>

<style scoped>
.whole {
  width: 580px;
}
.xyz {
  bottom: 4%;
  left: 455px;
  gap: 290px;
}
</style>
