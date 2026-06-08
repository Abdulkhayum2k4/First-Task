<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <Folios />
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import Folios from "../components/proof/Folios.vue";
</script>
