<script setup>
import user from "../../assets/user.png";
import printer from "../../assets/printer.png";
</script>

<template>
  <div class="overlay">
    <div class="custom-modal">
      <!-- Header -->
      <div class="modal-header-custom d-flex justify-content-between p-0">
        <div class="d-flex">
          <div class="d-flex w-100">
            <img :src="user" class="w-25 h-50 align-self-center mx-3" />
            <div class="glenn">
              <p class="fw-bold m-0">Glenn Maxwell</p>
              <p class="m-0 main">Main Guest</p>
            </div>
          </div>
          <div class="align-self-center">
            <select class="long">
              <option value="">Long Aadhar ID</option>
              <option value="">Short Aadhar ID</option>
              <option value="">Driving License</option>
              <option value="">Voter ID</option>
              <option value="">Passport</option>
            </select>
          </div>
        </div>
        <button class="close-btn me-3" @click="$emit('close')">✕</button>
      </div>
      <!-- Body -->
      <div class="modal-body-custom row g-0 overflow-hidden">
        <!-- LEFT SIDE -->
        <div class="col-lg-6 border-end">
          <div class="left-container">
            <h5 class="mb-3">Long Aadhar ID</h5>
            <div class="upload-box">
              <img :src="printer" width="120" />
              <p class="text-center mt-3">
                Scan or upload visa documents
                <br />
                for guest to check in
              </p>
              <button class="btn btn-danger px-4 mt-2">Scan</button>
              <p class="mt-4 mb-2">(or)</p>
              <a href="#" class="upload-link">Upload</a>
            </div>
          </div>
        </div>
        <!-- RIGHT SIDE -->
        <div class="col-lg-6">
          <div
            class="right-container d-flex flex-column justify-content-between h-100"
          >
            <div class="p-4">
              <div class="d-flex justify-content-between mb-4">
                <h5>Aadhar Details</h5>
                <div class="d-flex align-items-center gap-2">
                  <input type="checkbox" class="check" />
                  <p class="text-danger mb-0">Missing fields</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-md-6 custom-field">
                  <span class="field-label">Visa number</span>
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Enter"
                  />
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label"> Visa type </span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label">Date of issue</span>
                    <input type="date" class="form-control border-0" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label">Valid date</span>
                    <input type="date" class="form-control border-0" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label">Place of issue (Country)</span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label"> Place of issue (State) </span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label">Arrival from country</span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label"> Arrival from city </span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label">Next destination</span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="custom-field">
                    <span class="field-label"> Purpose of visit </span>
                    <select class="form-select border-0">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer-custom w-100 p-0">
              <p class="mb-0 text-muted p-3 ms-2">No document attached</p>
              <button class="btn btn-danger m-1 me-4">Save Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.long {
  border: none;
  border-bottom: 2px black solid;
  background-color: #f1f1f1;
  padding: 5px;
}
.main {
  color: var(--primary-blue);
}
.custom-field {
  border: 1px solid #ddd;
  border-radius: 6px;

  padding: 8px 12px;

  background: white;
}

.field-label {
  display: block;

  font-size: 13px;
  font-weight: 600;

  color: #777;

  margin-bottom: 2px;
}

.custom-field input,
.custom-field select {
  padding: 0;

  font-size: 18px;

  box-shadow: none !important;

  background: transparent;
  appearance: auto;
}

.custom-field input:focus,
.custom-field select:focus {
  outline: none;
}

.check {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid red;
  border-radius: 4px;
  cursor: pointer;
}
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
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* FOOTER */
.modal-footer-custom {
  border-top: 1px solid #ddd;
  /* padding: 15px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.upload-link {
  color: black;
  font-weight: 600;
}
.glenn {
  width: 200px;
}
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
