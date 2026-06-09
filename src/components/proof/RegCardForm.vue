<template>
  <div class="reg-card">
    <div
      class="d-flex justify-content-between align-items-center px-3 py-2 border-bottom"
    >
      <h6 class="m-0 fw-bold">Reg Card - CNF 13134553</h6>

      <div class="d-flex align-items-center gap-2">
        <span class="missing fw-semibold" style="font-size: 13px">
          <i class="ri-error-warning-line"></i> 5 details missing
        </span>
        <span class="verified fw-semibold" style="font-size: 13px">
          <i class="ri-check-line"></i> Verified
        </span>
      </div>
    </div>

    <div
      class="border-bottom d-flex justify-content-between px-3 py-2"
      style="background-color: #f3f3f3"
    >
      <div>
        <span class="me-2">Guest</span
        ><span class="me-5 verified"
          ><i class="ri-thumb-up-line"></i> Signed</span
        >
      </div>
      <div>
        <span class="me-2">Front Desk</span
        ><span class="signed"
          ><i class="ri-thumb-down-line"></i> Not Signed</span
        >
      </div>
      <div>
        <span class="me-2">Duty Manager</span
        ><span class="signed"
          ><i class="ri-thumb-down-line"></i> Not Signed</span
        >
      </div>
    </div>

    <div class="card-body-scroll">
      <div class="section-block">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="section-title">Guest Details</span>
          <span style="font-size: 13px" class="fw-bold">Adult 1, Child 0</span>
        </div>
        <div class="guest_grid">
          <!-- Left column -->
          <div class="guest_left">
            <div class="info-box mb-2">
              <span class="info-label">Name</span>
              <input type="text" class="info-input" placeholder="Enter name" />
            </div>
            <div class="info-box mb-2">
              <span class="info-label">Phone</span>
              <input type="text" class="info-input" placeholder="Enter phone" />
            </div>
            <div class="info-box">
              <span class="info-label">Email</span>
              <input
                type="email"
                class="info-input"
                placeholder="Enter email"
              />
            </div>
          </div>

          <!-- Right column -->
          <div class="guest_right">
            <div class="info-box mb-2">
              <span class="info-label">Address</span>
              <textarea
                class="info-input"
                placeholder="Enter address"
                rows="4"
              />
            </div>
            <div class="info-box">
              <span class="info-label">Passport</span>
              <input
                type="text"
                class="info-input"
                placeholder="Enter passport number"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section-block">
        <span class="section-title d-block mb-2">Stay Details</span>
        <div class="row g-2">
          <div class="col-6">
            <div class="info-box">
              <div class="d-flex justify-content-between">
                <span class="info-label">Room</span>
                <span class="info-label">Rate (₹)</span>
              </div>
              <div class="d-flex justify-content-between">
                <input
                  type="text"
                  class="info-input"
                  placeholder="Room number"
                  style="width: 48%"
                />
                <input
                  type="text"
                  class="info-input"
                  placeholder="0.00"
                  style="width: 48%"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="info-box">
              <span class="info-label">Stay Period</span>
              <input
                type="text"
                class="info-input"
                placeholder="dd/mm/yyyy - dd/mm/yyyy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-block">
        <span class="section-title d-block mb-2">Payment Details</span>
        <div class="row g-2">
          <div class="col-6">
            <div class="info-box">
              <div class="d-flex justify-content-between">
                <span class="info-label">Card Type</span>
                <span class="info-label">XX/XX</span>
              </div>
              <div class="d-flex justify-content-between">
                <input
                  type="number"
                  class="info-input"
                  placeholder="XXXXXXXXXXX 0000"
                  style="width: 48%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-block">
        <span class="section-title d-block mb-2">OTA Details</span>
        <div class="row g-2">
          <div class="col-6">
            <div class="info-box">
              <span class="info-label">OTA Name</span>
              <input
                type="text"
                class="info-input"
                placeholder="Enter booking ID"
              />
            </div>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <button class="btn btn-danger px-4 align-self-center">Actions</button>
          </div>
        </div>
      </div>

      <div class="section-block">
        <span class="section-title d-block mb-2">Membership Details</span>
        <div class="row g-2">
          <div class="col-6">
            <div class="info-box">
              <span class="info-label">Gold Membership</span>
              <input
                type="text"
                class="info-input"
                placeholder="Enter membership ID"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="info-box">
              <span class="info-label">VIP Code</span>
              <input
                type="text"
                class="info-input"
                placeholder="Enter VIP code"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="info-box">
              <span class="info-label">Wake up call</span>
              <input type="datetime-local" class="info-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.missing {
  color: var(--primary-orange);
}

.verified {
  color: var(--primary-green);
}

.signed {
  color: var(--primary-red);
}

.reg-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
}

.card-body-scroll {
  overflow-y: auto;
  flex: 1;
}

.section-block {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #a1a1a1;
}

.info-box {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 4px 10px;
  background: #fff;
}

.info-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 4px;
}

.info-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  color: #222;
  background: transparent;
  padding: 0;
}

.info-input::placeholder {
  color: #bbb;
  font-weight: 400;
}

.guest_grid {
  display: flex;
  gap: 8px;
}

.guest_left {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.guest_right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

textarea.info-input {
  resize: none;
  font-family: inherit;
}
</style>
