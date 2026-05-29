<template>
  <div class="d-flex justify-content-between px-3 py-1">
    <div class="d-flex gap-4">
      <i class="ri-arrow-left-line fs-5 align-self-center"></i>
      <div>
        <h4 class="m-0">Glenn Maxwell</h4>
        <p class="conf m-0">Conf. : 21546123546</p>
      </div>
      <div class="pending d-flex rounded rounded-5 px-3 py-1 align-self-center ms-2">
        <i class="ri-circle-fill pe-1"></i>
        <p class="m-0 fw-medium">Checked-in</p>
      </div>
      <div class="d-flex verified align-self-center" >
        <i class="ri-check-line"></i>
        <p class="fw-bold m-0">DM Verified</p>
      </div>
    </div>
    <button class="btn btn-outline-dark align-self-center me-2">View guest details</button>
  </div>
</template>

<style scoped>
.conf {
  color: var(--primary-green);
}
.pending {
  background-color: #cfeecb;
  color: #25b700;
}
.verified {
  color: #25b700;
}
h4{
  font-size: 15px;
}
</style>
