<template>
    <div>
      <h1>组件布局，一行最多24列</h1>
      <el-row :gutter="50" tag="span">
        <el-col :span="8"><div style="background-color: blue">8份</div></el-col>
        <el-col :span="8"><div style="background-color: rebeccapurple">8份</div></el-col>
        <el-col :span="8"><div style="background-color: red">8份</div></el-col>
      </el-row>

      <h1>组件布局，使用偏移</h1>
      <el-row :gutter="50" tag="span">
<!--        :push 相当于右浮动    -->
        <el-col :span="12" :offset="6" ><div style="background-color: blue">8份</div></el-col>
        <el-col :span="3" ><div style="background-color: red">8份</div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

</style>


<!--如果属性值是数字，就需在属性前加： 不然默认是字符串-->
