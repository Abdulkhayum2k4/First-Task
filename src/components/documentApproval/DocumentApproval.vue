<template>
  <Navbar />
  <div class="bgclr">
    <DocumentProps name="Document Approval" />

    <Approval />

    <div class="three_icons position-relative">
      <ThreeIcons class="dots position-absolute" />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../navbar/Navbar.vue";
import DocumentProps from "../DocumentProps.vue";
import Approval from "../documentApproval/Approval.vue";
import All from "../dropdowns/AllDropdown.vue";
import searchInput from "../dropdowns/searchInput.vue";
import DatePicker from "../dropdowns/DatePicker.vue";

import ThreeIcons from "../threeIcons/ThreeIcons.vue";
</script>

<style scoped>
.bgclr {
  background-color: var(--bg-clr);
}
.dots {
  left: 92%;
}
</style>
