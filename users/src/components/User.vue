<template>
  <div>
    <h1>用户列表</h1>
    <table border="1" cellpadding="10" cellspacing="2">
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>生日</th>
        <th>操作</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.bir}}</td>
        <td><a href="javascript:;" @click="delRow(user.id)">删除</a> <a :href="'#/user/userEdit?id='+user.id">修改</a></td>
      </tr>
    </table>
    <a href="#/user/userAdd">添加</a>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                 users:[]
            }
        },
        methods: {
            findAll() {
                this.$http.get("http://rap2api.taobao.org/app/mock/269320/findAll?page=1&rows=4").then((respose) => {
                    console.log(respose.data);
                    this.users = respose.data.results;
                });
            },
            delRow(id){
                console.log(id);
                this.$http.get("http://rap2api.taobao.org/app/mock/269320/user/delete?id="+id).then(res=>{
                    console.log(res);
                    if(res.data.success){
                        alert("确定查询所有吗？");
                        this.findAll();  //查询所有
                    }
                });
            }
        },
        components:{},
        created() {
            this.findAll();
            },
        watch:{ //用来监听
            $route:{
                handler: function (val,oldVal) {
                    console.log(val);
                    if(val.path=='/user'){
                        this.findAll();
                    }
                },
                //深度观察监听
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>
