<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="payments_grid">
        <div class="payment_item"><PaymentsDummy /></div>
        <div class="payment_item"><AdvanceDummy /></div>
        <div class="payment_item"><PaymentDetailsDummy /></div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import AdvanceDummy from "@/components/proof/AdvanceDummy.vue";
import PaymentDetailsDummy from "@/components/proof/PaymentDetailsDummy.vue";
import PaymentsDummy from "@/components/proof/PaymentsDummy.vue";
</script>

<style scoped>
.payments_grid {
  display: flex;
  gap: 0.5rem;
  height: 100%;
  align-items: stretch;
}

.payment_item {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
</style>
