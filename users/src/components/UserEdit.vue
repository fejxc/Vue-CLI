<template>
    <div>
      <h2>编辑用户信息</h2>
      <form action="">
        用户名：<input type="text" v-model="user.name"><br>
        年龄：<input type="text" v-model="user.age" ><br>
        生日：<input type="text" v-model="user.bir"><br>
        <input type="button" @click="editUSerInfo" value="修改用户信息">
      </form>
    </div>
</template>

<script>
    export default {
        name: "UserEdit",
        data(){
            return{
                user:{
                    id:'',
                }
            }
        },
        methods:{
            findOne(){
                this.$http.get("http://localhost:8989/vue/user/findOne?id="+this.$route.query.id).then(res=>{
                    console.log(res);
                    console.log(res.data);
                    this.user = res.data;

                });
            },
            editUSerInfo(){
                this.$http.post("http://localhost:8989/vue/user/update",this.user).then(res=>{
                    console.log(res);
                    if(res.data.success){
                        this.$router.push("/user");
                    }
                });
            }
        },
        created() {
            console.log("修改组件中获取的id"+this.$route.query.id);
            this.user.id=this.$route.query.id;
            this.findOne();
        }
    }
</script>

<style scoped>

</style>
