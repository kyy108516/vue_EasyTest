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
        <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index,item.topic_answer_id)">
          <span v-bind:class="{'has_choosed':choosedIndex===index}">{{chooseType(index)}}</span>
          <span>{{item.answer_name}}</span>
        </li>
      </ul>
    </el-row>
    <el-row style="margin-top: 240px">
      <el-col :span="6" :offset="9">
        <el-button v-on:click="nextItem" class="start1" v-if="itemNum<itemDetail.length"></el-button>
        <el-button v-on:click="submitAnswer" class="start2" v-else></el-button>
      </el-col>
    </el-row>
  </div>
  </section>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
    export default {
        name: "page",
      data(){
          return{
            choosedIndex:null,//选中答案下标
            choosedID:null,//选中答案id
          }
      },
      computed:mapState([
        'itemNum',
        'itemDetail'
      ]),
      methods:{
          ...mapActions([
            'addNum'
          ]),
          choosed(index,id){
            this.choosedIndex=index;
            this.choosedID=id;
          },
        chooseType(type){
            switch (type) {
              case 0:return 'A';
              case 1:return 'B';
              case 2:return 'C';
              case 3:return 'D';
            }
        },
          nextItem(){
            if (this.choosedIndex != null) {
              this.choosedIndex=null;
              this.addNum(this.choosedID)
            }else {
              window.alert("您还没有选择答案")
            }
          },
          submitAnswer(){
            if (this.choosedIndex!=null){
              this.$router.push('score')
            }
            else {
              window.alert("你还没有选择答案")
            }
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
  .start1{
    width: 25%;
    padding-top: 10%;
    position: absolute;
    background: url("../assets/2-2.png") no-repeat;
    background-size: 100% 100%;
  }
  .start2{
    width: 25%;
    padding-top: 10%;
    position: absolute;
    background: url("../assets/3-1.png") no-repeat;
    background-size: 100% 100%;
  }
  .has_choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
</style>
