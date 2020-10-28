<template>
  <div style="margin-top: 100px" align="center">
    <el-link href="https://fejxc.gitee.io/blog/"  icon="el-icon-user" target="_blank">我的博客</el-link>
    <el-link type="primary" :underline="false">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
  </div>
</template>

<script>
    export default {
        name: "Link"
    }
</script>

<style scoped>

</style>

<!--
:underline="false"  有些属性使用要动态绑定
target="_blank" 新页面打开
-->
