<template>
  <div class="navbarr">
    <nav class="bg-dark navbarr d-flex flex-column justify-content-center">
      <!-- <ul class="d-flex list-unstyled correctgap m-0 text-white">
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
      </ul> -->


      <ul class="d-flex list-unstyled correctgap m-0 text-white align-items-center">
        <li>
          <img :src="logo" alt="Logo" class="ps-3" />
        </li>

        <li class="fw-semibold res">
          <a href="/reservations" class="navlinks">Reservations</a>
        </li>

        <li>
          <a href="/pre-check-ins" class="navlinks">Pre check ins</a>
        </li>

        <li>
          <a href="/approvals" class="navlinks">Approvals</a>
        </li>

        <li>
          <a href="/promotions" class="navlinks">Promotions</a>
        </li>

        <li>
          <a href="/reports" class="navlinks">Reports</a>
        </li>

        <li>
          <a href="/uploads" class="navlinks">Uploads</a>
        </li>

        <li>
          <a href="/supporting-docs" class="navlinks">Supporting docs</a>
        </li>

        <li>
          <a href="/logs" class="navlinks">Logs</a>
        </li>

        <li>
          <a href="/settings" class="navlinks">Settings</a>
        </li>
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
.navlinks{
  text-decoration: none;
  color: white;
}
.navlinks:hover{
  color:#fe5358;
}
</style>