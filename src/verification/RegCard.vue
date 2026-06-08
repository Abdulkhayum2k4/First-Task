<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="row">
        <div class="col-6">
          <CnfRegCard />
        </div>
        <div class="col-6">
          <RegCardForm />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import CnfRegCard from "@/components/proof/CnfRegCard.vue";
import RegCardForm from "@/components/proof/RegCardForm.vue";
</script>
