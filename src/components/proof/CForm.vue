<script setup>
defineEmits(["close"]);
</script>

<template>
  <div class="overlay">
    <div class="custom-modal">
      <!-- Header -->
      <div
        class="modal-header-custom d-flex justify-content-between align-items-center px-3 py-2"
      >
        <div class="d-flex align-items-center gap-2">
          <p class="m-0 fw-semibold">C-Form</p>
          <button class="inDraft">In Draft</button>
        </div>
        <button class="border-0 bg-transparent fs-5" @click="$emit('close')">
          ✕
        </button>
      </div>

      <div class="modal-body-custom">
        <p class="section-label px-3 py-2 m-0 mt-2">Personal Details</p>

        <div class="p-3">
          <div class="row g-3">
            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Full Name</span>
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Gender</span>
                <select class="form-select border-0">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Date of birth</span>
                <input type="date" class="form-control border-0" />
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Age</span>
                <input
                  type="number"
                  class="form-control border-0"
                  placeholder="Age"
                />
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Visitor Category</span>
                <select class="form-select border-0">
                  <option>Select</option>
                  <option>Official Exempted</option>
                  <option>Tourist</option>
                  <option>Business</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Nationality</span>
                <select class="form-select border-0">
                  <option>Select</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Email</span>
                <input
                  type="email"
                  class="form-control border-0"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Address in India Section -->
        <p class="section-label px-3 py-2 m-0">Address in India</p>

        <div class="p-3">
          <div class="row g-3">
            <div class="col-12">
              <div class="custom-field">
                <span class="field-label">Permanent Address</span>
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Enter address"
                />
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">Pin Code</span>
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Enter pin code"
                />
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">City</span>
                <select class="form-select border-0">
                  <option>Select</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <div class="custom-field">
                <span class="field-label">State</span>
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Enter state"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="modal-footer-custom px-3 py-2">
        <p class="mb-0 fw-semibold" style="color: var(--primary-red)">
          Missing 4 details
        </p>
        <button class="btn btn-danger px-4">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inDraft{
  background-color: var(--light-gray);
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  z-index: 9999;
}

.custom-modal {
  width: 42%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header-custom {
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
}

.modal-body-custom {
  flex: 1;
  overflow: hidden;
}

.section-label {
  background-color: #f1f1f1;
  font-weight: 600;
  font-size: 14px;
  color: #444;
}

.custom-field {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 12px;
  background: white;
}

.field-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #777;
  margin-bottom: 2px;
}

.custom-field input,
.custom-field select {
  width: 100%;
  padding: 0;
  font-size: 15px;
  font-weight: 500;
  box-shadow: none !important;
  background: transparent;
  appearance: auto;
  border: none;
  outline: none;
}

.modal-footer-custom {
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
}

</style>
