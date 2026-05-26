<template>
  <div class="overlay">

    <!-- Modal -->
    <div class="custom-modal">

      <!-- Header -->
      <div class="modal-header-custom">
        <div>
          <h4 class="mb-0">Long Aadhar ID</h4>
          <small class="text-muted">Main Guest</small>
        </div>

        <button
          class="close-btn"
          @click="$emit('close')"
        >
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="modal-body-custom row g-0">

        <!-- LEFT SIDE -->
        <div class="col-lg-6 border-end">

          <div class="left-container">

            <h5 class="mb-3">Long Aadhar ID</h5>

            <div class="upload-box">

              <img
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                width="120"
              />

              <p class="text-center mt-3">
                Scan or upload visa documents
                <br />
                for guest to check in
              </p>

              <button class="btn btn-danger px-4 mt-2">
                Scan
              </button>

              <p class="mt-4 mb-2">(or)</p>

              <a href="#" class="upload-link">
                Upload
              </a>

            </div>

          </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="col-lg-6">

          <div class="right-container">

            <div class="d-flex justify-content-between mb-4">
              <h5>Aadhar Details</h5>

              <p class="text-danger mb-0">
                Missing fields
              </p>
            </div>

            <div class="row g-3">

              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Visa number"
                />
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Visa type</option>
                </select>
              </div>

              <div class="col-md-6">
                <input
                  type="date"
                  class="form-control"
                />
              </div>

              <div class="col-md-6">
                <input
                  type="date"
                  class="form-control"
                />
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Place of issue (Country)</option>
                </select>
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Place of issue (State)</option>
                </select>
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Arrival from country</option>
                </select>
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Arrival from city</option>
                </select>
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Next Destination</option>
                </select>
              </div>

              <div class="col-md-6">
                <select class="form-select">
                  <option>Purpose of visit</option>
                </select>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Footer -->
      <div class="modal-footer-custom">

        <p class="mb-0 text-muted">
          No document attached
        </p>

        <button class="btn btn-danger">
          Save Details
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>

.overlay {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.custom-modal {
  width: 90%;
  height: 100vh;

  background: white;


  overflow: hidden;

  display: flex;
  flex-direction: column;
}

/* HEADER */

.modal-header-custom {
  padding: 15px 20px;

  border-bottom: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  width: 35px;
  height: 35px;

  border: none;

  background: #ff5a5a;
  color: white;

  border-radius: 6px;

  font-size: 18px;
}

/* BODY */

.modal-body-custom {
  flex: 1;

  overflow-y: auto;
}

/* LEFT */

.left-container {
  padding: 20px;
}

.upload-box {
  height: 75vh;

  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* RIGHT */

.right-container {
  padding: 20px;
}

/* FOOTER */

.modal-footer-custom {
  border-top: 1px solid #ddd;

  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* INPUTS */

.form-control,
.form-select {
  height: 50px;
}

.upload-link {
  color: black;
  font-weight: 600;
}

/* RESPONSIVE */

@media (max-width: 992px) {

  .custom-modal {
    width: 95%;
    height: 95vh;
  }

  .upload-box {
    height: 300px;
  }

}

</style>