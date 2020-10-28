<template>
    <div>
      <h1>容器组件的使用</h1>
      <el-container>

        <el-header height="100px">
        <div><span>我是标题</span></div>
        </el-header>
<!--        容器的嵌套使用  可以将菜单和主内容 放在一行-->
        <el-container style="margin-top: 50px;">
          <el-aside width="250px" style="margin-right: 30px;">
            <div><span>我是菜单</span></div>
          </el-aside>
          <el-main>
            <div><span>我是主内容</span></div>
          </el-main>
        </el-container>
        <el-footer height="50px">
          <div><span>我是页脚</span></div>
        </el-footer>

      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-top: 30px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<!--
direction	子元素的排列方向	string	horizontal / vertical
子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
-->
