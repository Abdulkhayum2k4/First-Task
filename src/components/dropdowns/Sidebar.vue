<template>
  <div class="sidebar d-flex flex-column align-items-center gap-5 py-5">
    <button class="btn border-0">
      Push to <br />
      tab
    </button>

    <button class="btn border-0">Scan ID</button>

    <button class="btn border-0">
      Make <br />
      payment
    </button>

    <button class="btn border-0">
      Add <br />
      Sign
    </button>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100px;
  height: 100%;
  background-color: #e8e8e8;
  box-shadow: black;

  clip-path: polygon(
     0 0,
    100% 12%,
    100% 88%,
    0 88%
  );
}

.btn {
  background: transparent;
  box-shadow: none;
  font-size: 16px;
}
</style>
