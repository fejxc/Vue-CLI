<template>
    <div>
      <el-alert title="添加成功" type="success" :show-icon="true" effect="light">
       <!--  插槽提示信息   -->
        <div slot>我是辅助信息</div>
      </el-alert>
      <el-alert title="添加成功" type="info" description="我是提示信息"></el-alert>
      <el-alert title="添加成功" type="warning" :closable="false"></el-alert>
      <el-alert title="添加成功" type="error" center close-text="关闭"></el-alert>

      <el-button @click="messageTips">点我有提示哦</el-button>
      <el-button @click="messageTips2">点我有提示哦</el-button>
      <el-button @click="closeMessage">点我有提示哦</el-button>
    </div>
</template>

<script>
    export default {
        name: "Meaasge" ,
        methods:{
            messageTips(){
                this.$message("xxxxx");
            },
            messageTips2(){
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ]),
                    type:"success",
                    iconClass:'el-icon-star-on',
                    duration:0, //一直展示提示信息，可以调用closeAll方法将其关闭

            });
            },
            closeMessage(){
                this.$message.closeAll();
            }

        },
    }
</script>

<style scoped>
  .el-alert{
    margin-top: 50px;
  }
</style>
