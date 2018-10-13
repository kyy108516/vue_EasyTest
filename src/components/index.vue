<template>
  <div class="bg">
    <img src="../assets/1-1.jpg" style="width:100%;height: 100%">
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        note: {
          backgroundImage:"url("+require("../assets/1-1.jpg")+")"
        }
      }
    }
  }
</script>


<style scoped>
.bg{
  position: absolute;
  background: center no-repeat;
  background-size: 100% 100%;
}
</style>
