<template>
  <section class="body">
  <div>
    <el-row>
      <el-col :span="4" :offset="16" class="bg">
        <span class="num_tip">第一周</span>
      </el-col>
    </el-row>
    <el-row class="d">
      <el-col :span="16" :offset="4" class="beijing"></el-col>
    </el-row>
    <el-row class="b">
      <el-col :span="6" :offset="9" class="start"></el-col>
    </el-row>
  </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {

        }
      },
      methods:{
      jump(){
        this.$router.push({path:'/page'})
      }
      }


  }
</script>


<style scoped>
.bg{
  height: 160px;
  width: 70px;
  background-image: url("../assets/WechatIMG2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
  .num_tip{
    position: absolute;
    margin-top: 119px;
    margin-left: 12px;
  }
  .beijing{
    position: absolute;
    padding-top: 66%;
    background: url("../assets/1-2.png") no-repeat;
    background-size: 100% 100%;
  }
  .d{
    margin-top: -40px;
  }
  .start{
    padding-top: 15%;
    position: absolute;
    background: url("../assets/1-4.png") no-repeat;
    background-size: 100% 100%;
  }
  .b{
    margin-top: 240px;
  }
  .body{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/1-1.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>
