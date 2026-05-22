<template>
  <div class="navbarr">
    <nav class="bg-dark navbarr d-flex flex-column justify-content-center">
      <ul class="d-flex list-unstyled correctgap m-0 text-white">
        <li><img :src="logo" alt="" class="ps-3"></li>
        <li class=" fw-semibold res">Reservations</li>
        <li>Pre check ins</li>
        <li>Approvals</li>
        <li>Promotions</li>
        <li>Reports</li>
        <li>Uploads</li>
        <li>Supporting docs</li>
        <li>Logs</li>
        <li>Settings</li>
      </ul>
    </nav>
  </div>
  <div class="bgclr vh-100 pt-2 container-fluid">
    <div class="d-flex justify-content-between ">

      <div class="">
        <div class="pt-1">
          <p style="color: #183153;" class="fw-semibold">Document Approval</p>
        </div>
      </div>
      <div class="d-flex gap-2">
        <div class="d-flex gap-2 px-2 pt-2 redclr fw-semibold" >
          <i class="ri-restart-line"></i>
          <span>Refresh</span>
        </div>
        <div class="d-flex bg-white gap-4 px-2 align-items-center align-self-center justify-content-center border border-secondary rounded rounded-1">
          <span>Past 7 days</span>
          <!-- <i class="ri-calendar-line"></i> -->
          <i class="ri-calendar-event-line"></i>
        </div>

        <div class="d-flex bg-white gap-4 px-2 align-items-center align-self-center justify-content-center border border-secondary rounded rounded-1">
          <span>Manage</span>
          <i class="ri-kanban-view-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import logo from '../assets/logo.png'
import calender from '../assets/calender.png'
</script>

<style scoped>
.navbarr {
  height: 46px;
  font-size: 15px;
}

.res {
  margin-bottom: -8px;
  border-bottom: 4px solid #fe5358;
}

.bgclr {
  background-color: #eceff6;
}
.redclr{
  color: var(--primary-red);
}
.correctgap{
  gap:35px;
}
</style>
