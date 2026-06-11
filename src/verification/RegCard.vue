<template>
  <ProofHeader />
  <Layout>
    <template #side_content>
      <Sidebar />
    </template>

    <template #content>
      <div class="cards_container">
        <div class="card_column">
          <NovotelCard />
        </div>
        <div class="card_column">
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
import RegCardForm from "../components/proof/RegCardForm.vue";
import NovotelCard from "../components/proof/NovotelCard.vue";
</script>

<style scoped>
.cards_container {
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 83vh;
  overflow: hidden;
}

.card_column {
  flex: 1;
  min-width: 0;
  background-color: white;
  border-radius: 10px;
  overflow-y: auto;
  height: 100%;
}
</style>