<template>
    <div class="pheader d-flex justify-content-between p-3">
      <div class="left-pcontent">
        <p class="fw-bold">Promotions</p>
        <p>10 seconds delay for each promotion</p>
      </div>
      <div class="right-pcontent d-flex justify-content-between align-items-center gap-2">
        <img src="../../assets/plus.png" alt="" height="20" width="20">
        <p>Add New Promotion</p>
      </div>
    </div>
  <div class="pcarousel-inner d-flex  gap-3">
    <div
      v-for="promotion in promotions"
      :key="promotion.id"
      class="pimg position-relative d-flex flex-column"
    >
      <img :src="promotion.image" alt="" class="img-fluid">

      <button
        class="btn rounded-circle bg-secondary-subtle border-0 position-absolute top-50 start-0 translate-middle"
        style="width:45px;height:45px;"
      >
        &lt;
      </button>

      <button
        class="btn rounded-circle bg-secondary-subtle border-0 position-absolute top-50 end-0 translate-middle"
        style="width:45px;height:45px;"
      >
        &gt;
      </button>
      <div class="pcontent d-flex justify-content-between w-100">
       <div class="insidepcontent">
         <p class="fw-bold mb-1">Hyatt Regency Food and Beverage Promotion</p>
        <p class="mb-0">created on 12/02/2025 12:27</p>
       </div>
       <div class="pimages d-flex align-items-center gap-4">
        <img src="../../assets/onoff.png" alt="" width="20" height="20">
        <img src="../../assets/recyclebin.png" alt="" width="20" height="20">        
       </div>
      </div>
    </div>
     <div class="action-content position-absolute bottom-0 end-0 mt-5 ">
    <div class="one-pcontent d-flex justify-content-center align-items-center">
        <img src="../../assets/pauseanimation.png" alt="" width="15" height="15">
        <p>Stop animation</p>
    </div>
    <div class="two-pcontent d-flex justify-content-center align-items-center">
        <img src="../../assets/payanimation.png" alt="" width="15" height="15">
        <p>Stop animation</p>
    </div>
  </div>
  </div>
 
</template>
<script setup>
import recpages from '../../assets/recpages.png'

const promotions = [
  {
    id: 1,
    image: recpages
  },
  {
    id: 2,
    image: recpages
  },
  {
    id: 3,
    image: recpages
  }
]
</script>