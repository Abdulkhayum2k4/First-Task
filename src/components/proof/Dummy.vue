<template>
    <div class="container-fluid py-3 ">
        <div class="col-4">
            <div class="card rounded shadow-sm border-0">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-0 fw-bold">POS Check - 1221</h6>
                    </div>
                    <div class="d-flex gap-2">
                        <span class="fw-semibold" style="color: #E23744;">
                            Re-opened
                        </span>
                        <span>
                            <img :src="seperator" alt="">
                        </span>
                        <span class="fw-semibold" style="color:#5637E2">
                            Requested e-inv
                        </span>
                    </div>
                </div>

                <div class="card-body " style="background-color: #fafafa;">
                    <div class="mb-4 p-1 border-bottom">
                        <p class="mb-1 fw-bold ">Check Details</p>
                        <div class="p-2">
                            <div class="d-flex mb-3 gap-2">
                                <div class=" ">Check Number</div>
                                <div class=" fw-semibold"> 234234</div>
                            </div>

                            <div class="d-flex mb-3 gap-2">
                                <div class="">Check Date</div>
                                <div class="fw-semibold">21/02/2024 12:10 - 21/02/2024 14:55</div>
                            </div>

                            <div class=" mb-3 d-flex gap-2">
                                <div class=" ">Total Bill Amount</div>
                                <div class=" fw-semibold">₹ 32,999.30</div>
                            </div>

                            <div class="d-flex mb-3 gap-2">
                                <div class=" ">Outlet</div>
                                <div class="fw-semibold">Le Cafe</div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4 p-1 border-bottom">
                        <h6 class="fw-bold mb-3">Signatures</h6>

                        <div v-for="(item, index) in signatures" :key="index"
                            class="d-flex  align-items-center mb-2 fw-medium p-1 gap-2">
                            <span>{{ item.label }}</span>

                            <span class=" d-flex gap-2" style="color: #e23744;">
                                <img :src="thubmsdown" alt="" class="object-fit-contain">
                                <span class="fw-bold">

                                    Not-Signed
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex align-items-center mb-3 pb-3 gap-2 border-bottom">
                            <span class="fw-semibold ">Invoice Linked</span>

                            <button class="bg-transparent rounded px-3 fw-medium "
                                style="color:#E23744; border: 2px solid #E23744;font-size: 13px;">
                                link
                            </button>
                        </div>

                        <div class="d-flex  align-items-center gap-2 pb-3 border-bottom">
                            <span class="fw-semibold">E-Invoice</span>

                            <button class="bg-transparent rounded px-2 fw-medium "
                                style="color:#E23744; border: 2px solid #E23744;font-size: 13px;">
                                Generate
                            </button>
                        </div>
                    </div>
                    <div class="mb-4 pb-3 d-flex justify-content-between align-items-center border-bottom">
                        <div>
                            <span class="fw-semibold">Attachments (3)</span>
                            <a href="#" class="ms-2 text-decoration-none fw-semibold" style="color: #5637E2;">View</a>
                        </div>

                        <button class="text-white px-2 py-1 rounded border-0 fw-medium"
                            style="background-color: var(--primary-red);">
                            Actions
                        </button>
                    </div>

                    <div class="mb-4 d-flex gap-3 border-bottom pb-3">
                        <h6 class="fw-bold">Remarks</h6>
                        <p class=" mb-0">---</p>
                    </div>

                    <div class="mb-4 p-1 border-bottom">
                        <h6 class="fw-bold mb-3">Guest Details</h6>
                        <div class="p-1">

                            <div class="d-flex mb-2 gap-3 pb-1">
                                <div class=" ">Guest Name</div>
                                <div class="fw-bold">---</div>
                            </div>

                            <div class="d-flex mb-2 gap-3 pb-1">
                                <div class=" ">Guest Employee ID</div>
                                <div class="fw-bold">---</div>
                            </div>

                            <div class="d-flex mb-2 gap-3">
                                <div class=" ">Room Number</div>
                                <div class="fw-bold">---</div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4 p-1 border-bottom">
                        <h6 class="fw-bold mb-3">Share Details</h6>
                        <div class="p-1">

                            <div class="d-flex mb-2 pb-1 gap-3">
                                <div class=" text-muted">Mobile Number</div>
                                <div class="fw-bold">92XXXXXXXX26</div>
                            </div>

                            <div class="d-flex mb-2 gap-3">
                                <div class=" text-muted">Email ID</div>
                                <div class="fw-bold">---</div>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom mb-4 p-1">
                        <h6 class="fw-bold mb-3">Payment Details</h6>
                        <div class="p-1">

                            <div class="d-flex justify-content-between mb-2">
                                <span>Amex Card (36XXXXXX)</span>
                                <span class="fw-bold">₹ 25,299.20</span>
                            </div>

                            <div class="d-flex justify-content-between">
                                <span>UPI (36XXXXXX)</span>
                                <span class="fw-semibold">₹ 2,000.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-2 p-1">
                        <h6 class="fw-bold mb-3">Activity log</h6>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import thubmsdown from '../../assets/thumbsdown.png'
import seperator from '../../assets/seperator.png'
const signatures = [
    { label: "Guest" },
    { label: "Outlet Manager" },
    { label: "FnB Manager" },
]
</script>