<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <ProofCards />
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import ProofCards from "@/components/proof/ProofCards.vue";
</script>
