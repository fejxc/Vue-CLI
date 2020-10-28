<template>
    <div>
      <h1>Switch的使用</h1>
      <el-switch v-model="value" :width="50" inactive-text="关闭" active-text="打开" :active-value="true"
                 :inactive-value="false" active-color="#409EFF" inactive-color="#FFF000">

      </el-switch>
    </div>
</template>

<script>
    export default {
        name: "Switchs",
        data(){
            return{
                value:true,
            }
        }
    }
</script>

<style scoped>

</style>
