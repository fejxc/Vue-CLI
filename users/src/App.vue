<template>
  <div id="app">
<!--    <a href="#/home">主页</a>-->
<!--    <a href="#/user">用户管理</a>-->
<!--    <a href="#/student">学生管理</a>-->
    <ul class="nav nav-link navbar-dark">
      <li role="presentation" class="active"><a href="#/home">主页</a></li>
      <li role="presentation"><a href="#/user">用户管理</a></li>
      <li role="presentation"><a href="#/student">学生管理</a></li>
    </ul>
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
