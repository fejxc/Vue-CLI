<template>
    <div>
      <h1>主页home组件</h1>
      <div style="width: 100%; height: 300px; background-color: gray;">
        内容
      </div>

<!--      使用组件-->
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer"; //引入组件
    export default {
        name: "Home",
        components: {Footer},
        data(){
            return{}
        },
        comments:{
            Footer, //注册组件
        }
    }
</script>

<style scoped>

</style>
