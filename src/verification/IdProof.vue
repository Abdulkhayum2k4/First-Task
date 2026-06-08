<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="white position-relative">
        <ProofCards class="cards" />
        <div>
          <button class="btn btn-danger position-absolute">Actions</button>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import ProofHeader from "@/components/proof/ProofHeader.vue";
import Layout from "./Layout.vue";
import Sidebar from "./Sidebar.vue";
import ProofCards from "@/components/proof/ProofCards.vue";
</script>

<style scoped>
.white {
  background-color: white;
  height: 83vh;
  border-radius: 10px;
}
.btn{
  top: 90%;
  left: 90%;
}
</style>
