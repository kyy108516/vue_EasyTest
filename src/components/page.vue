<template>
  <section class="body">
  <div>
    <el-row>
      <el-col :span="4" :offset="16" class="bg">
        <span class="num_tip">第{{itemNum}}题</span>
      </el-col>
    </el-row>
    <el-row class="ti_beijing">
      <el-col class="biaoti">{{itemDetail[itemNum-1].topic_name}}</el-col>
      <ul>
        <li v-for="item in itemDetail[itemNum-1].topic_answer">
          <span>{{item.topic_answer_id}}</span>
          <span>{{item.answer_name}}</span>
        </li>
      </ul>
    </el-row>
    <el-row style="margin-top: 240px">
      <el-col :span="6" :offset="9">
        <el-button v-on:click="jump" class="start"></el-button>
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
    margin-left: 16px;
    color: black;
  }
  .body{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/1-1.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .ti_beijing{
    background: url("../assets/2-1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    height: 250px;
    color: white;
    width: 80%;
    margin-left: 10%;

  }
  ul{
    margin-top: 60px;
    margin-left: 20px;
  }
  li{
    list-style: none;
    margin-top: 10px;
  }
  span{
    color: white;
  }
  .biaoti{
    position: absolute;
    margin-left: 60px;
    margin-top: 30px;
  }
  .start{
    width: 25%;
    padding-top: 10%;
    position: absolute;
    background: url("../assets/2-2.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
