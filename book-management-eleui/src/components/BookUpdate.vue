<template>
  <div>
    <!--        更新图书表单-->
    <el-form :model="updateForm" :rules="rules" ref="upForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="图书id" prop="id">
        <el-input v-model="updateForm.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="图书名称" prop="name">
        <el-input v-model="updateForm.name"></el-input>
      </el-form-item>
      <el-form-item label="图书作者" prop="author">
        <el-input v-model="updateForm.author"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('upForm')">修改</el-button>
        <el-button @click="resetForm('upForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!--        添加图书  end-->
  </div>
</template>

<script>
    export default {
        name: "BookUpdate",
        data(){
            return{
                updateForm: {
                    id: '',
                    name: '',
                    author: '',
                },
                rules: {
                    id: [
                        { required: true, message: '请输入图书id', trigger: 'blur' },
                        { min: 1, max: 13, message: '长度在 1 到 13 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入图书名称', trigger: 'blur' },
                        { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                    ],
                    author: [
                        { required: true, message: '请输入图书作者', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                    ],

                },
            };
        },
        methods: {
            submitForm(upForm) {
                console.log(this.updateForm.id);
                this.$refs[upForm].validate((valid) => {
                    if (valid) {
                        this.$http.post("http://localhost:8989/book/update",this.updateForm).then(res=>{
                            alert('修改成功！');
                            console.log(res.data);
                            this.$router.push("/index");
                        })

                    } else {
                        console.log('修改失败，等会在试试！！');
                        return false;
                    }
                });
            },
            resetForm(upForm) {
                this.$refs[upForm].resetFields();
            }
        },
        created() {
            //渲染数据
            this.updateForm.id=this.$route.params.id;
            this.updateForm.name=this.$route.params.name;
            this.updateForm.author=this.$route.params.author;
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
