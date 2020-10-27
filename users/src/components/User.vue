<template>
  <div>
    <h3>用户列表</h3>
    <a href="#/user/userAdd" class="btn btn-info">添加用户</a>
    <table class="table table-striped table-bordered" style="margin-top: 30px;">
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
                this.$http.get("http://localhost:8989/vue/user/findAll?page=1&rows=4").then((respose) => {
                    console.log(respose.data);
                    this.users = respose.data.results;
                });
            },
            delRow(id){
                console.log(id);
                this.$http.get("http://localhost:8989/vue/user/delete?id="+id).then(res=>{
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
