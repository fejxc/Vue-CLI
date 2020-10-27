<template>
    <div>
      <h2>添加用户信息</h2>
<!--      <form action="">-->
<!--        用户名：<input type="text" v-model="user.name"><br>-->
<!--        年龄：<input type="text" v-model="user.age"><br>-->
<!--        生日：<input type="text" v-model="user.bir"><br>-->
<!--        <input type="button" @click="saveUserInfo" value="添加用户信息">-->
<!--      </form>-->
      <div class="container-fluid" style="margin-top: 30px;">
        <div class="row">
          <div class="col-md-4 ">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">用户名</label>
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="用户名" v-model="user.name">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">年龄</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="年龄" v-model="user.age">
            </div>
            <div class="form-group">
              <label for="exampleInputFile" >生日</label>
              <input type="text" class="form-control" id="exampleInputFile" placeholder="xxxx-xx-xx" v-model="user.bir">
            </div>
            <button type="submit" class="btn btn-info" @click="saveUserInfo">提交</button>
          </form>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        data(){
            return{
                user:{},
            }
        },
        methods:{
            saveUserInfo(){
                console.log(this.user);
                //发送axios请求
                this.$http.post("http://localhost:8989/vue/user/add",this.user).then(res=>{
                    console.log(res);
                    if(res.data.success){
                        this.$router.push("/user"); //切换路由
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
