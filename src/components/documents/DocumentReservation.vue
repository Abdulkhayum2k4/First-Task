<!-- <template>
    <Navbar />
    <div class="bgclr">
        <DocumentProps name="Documents" />
        <div class="">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i class="ri-arrow-down-s-line"></i></th>
                            <th>Confirmation</th>
                            <th>CRS ID</th>
                            <th>Guest Name</th>
                            <th>Stay Period</th>
                            <th>Room</th>
                            <th>Guests</th>
                            <th>Reservation</th>
                            <th>Identification</th>
                            <th>C-Form</th>
                            <th>Reg Card</th>
                            <th>Info Folio</th>
                            <th>Charge Slip</th>
                            <th>Invoices</th>
                            <th>DM Verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(guest, index) in guests" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td></td>
                            <td class="fw-bold">
                                {{ guest.confirmation }}
                            </td>

                            <td>{{ guest.crs }}</td>

                            <td>{{ guest.name }}</td>

                            <td>{{ guest.period }}</td>

                            <td>{{ guest.room }}</td>

                            <td>{{ guest.guests }}</td>

                            <td>
                                <span :class="reservationClass(guest.reservation)">
                                    {{ guest.reservation }}
                                </span>
                            </td>

                            <td>
                                <span :class="identificationClass(guest.identification)">
                                    {{ guest.identification }}
                                </span>
                            </td>

                            <td>
                                <i class="bi" :class="guest.cform ? 'bi-hand-thumbs-up text-success'
                                    : 'bi-hand-thumbs-down text-danger'">
                                </i>
                            </td>

                            <td>
                                <span :class="guest.regCard ? 'text-success'
                                    : 'text-danger fw-bold'">
                                    {{ guest.regCard ? 'Signed' : 'Not Signed' }}
                                </span>
                            </td>

                            <td>{{ guest.infoFolio }}</td>

                            <td>{{ guest.chargeSlip }}</td>

                            <td>{{ guest.invoices }}</td>

                            <td>
                                <span>
                                    {{ guest.reservation }} / {{ guest.identification }}
                                </span>

                                
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>



</template>
<script setup>
import { ref } from 'vue';
import Navbar from '../navbar/Navbar.vue';
import DocumentProps from '../DocumentProps.vue';

const guests = ref([
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Christiana B...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Booked",
        identification: "Passport",
        cform: true,
        regCard: true,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: true,
        time: "21/02 17:12"
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Ronaldo...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Checked in",
        identification: " Aadhar",
        cform: true,
        regCard: true,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: true,
        time: "21/02 17:12"
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Due in",
        identification: "No identity",
        cform: true,
        regCard: true,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: true,
        time: "21/02 17:12"
    }
])


const reservationClass = (status) => {
    return {
        'text-primary': status === 'Booked',
        'text-success': status === 'Checked in',
        'text-warning': status === 'Due in',
        'text-danger': status === 'Checked out'
    }
}
const identificationClass = (type) => {
    return {
        'text-success': type === 'Passport',
        'text-danger': type === 'Aadhar',
        'text-warning': type === 'No identity'
    }
}
</script>


<style>
.bgclr {
    background-color: var(--bg-clr);
}
</style> -->

<template>
    <Navbar />
    <div class="bgclr">
        <DocumentProps name="Documents" />
        <div class="">
            <div class="table-responsive">
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i class="ri-arrow-down-s-line"></i></th>
                            <th>Confirmation</th>
                            <th>CRS ID</th>
                            <th>Guest Name</th>
                            <th>Stay Period</th>
                            <th>Room</th>
                            <th>Guests</th>
                            <th>Reservation</th>
                            <th>Identification</th>
                            <th>C-Form</th>
                            <th>Reg Card</th>
                            <th>Info Folio</th>
                            <th>Charge Slip</th>
                            <th>Invoices</th>
                            <th>DM Verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(guest, index) in guests" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td></td>
                            <td class="fw-bold">
                                {{ guest.confirmation }}
                            </td>
                            <td>{{ guest.crs }}</td>
                            <td>{{ guest.name }}</td>
                            <td>{{ guest.period }}</td>
                            <td>{{ guest.room }}</td>
                            <td>{{ guest.guests }}</td>
                            <td>
                                <span>
                                    {{ guest.reservation }}
                                </span>
                            </td>
                            <td>
                                <span>
                                    {{ guest.identification }}
                                </span>
                            </td>

                            <td>
                                {{ guest.cform }}
                            </td>

                            <td>
                                <span >
                                    {{ guest.regCard ? 'Signed' : 'Not Signed' }}
                                </span>
                            </td>

                            <td>{{ guest.infoFolio }}</td>
                            <td>{{ guest.chargeSlip }}</td>
                            <td>{{ guest.invoices }}</td>

                            <td>
                                <span>
                                    <span v-if="guest.verified == true">hi</span>
                                    <span v-else></span>
                                    {{ guest.time }}
                                </span>
                            </td>

                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../navbar/Navbar.vue'
import DocumentProps from '../DocumentProps.vue'

const guests = ref([
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Christiana B...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Booked",
        identification: "Passport",
        cform: true,
        regCard: true,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: true,
        time: "21/02 17:12"
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Ronaldo...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Checked in",
        identification: "Aadhar",
        cform: true,
        regCard: true,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: true,
        time: "21/02 17:12"
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi...",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Due in",
        identification: "No identity",
        cform: true,
        regCard: false,
        infoFolio: 3,
        chargeSlip: 3,
        invoices: 3,
        verified: false,
        time: "21/02 17:12"
    }
])
</script>

<style>
.bgclr {
    background-color: var(--bg-clr);
}
</style>