<template>
    <div>
      <!--        添加图书表单-->
      <el-form :model="Form" :rules="rules" ref="UserForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书id" prop="id">
          <el-input v-model="Form.id"></el-input>
        </el-form-item>
        <el-form-item label="图书名称" prop="name">
          <el-input v-model="Form.name"></el-input>
        </el-form-item>
        <el-form-item label="图书作者" prop="author">
          <el-input v-model="Form.author"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('UserForm')">立即修改</el-button>
          <el-button @click="resetForm('updateForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <!--        添加图书  end-->
    </div>
</template>

<script>
    export default {
        name: "BookAdd",
        data() {
            return {
                Form: {
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

                }
            };
        },
        methods: {
            submitForm(UserForm) {
                console.log(this.Form);
                this.$refs[UserForm].validate((valid) => {
                    if (valid) {
                        this.$http.post("http://localhost:8989/book/add",this.Form).then(res=>{
                            alert('添加成功！');
                            console.log(res.data);
                            this.$router.push("/index");
                        })

                    } else {
                        console.log('添加失败，等会在试试！！');
                        return false;
                    }
                });
            },
            resetForm(Form) {
                this.$refs[Form].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
