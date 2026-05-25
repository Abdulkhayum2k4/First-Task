<template>
    <Navbar />
    <div class="bgclr">
        <DocumentProps name="Document Approval" />

        <div class="">
            <div class="table-responsive container-fluid">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr style="font-size: 13px;">
                            <th>#</th>
                            <th>
                                    <span>Document Type</span>
                            </th>

                            <th>
                                    <span>Confirmation</span>
                            </th>

                            <th>
                               
                                    <span>Guest name</span>
                              
                            </th>

                            <th>
                                
                                    <span>Stay period</span>
                                
                            </th>

                            <th>
                                
                                    <span>Room</span>
                            
                            </th>

                            <th>
                               
                                    <span>Reservation Status</span>
                         
                            </th>

                            <th>
                                
                                    <span>Raised by</span>
                                
                            </th>

                            <th>Missing details</th>

                            <th>
                                
                                    <span>Approval status</span>
                               
                            </th>

                            <th>
                               
                                    <span>Approved by</span>
                               
                            </th>
                        </tr>
                    </thead>

                    <tbody style="font-size: 13px; font-weight: 500;">
                        <tr v-for="(document, index) in documents" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <span v-if="document.documentType == 'Reg Card'">
                                    <img :src="trueee" alt="">
                                </span>

                                <span v-else-if="document.documentType == 'Required'">
                                  <img :src="warning" alt="">
                                </span>

                                <span v-else style="color: #FF0000;">
                                    <img :src="nooo" alt="">
                                </span>

                                {{ document.documentType }}
                            </td>

                          
                            <td>{{ document.confirmation }}</td>

                            <td>
                                {{ document.guestName }}
                                <span v-if="document.flight == true">
                                    <img :src="plane" alt="">
                                </span>
                            </td>

                            <td>{{ document.stayPeriod }}</td>

                            <td>{{ document.room }}</td>

                            <td>{{ document.reservation }}</td>
                            <td>
                                {{ document.raisedBy }}
                                <span style="font-size: 11px; color: gray;">
                                    {{ document.raisedTime }}
                                </span>
                            </td>

                            <td>
                                <span v-if="document.missingFields">
                                    <span  class="text-decoration-none" style="color: #000080;">
                                        {{ document.missingFields }}
                                    </span>
                                </span>

                                <span v-else>
                                    {{ document.missingDetails }}
                                </span>
                            </td>
                            <td>
                                <span v-if="document.approvalStatus == 'Approved'"
                                    style="color: #17C400;">
                                    Approved
                                </span>

                                <span v-else-if="document.approvalStatus == 'Pending'"
                                    style="color: #C5A100;">
                                    Pending
                                </span>

                                <span v-else>
                                    ---
                                </span>
                            </td>
                            <td>
                                <span v-if="document.approvedBy != '---'">
                                    {{ document.approvedBy }}

                                    <span style="font-size: 11px; color: gray;">
                                        {{ document.approvedTime }}
                                    </span>
                                </span>

                                <span v-else>
                                    ---
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
import Navbar from '../components/navbar/Navbar.vue'
import DocumentProps from '../components/DocumentProps.vue';
import plane from '../assets/plane.png'
import warning from '../assets/warning.png'
import trueee from '../assets/trueee.png'
import nooo from '../assets/nooo.png'

const documents = ref([
    {
        documentType: "Reg Card",
        confirmation: "23874576",
        guestName: "Kiloskar Rawat",
        flight: true,
        stayPeriod: "21/02 12:00 - 23/02 12:00",
        room: 3767,
        reservation: "Booked",
        raisedBy: "Amith Patel",
        raisedTime: "21/02 17:12",
        missingDetails: "Signature",
        missingFields: "",
        approvalStatus: "Approved",
        approvedBy: "Gururadhwar",
        approvedTime: "21/02 17:12"
    },

    {
        documentType: "Required",
        confirmation: "23874576",
        guestName: "Jatakar Yuvraj",
        flight: false,
        stayPeriod: "21/02 12:00",
        room: 3767,
        reservation: "Checked In",
        raisedBy: "---",
        raisedTime: "",
        missingDetails: "---",
        missingFields: "",
        approvalStatus: "---",
        approvedBy: "---",
        approvedTime: ""
    },

    {
        documentType: "Passport",
        confirmation: "23874576",
        guestName: "Kiloskar Rawat",
        flight: false,
        stayPeriod: "21/02 12:00 - 23/02 12:00",
        room: 3767,
        reservation: "Booked",
        raisedBy: "Amith Patel",
        raisedTime: "21/02 17:12",
        missingDetails: "",
        missingFields: "5 fields",
        approvalStatus: "Pending",
        approvedBy: "Gururadhwar",
        approvedTime: "21/02 17:12"
    }
])
</script>

<style>
.bgclr {
    background-color: var(--bg-clr);
}
</style>