<template>
  <div class="sidebar">
    <div class="content">
      <p>Push to <br />tab</p>
      <p>Scan ID</p>
      <p>Make payment</p>
      <p>Add <br />Sign</p>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 77px;
  height: 300px;
  background-color: #d9d9d9;
  transform: skewY(25deg);
  padding: 1px 0px;
}

.content {
  transform: skewY(-25deg);
  text-align: center;
}

p {
  margin: 35px auto;
  color: black;
  line-height: 1.1;
  font-size: 15px;
}
</style>
