<template>
    <div>
      <el-tag id="news" style="margin: 10px;" v-for="i in datas" @mouseover.native="showContent(i)">{{i}}</el-tag>
      <div>
        <el-row style="margin-left: 120px;margin-top: 40px;">
          {{name}}
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "test02",
        data(){
            return{
                datas:["国际新闻","国内新闻","江西新闻","井冈山大学"],
                name:"",
            }
        },
        methods:{
            showContent(i){
                console.log(i);
                this.name=i;
                var t =document.getElementById("news");
                console.log(t);
               // t.innerText=i;
                t.setAttribute("style","margin: 10px; color: #ff4d51");
            },

        }
    }
</script>

<style>

</style>
