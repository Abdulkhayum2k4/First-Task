<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="pt-2 container-fluid">
    <div class="d-flex justify-content-between">
      <div class="">
        <div class="pt-1">
          <p style="color: var(--dark-blue)" class="fw-semibold">
            {{ name }}
          </p>
        </div>
      </div>
      <div class="d-flex gap-2">
        <div class="d-flex gap-2 px-2 pt-2 redclr fw-semibold">
          <a href="" class="redclr text-decoration-none">
            <i class="ri-restart-line fw-light pe-1"></i>
            <span class="fw-bold">Refresh</span>
          </a>
        </div>
        <div
          class="d-flex bg-white gap-4 px-2 align-items-center align-self-center justify-content-center border border-secondary rounded rounded-1"
        >
          <span>Past 7 days</span>
          <i class="ri-calendar-event-line"></i>
        </div>

        <div
          class="d-flex bg-white gap-4 px-2 align-items-center align-self-center justify-content-center border border-secondary rounded rounded-1"
        >
          <span>Manage</span>
          <i class="ri-kanban-view-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.redclr {
  color: var(--primary-red);
}
</style>
