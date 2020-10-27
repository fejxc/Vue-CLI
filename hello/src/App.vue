<template>
  <div id="app">
<!--    用来展示路由组件-->
    <a href="#/home">主页模块</a>
    <a href="#/user">用户模块</a>
    <a href="#/stu">学生模块</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
