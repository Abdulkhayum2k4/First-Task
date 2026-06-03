<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
  <div class="row g-3 p-3 h-100">
    <div class="col-4">
      <PaymentsDummy />
    </div>

    <div class="col-4">
      <AdvanceDummy />
    </div>

    <div class="col-4">
      <PaymentDetailsDummy />
    </div>
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
