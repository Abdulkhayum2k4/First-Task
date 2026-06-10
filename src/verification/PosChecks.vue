<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="content_grid">
        <div class="col_small">
          <DummyThree />
        </div>
        <div class="col_medium">
          <DummyTwo />
        </div>
        <div class="col_large">
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

<style scoped>
.content_grid {
  display: flex;
  width: 100%;
  height: 83vh;
}

.col_small {
  flex: 2;
}

.col_medium {
  flex: 5;
}

.col_large {
  flex: 5;
}
</style>