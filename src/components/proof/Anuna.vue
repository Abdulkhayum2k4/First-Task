<template>
  <div class="fcontent">
    <div class="fheader d-flex align-items-center">
      <div class="right-fheader d-flex align-items-center gap-3">
        <img src="../../assets/fwrong.png" alt="" width="25" height="25" />
        <div class="showfolio">Showing 1 / 3 Folio</div>
      </div>
      <div class="middle-fcontent">
        <div class="window">Window</div>
      </div>
      <div class="left-fcontent d-flex">
        <button
          style="
            color: #4fd13e;
            background-color: #d9ffd4;
            border: none;
            border-radius: 20px;
          "
        >
          Signed
        </button>
        <p>paid</p>
      </div>
    </div>
    <div class="gdetails d-flex">
      <div class="gdetails-left">
        <p class="fw-bold">Info Folio 1</p>
        <div class="left-gimg">
          <img src="../../assets/infonovotel.png" alt="" />
        </div>
      </div>
      <div class="gdetails-right d-flex flex-column">
        <div class="top-gdetails">
          <div
            class="card-header bg-secondary d-flex justify-content-between align-items-center"
          >
            <h5 class="mb-0 fw-bold">Guest Details</h5>
            <span>⌃</span>
          </div>
          <div class="card-body">
            <div class="row">
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
          <p class="fw-bold">25 items</p>
        </div>
        <div class="bottom-gdetails">
          <table class="table table-bordered table-striped p-3">
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
                <td><DatePicker /></td>
                <td><SearchInput /></td>
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
</template>
<script setup>
import { ref } from "vue";
import SearchInput from "../dropdowns/searchInput.vue";
import DatePicker from "../dropdowns/DatePicker.vue";

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
    id: "2",
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
