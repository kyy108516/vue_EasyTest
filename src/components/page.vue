<template>
  <section class="body">
  <div>
    <el-row>
      <el-col :span="4" :offset="16" class="bg">
        <span class="num_tip">{{level}}</span>
      </el-col>
    </el-row>
  </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "page",
      data(){
          return{
            msg:"page"
          }
      },
      computed:mapState([
        'itemNum',
        'itemDetail'
      ])
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
  .body{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/1-1.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>
