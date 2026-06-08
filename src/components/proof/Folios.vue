<template>
  <table class="table table-bordered table-striped p-3">
    <thead class="bg-secondary">
      <tr style="font-size: 13px" class="bg-secondary">
        <th><span>Folio</span></th>
        <th><span>Windows</span></th>
        <th><span>Guest name</span></th>
        <th><span>Company</span></th>
        <th><span>Stay period</span></th>
        <th><span>Room</span></th>
        <th><span>Guests</span></th>
        <th><span>GSTN</span></th>
        <th><span>Membership</span></th>
        <th><span>Rate()</span></th>
        <th><span>Signature</span></th>
        <th><span>Payment</span></th>
      </tr>
    </thead>
    <tbody style="font-size: 13px; font-weight: 500">
      <tr>
        <td></td>
        <td><All /></td>
        <td><SearchInput /></td>
        <td><SearchInput /></td>
        <td><DatePicker /></td>
        <td><SearchInput /></td>
        <td><All /></td>
        <td><All /></td>
        <td></td>
        <td><All /></td>
        <td><All /></td>
        <td><All /></td>
      </tr>
      <tr v-for="(document, index) in Folios" :key="index">
        <td>
          <span>{{ document.Folio }}</span>
        </td>
        <td>
          <span>{{ document.Windows }}</span>
        </td>
        <td>
          <span>{{ document.Guestname }}</span>
          <span v-if="document.flightname == true">
            <img :src="plane" alt="" />
          </span>
        </td>
        <td>
          <span>{{ document.Company }}</span>
        </td>
        <td>
          <span>{{ document.Stayperiod }}</span>
        </td>
        <td>
          <span>{{ document.Room }}</span>
        </td>
        <td>
          <span>{{ document.Guests }}</span>
        </td>
        <td>
          <span>{{ document.GSTN }}</span>
        </td>
        <td>
          <span>{{ document.Membership }}</span>
        </td>
        <td>
          <span>{{ document.Rate }}</span>
        </td>
        <td>
          <span v-if="document.Signature == 'Signed'" style="color: #17c400"
            >Signed</span
          >
          <span
            v-else="document.Signature == 'Not Signed'"
            style="color: #fe5358"
            >Not Signed</span
          >
        </td>
        <td>
          <span v-if="document.Payment == 'Paid'" style="color: #17c400"
            >Paid</span
          >
          <span v-else="document.Payment == 'Not Paid'" style="color: #fe5358"
            >Not Paid</span
          >
        </td>
      </tr>
    </tbody>
  </table>
  <Sidebar />
</template>

<script setup>
import { ref } from "vue";
import All from "../dropdowns/AllDropdown.vue";
import SearchInput from "../dropdowns/searchInput.vue";
import DatePicker from "../dropdowns/DatePicker.vue";
import plane from "../../assets/plane.png";
import Sidebar from "../dropdowns/Sidebar.vue";
const Folios = ref([
  {
    Folio: "Folio 1",
    Windows: "Windows 1",
    Guestname: "Christiana",
    flightname: true,
    Company: "---",
    Stayperiod: "21/02/25",
    Room: "475",
    Guests: "1",
    GSTN: "ID33GT277GYGY",
    Membership: "2386234765466",
    Rate: "12,288.39",
    Signature: "Signed",
    Payment: "Paid",
  },

  {
    Folio: "Folio 2",
    Windows: "Windows 2",
    Guestname: "Christiana",
    flightname: true,
    Company: "---",
    Stayperiod: "22/02/25",
    Room: "475",
    Guests: "1",
    GSTN: "ID33GT277GYGY",
    Membership: "2388726347663",
    Rate: "12,288.39",
    Signature: "Signed",
    Payment: "Paid",
  },

  {
    Folio: "Folio 3",
    Windows: "Windows 3",
    Guestname: "Messi",
    flightname: false,
    Company: "---",
    Stayperiod: "21/02/25",
    Room: "475",
    Guests: "1",
    GSTN: "ID33GT277GYGY",
    Membership: "30299378271387",
    Rate: "12,288.39",
    Signature: "Not Signed",
    Payment: "Not Paid",
  },
]);
</script>

<style scoped>
.bgclr {
  background-color: var(--bg-clr);
}
.changebg {
  background-color: #e8e8e8 !important;
}
thead.bg-secondary th {
  background-color: #e8e8e8 !important;
}
</style>
