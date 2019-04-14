<template>
  <div class="home">
   <p class="myColor">主页</p>
   <div class="testBox"></div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
.myColor {
  color: @testColor;
}
.testBox {
  width: 750px;
  height: 100px;
  background-color: green;
}
</style>
