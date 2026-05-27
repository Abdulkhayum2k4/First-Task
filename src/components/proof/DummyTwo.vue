<template>
    <div class="container-fluid py-3 ">
        <div class="col-4" style="width:">
            <div class="card rounded shadow-sm border-0">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2">
                        <p>

                            <img :src="pdficon" alt="" class=" object-fit-contain"> 
                        </p>
                        <p class="mb-0 fw-semibold">
                            firstcheck.pdf
                        </p>
                    </div>
                    <div class="d-flex gap-1">
                        <p class="fw-semibold"><i class="ri-arrow-left-s-line"></i></p>
                        <p class="fw-semibold text-white bg-secondary px-2 rounded">1</p>
                        <p class="fw-semibold">of 3</p>
                        <p class="fw-semibold"><i class="ri-arrow-right-s-line"></i></p>
                    </div>
                    <div class=" d-flex gap-3">
                        <p class="">
                            <img :src="refresh" alt="">
                        </p>
                        <p>
                            <img :src="scanner" alt="">
                        </p>
                        <p>
                            <img :src="download" alt="">
                        </p>
                        <p>
                            <img :src="fullscreen" alt="">
                        </p>
                    </div>
                </div>

                <div class="card-body" style="background-color: #fafafa;">
                    <div class=" p-1 pb-0 pt-0 d-flex justify-content-center ">
                        <img :src="invoice" alt="">
                    </div>
                </div>
                <div class="card-body pt-0" style="background-color: #fafafa;">
                    <div class=" p-1 pt-0 d-flex justify-content-center ">
                        <img :src="invoice" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import pdficon from '../../assets/pdficon.png'
import refresh from '../../assets/refreshh.png'
import scanner from '../../assets/scannerr.png'
import download from '../../assets/downloadd.png'
import fullscreen from '../../assets/fullscreen.png'
import invoice from '../../assets/invoicee.png'
</script>