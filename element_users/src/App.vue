<template>
  <div>
    <el-container>
      <el-header>
        <!--     导航菜单     -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/index">主页</el-menu-item>
          <el-menu-item index="/users">用户管理</el-menu-item>
          <el-menu-item index="/msg">消息中心</el-menu-item>
          <el-menu-item index="/order">订单管理</el-menu-item>

          <el-menu-item index="/register" style="float: right">注册</el-menu-item>
          <el-menu-item index="/login" style="float: right">登陆</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
    data() {
        return {
            activeIndex: this.$route.path, //使用路由获取路径
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.$router.push(key);
        }
    }
}
</script>

<style>

</style>
