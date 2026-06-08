<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="row">
        <div class="col-2">
          <DummyThree />
        </div>
        <div class="col-5">
          <DummyTwo />
        </div>
        <div class="col-5">
          <Dummy />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import DummyThree from "@/components/proof/DummyThree.vue";
import DummyTwo from "@/components/proof/DummyTwo.vue";
import Dummy from "@/components/proof/Dummy.vue";
</script>
