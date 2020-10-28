<template>
    <div>
      <h1>创建简单的按钮</h1>
      <el-button round type="success">默认的按钮</el-button>

      <h1>使用按钮的属性 type</h1>
      <el-button round type="info" plain="true" size="mini">默认的按钮</el-button>
      <el-button round type="info" plain="true" size="small">默认的按钮</el-button>
      <el-button round type="info" plain="true" size="medium">默认的按钮</el-button>
      <el-button icon="el-icon-loading" type="success" circle="true" size="mini" ></el-button>

      <h1>按钮组的使用</h1>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </div>


</template>

<script>
    export default {
        name: "ButtonDetail"
    }
</script>

<style scoped>

</style>
