<template>
    <div>

      <h1>静态选择组件</h1>
      <el-select v-model="cityName">
        <el-option value="杭州">杭州</el-option>
        <el-option value="上海">上海</el-option>
      </el-select>

      <h1>动态选择组件</h1>
      <el-select v-model="phones.name" multiple clearable>
        <el-option v-for="phone in phones" :value="phone.id" :label="phone.name" :key="phone.id"  ></el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
        name: "Select",
        data(){
            return{
                cityName:'',
                phones:[
                    {id:'1',name:'小米'},
                    {id:'2',name:'apple'},
                    {id:'3',name:'华为'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>
