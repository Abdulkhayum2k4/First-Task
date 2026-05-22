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
</template>



<script setup>
import logo from '../assets/logo.png'
</script>

<style>
.navbarr {
  height: 46px;
  font-size: 15px;
}

.res {
  margin-bottom: -8px;
  border-bottom: 4px solid #fe5358;
}
.correctgap{
  gap:35px;
}
</style>