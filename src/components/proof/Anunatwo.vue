<template>
    <div class="container-fluid">
        <header>
            <div class="d-flex justify-content-between p-1 border ">
                <div class="right-fheader d-flex align-items-center gap-3">
                    <img :src="fwrong" alt="" width="25" height="25" />
                    <div class="showfolio">Showing 1 / 3 Folio</div>
                </div>
                <div class="middle-fcontent">
                    <div class="window d-flex gap-2">
                        <span>
                            <i class="ri-arrow-left-s-line"></i>
                        </span>
                        Window 1
                        <span class="fw-bolder">
                            <i class="ri-arrow-right-s-line"></i>
                        </span>
                    </div>
                </div>
                <div class=" d-flex gap-2">
                    <button style=" color: #4fd13e; background-color: #d9ffd4; border: none;  border-radius: 20px;">
                        Signed
                    </button>

                    <p style="color: #25B700;"> <img :src="greendot" alt="" class="me-2">paid</p>
                </div>

            </div>
        </header>

        <body>

            <div class="d-flex">
                <div class="mt-2">
                    <div class="border rounded">
                        <p class="fw-bold border-bottom">Info Folio 1</p>
                        <div class=" px-4 bg-secondary">
                            <img :src="info" alt="" />
                        </div>
                    </div>
                </div>
                <div class="w-100 mt-2 mx-2">
                    <div class="">

                        <div class="d-flex flex-column  ">
                            <div class="m-2 border rounded">
                                <div
                                    class="border-bottom p-1 card-header bg-white d-flex justify-content-between align-items-center">
                                    <p class="mb-0 fw-bold">Guest Details</p>
                                    <span class="fs-5 fw-bold"> <i class="ri-arrow-up-s-line"></i></span>
                                </div>
                                <div class="card-body">
                                    <div class="row bg-secondary-subtle ms-1 w-100">
                                        <div class="col-md-3">
                                            <div class="fw-bold">Christiana Benarjee</div>
                                            <div>Name</div>

                                            <div class="fw-bold mt-3">---</div>
                                            <div>Company</div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="fw-bold">2386234765466</div>
                                            <div>Membership ID</div>

                                            <div class="fw-bold mt-3">33GT277GYGY</div>
                                            <div>GSTN</div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="fw-bold">1</div>
                                            <div>Guests</div>

                                            <div class="fw-bold mt-3">21/02/25</div>
                                            <div>Bill Date</div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="fw-bold">475</div>
                                            <div>Room</div>

                                            <div class="fw-bold mt-3">12,288.39</div>
                                            <div>Amount</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" d-flex mx-2 gap-4 align-items-center">

                                <p class="fw-bold">25 items</p>
                                <div class="fs-1 text-secondary text-center align-content-center">
                                    <p class="a align-items-center">

                                        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                    </p>
                                </div>

                            </div>
                            <div class=" border rounded">
                                <table class="table rounded table-bordered table-striped p-3">
                                    <thead class="bg-secondary">
                                        <tr style="font-size: 13px" class="bg-secondary">
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Item name</th>
                                            <th>Item value</th>
                                            <th>Rate</th>
                                            <th>CGST</th>
                                            <th>SGST</th>
                                            <th>IGST</th>
                                            <th>Total value</th>
                                        </tr>
                                    </thead>
                                    <tbody style="font-size: 13px; font-weight: 500">
                                        <tr>
                                            <td></td>
                                            <td>
                                                <DatePicker />
                                            </td>
                                            <td>
                                                <SearchInput />
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr v-for="(document, index) in Items" :key="index">
                                            <td>
                                                <span>{{ document.id }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.Date }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.Itemname }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.Itemvalue }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.Rate }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.CGST }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.SGDT }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.IGST }}</span>
                                            </td>
                                            <td>
                                                <span>{{ document.Totalvalue }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    </div>
</template>


<script setup>

import fwrong from '../../assets/fwrong.png'
import greendot from '../../assets/greendot.png'
import info from '../../assets/infonovotel.png'
import bordergray from '../../assets/bordergray.png'
import { ref } from 'vue'


const Items = ref([
    {
        id: "1",
        Date: "21/12/2025",
        Itemname: "Special Corporate",
        Itemvalue: "₹ 12,299.29",
        Rate: "8 %",
        CGST: "₹ 12,299.29",
        SGDT: "₹ 12,299.29",
        IGST: "₹ 12,299.29",
        Totalvalue: "₹ 12,299.29",
    },

    {
        id: "2",
        Date: "21/12/2025",
        Itemname: "Three 6.5 Manual Ba...",
        Itemvalue: "₹ 12,299.29",
        Rate: "8 %",
        CGST: "₹ 12,299.29",
        SGDT: "₹ 12,299.29",
        IGST: "₹ 12,299.29",
        Totalvalue: "₹ 12,299.29",
    },

    {
        id: "3",
        Date: "21/12/2025",
        Itemname: "Four 1.2 Lunch",
        Itemvalue: "₹ 12,299.29",
        Rate: "8 %",
        CGST: "₹ 12,299.29",
        SGDT: "₹ 12,299.29",
        IGST: "₹ 12,299.29",
        Totalvalue: "₹ 12,299.29",
    },
]);
</script>