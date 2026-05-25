<template>
    <div class="vh-100 bgclr">


        <Navbar />
        <div class="">
            <DocumentProps name="Documents" />
            <div class="">
                <div class="table-responsive container-fluid ">
                    <table class="table table-striped table-bordered ">
                        <thead>
                            <tr style="font-size: 13px;">
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
                        <tbody style="font-size: 13px; font-weight: 500;">
                            <tr>
                                <td></td>
                                <td></td>
                                <td class="">
                                    <SearchInput />
                                </td>
                                <td class="lesswidth">
                                    <SearchInput />
                                </td>
                                <td>
                                    <SearchInput />
                                </td>
                                <td>
                                    <DatePicker />
                                </td>
                                <td>
                                    <AllDropdown />
                                </td>
                                <td></td>
                                <td>
                                    <AllDropdown />
                                </td>
                                <td>
                                    <AllDropdown />
                                </td>
                                <td></td>
                                <td>
                                    <AllDropdown />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <AllDropdown />
                                </td>
                            </tr>
                            <tr v-for="(guest, index) in guests" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td> 
                                    <input type="checkbox">
                                </td>
                                <td class="fw-semibold">
                                    {{ guest.confirmation }}
                                </td>
                                <td>{{ guest.crs }}</td>
                                <td>{{ guest.name }}
                                    <span v-if="guest.regCard == true">
                                        <img :src="plane" alt="">
                                    </span>
                                </td>
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
                                    <span v-if="guest.cform === true" style="color: #17C400;font-size: 15px;">
                                        <i class="ri-thumb-up-line"></i>
                                    </span>
                                    <span v-else style="color: #FF0000; font-size: 15px;">
                                        <i class="ri-thumb-down-line"></i>
                                    </span>
                                </td>

                                <td>
                                    <span>
                                        <span v-if="guest.regCard == true" style="color: #17C400;">
                                            Signed
                                        </span>
                                        <span v-else style="color: #FF0000;">
                                            Not Signed
                                        </span>
                                        <!-- {{ guest.regCard ? 'Signed' : 'Not Signed' }} -->
                                    </span>
                                </td>

                                <td>{{ guest.infoFolio }}</td>
                                <td>{{ guest.chargeSlip }}</td>
                                <td>{{ guest.invoices }}</td>

                                <td>
                                    <span>
                                        <span v-if="guest.verified == true">
                                            <img :src="correct" alt="">
                                        </span>
                                        <span v-else>
                                            <img :src="wrong" alt="">
                                        </span>
                                        {{ guest.time }}
                                    </span>
                                </td>

                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    </div>
    <div class="three_icons position-relative">
        <ThreeIcons class="dots position-absolute bottom-0 end-0 pe-3 pb-3" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../navbar/Navbar.vue'
import DatePicker from '../dropdowns/DatePicker.vue'
import DocumentProps from '../DocumentProps.vue'
import correct from '../../assets/correct.png'
import wrong from '../../assets/wrong.png'
import plane from '../../assets/plane.png'
import AllDropdown from '../dropdowns/AllDropdown.vue'
import SearchInput from '../dropdowns/searchInput.vue'
import ThreeIcons from '../threeIcons/ThreeIcons.vue'

const guests = ref([
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Christian",
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
        name: "Ronaldo",
        period: "21/02/25",
        room: 475,
        guests: 1,
        reservation: "Checked in",
        identification: "Aadhar",
        cform: false,
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
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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
    },
    {
        confirmation: "8494797002",
        crs: "....F121896876",
        name: "Messi",
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

.lesswidth {
    width: 100px;
}
</style>