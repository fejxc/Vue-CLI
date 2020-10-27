<template>
    <div>
      <h1>用户组件</h1>

      <table border="1">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>操作</th>
          </tr>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td><a href="#">删除</a> <a href="#">修改</a></td>
        </tr>
      </table>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "User",
        data(){
            return{
                users:[
                    {id:"1",name:"sy",age:22},
                    {id:"2",name:"sy2",age:23},
                    {id:"3",name:"sy3",age:24}
                ]
            }
        },
        methods:{},
        components:{
            Footer,//注册Footer
        },
        created() { //axios请求  异步请求

        }
    }
</script>

<style scoped>

</style>
