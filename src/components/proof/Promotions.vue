<template>
    <div class="promotions d-flex justify-content-between p-3">
        <div class="promo">
            <p class="fw-bold">Promotions</p>
            <p>10 seconds delay for each promotion</p>
        </div>
        <div class="addnewpromotion d-flex justify-content-between align-items-center gap-2">
            <img src="../../assets/plus.png" alt="" width="25" p-0>
            <p>Add New Promotion</p>
        </div>
    </div>
    <div class="promotionscarousel d-flex ">
        <div class="pcarousel-inner">
            <div class="pimg">
                <img :src="recpages" alt="">
            </div>
            <div class="pimg">
                <img :src="recpages" alt="">
            </div>
            <div class="pimg">
                <img :src="recpages" alt="">
            </div>
        </div>
        <button class="pcoarousel-prev" type="button" >

        </button>
        <button class="pcarousel-next" type="button">

        </button>
    </div>
</template>
<script setup>
import recpages from '../../assets/recpages.png'
</script>