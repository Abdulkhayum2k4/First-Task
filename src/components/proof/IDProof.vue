<template>
  <div class="container-fluid">
    <div class="row ">
      <div class="col-2 sidebar p-0">
        <div class="pt-3">

          <div v-for="item in menuItems":key="item.name" class="menu-item" :class="{ active: item.active }">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="d-flex align-items-center gap-2">
                <span>{{ item.name }}</span>
                <span v-if="item.alert" >
                    <img :src="warning" alt="">
                </span>
              </div>

              <span v-if="item.completed" class="text-dark">
                <img :src="blacktick" alt="">
              </span>
              <span v-if="item.anywarning">
                <img :src="blackwarning" alt="">
              </span>
            </div>
          </div>

        </div>
      </div>

      <div class="col-10 p-4">
        <!-- Right  -->
        <ProofCards />
      </div>

    </div>
  </div>
</template>

<script setup>
import warning from '../../assets/warning.png'
import blackwarning from '../../assets/blackwarning.png' 
import blacktick from '../../assets/blacktick.png'
import ProofCards from './ProofCards.vue'

const menuItems = [
  {
    name: 'ID Proof',
    active: true,
    alert: true,
    completed: false
  },
  {
    name: 'Reg Card',
    completed: true
  },
  {
    name: 'Folios',
    completed: true
  },
  {
    name: 'Invoices',
    completed: true
  },
  {
    name: 'POS Checks',
    anywarning: true
  },
  {
    name: 'Payments & c...',
    completed: true
  },
  {
    name: 'Other details',
    completed: true
  }
]
</script>

<style scoped>
.sidebar {
  background: #f4f5fa;
}

.menu-item {
  padding: 14px 12px;
  font-size: 18px;
  color: #222;
}

.menu-item.active {
  background: #ffecec;
  color: #ff4d4f;
  border-left: 4px solid #ff4d4f;
  font-weight: 600;
}

.menu-item:hover {
  background: #f0f0f0;
}
</style>
