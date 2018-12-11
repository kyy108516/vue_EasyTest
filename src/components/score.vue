<template>
    <body>
    <el-row>
      <el-col :span="18" :offset="3" class="score">
        <div class="ziti">{{score}}</div>
      </el-col>
    </el-row>
    </body>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "score",
      data(){
          return{
            score:0,
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
          }
      },
      computed: mapState([
        'answerid'
      ]),
      created(){
        this.computeScore();
      },
      methods:{
          computeScore(){
            this.answerid.forEach((item,index)=>{
              if (item == this.rightAnswer[index]){
                this.score += 20;
              }
            })
          }
      }
    }
</script>

<style scoped>
body{
  background-image: url("../assets/4-1.jpg");
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;

}
  .score{
    background-image: url("../assets/4-2.png");
    background-repeat: no-repeat;
    position: absolute;
    padding-top: 50%;
    background-size: 100% 100%;
    margin-left: 40px;
    margin-top: 50%;
  }
  .ziti{
    font-size: 100px;
    margin-top: -70px;
    margin-left: 95px;
  }
</style>
