<template>
  <div class="table-container">
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
            <router-link to="/anuna" class="windows">
              <span>{{ document.Folio }}</span>
            </router-link>
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
            <span v-else style="color: #fe5358">Not Signed</span>
          </td>
          <td>
            <span v-if="document.Payment == 'Paid'" style="color: #17c400"
              >Paid</span
            >
            <span v-else style="color: #fe5358">Not Paid</span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Action Button -->
    <button
      v-if="!isSidebarOpen"
      class="action-btn btn btn-danger"
      @click="toggleSidebar"
    >
      Actions <span><i class="ri-arrow-up-wide-line"></i></span>
    </button>

    <!-- Sidebar with close button -->
    <div v-if="isSidebarOpen" class="sidebar-wrapper">
      <button class="close-btn btn btn-danger" @click="toggleSidebar">
        <i class="ri-arrow-right-wide-line"></i>
      </button>
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import All from "../dropdowns/AllDropdown.vue";
import SearchInput from "../dropdowns/searchInput.vue";
import DatePicker from "../dropdowns/DatePicker.vue";
import plane from "../../assets/plane.png";
import Sidebar from "../dropdowns/Sidebar.vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const Folios = ref([
  {
    Folio: "Folio1",
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
    Folio: "Folio2",
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
    Folio: "Folio3",
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
.table-container {
  position: relative;
}

.action-btn {
  position: fixed;
  right: -38px;
  top: 75%;
  transform: translateY(-50%) rotate(-90deg);
  z-index: 100;
  white-space: nowrap;
}

.sidebar-wrapper {
  position: fixed;
  right: 0;
  top: 75%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 100;
}

.close-btn {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  height: 80px;
  width: 36px;
  padding: 4px;
  border-radius: 6px 0 0 6px;
}

.bgclr {
  background-color: var(--bg-clr);
}

.changebg {
  background-color: #e8e8e8 !important;
}

thead.bg-secondary th {
  background-color: #e8e8e8 !important;
}

.windows {
  color: black;
  text-decoration: none;
}
</style>
