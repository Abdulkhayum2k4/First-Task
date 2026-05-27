<template>
    <div class="container-fluid py-3 " >
        <div class="col-3 vh-100">
            <div class="card rounded shadow-sm border-0">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <p class="mb-0 fw-bold">
                        POS Checks (2)
                    </p>
                </div>

                <div class="card-body  p-2 d-flex justify-content-between" style="background-color: #ffe0e8;"> 
                        <div class="d-flex">
                            <p><img :src="redpin" alt="" width="15"></p>
                            <div class="ms-2">
                                <p class="fw-bold">2156456
                                    <p class="fw-semibold">Artistry Pub</p>
                                </p>
                            </div>
                        </div>
                        <div class="">
                            <em>
                                <p class="fw-medium">23/20/24 12:17</p>
                            </em>
                        </div>
                </div>
                <div class="p-2 d-flex justify-content-between" style="background-color: #fafafa;"> 
                    <div class="d-flex ms-3">
                        <p></p>
                        <div class="ms-2">
                            <p class="mb-0 pb-0 fw-bold">2332444 </p>
                            <p class="fw-semibold">Le Cafe
                                
                            </p>
                        </div>
                    </div>
                    <div class="">
                       <em>

                           <p class="fw-medium">23/20/24 19:18</p>
                       </em>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import redpin from '../../assets/redpin.png'
import { ref } from 'vue'
const source = ref([{
    name: "Arstistry Pub",
    id: 2156546,
    time: "23/20/24 12:17",
    there: true,
},
{
    name: "Le Cafe",
    id: 2332444,
    time: "23/20/24 19:18",
    there: false,
},
])
</script>