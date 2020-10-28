<template>
    <div>
      <h1>input事件的使用</h1>
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user-solid" clearable v-model="username" @clean @input="changeName" :maxlength="4" show-word-limit :minlength="2"></el-input>
      <el-input v-model="pwd" show-password suffix-icon="el-icon-s-opportunity"placeholder="请输入密码"></el-input>

<!--
方法：
    在使用组件方法的时候，在对应的组件中加入ref="组件别名"
    在调用方法使用  this.$refs.组件别名.方法名();
    方法：focus 聚焦  ，blur 失去焦点 ， select  选择全部
事件：
    @事件名=vue中的事件处理函数
属性：
    属性名=属性值
-->

      <h1>input方法的使用</h1>
      <el-input v-model="username" ref="inputs"></el-input>
      <el-button @click="focusInputs">focus方法</el-button>
      <el-button @click="selectInputs">selsect方法</el-button>
      <el-button @click="blurInputs">blur失去焦点</el-button>
    </div>



</template>

<script>
    export default {
        name: "Form",
        data(){
            return{
                username:'',
                pwd:'',
            }
        },
        methods:{
            focusInputs(){
                console.log("focus方法调用");
                this.$refs.inputs.focus();
            },
            selectInputs(){
                console.log("selsec方法");
                this.$refs.inputs.select();
            },
            blurInputs(){
                console.log("失去焦点");
                this.$refs.inputs.blur();
            },
            changeName(value){
                console.log(value);
            }
        }
    }
</script>

<style scoped>
  .el-input{
    margin-top: 30px;
  }
  .el-button{
    margin-top: 30px;
  }
</style>
