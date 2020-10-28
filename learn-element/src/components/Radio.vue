<template>
    <div>
      <h1>单选按钮</h1>
      <el-radio-group v-model="radio">
        <el-radio :label="3" @change="chage">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        data () {
            return {
                radio: 3
            };
        },
        methods:{
            chage(){
                alert("hhh");
                console.log(this.radio);
            }
        },

    }
</script>

<style scoped>

</style>
