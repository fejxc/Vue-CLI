<template>
    <div>
      <el-row>
        <el-col :span="13">
          <el-table
            :height="300"
            stripe
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            >
            <el-table-column
              label="编号"
              width="80">
              <template slot-scope="scope">
                <i class="el-icon-user-solid"></i>
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="100">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="生日" prop="bir" width="120"></el-table-column>
            <el-table-column label="地址" prop="address" width="200"></el-table-column>
            <el-table-column label="性别" prop="sex" width="50"></el-table-column>
            <el-table-column align="rigth" width="180">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入姓名的关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  slot="reference">删除</el-button>

                <!--            ??????为什么不生效？？？？？-->
                <!--            <el-popconfirm-->
                <!--              title="确定删除吗？"-->
                <!--              @onConfirm="handleDelete(scope.$index, scope.row)"-->
                <!--            >-->
                <!--              <el-button-->
                <!--                size="mini"-->
                <!--                type="danger"-->
                <!--                @click=""-->
                <!--                slot="reference">删除</el-button>-->
                <!--            </el-popconfirm>-->
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="1">
          <!--      添加按钮-->
          <el-button type="success" size="mini" style="margin:10px 0px;" @click="saveUserInfo">添加</el-button>
        </el-col>
        <el-col :span="9">
          <transition name="el-zoom-in-center">
            <div v-show="show" class="transition-box">
              <el-form :hide-required-asterisk="false" :rules="rules" ref="userForm" :model="form" label-width="80px" label-suffix=":">
                <el-form-item label="编号" prop="id">
                  <el-input v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="生日" prop="bir">
                  <el-date-picker
                    v-model="form.bir"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                  <el-input v-model="form.address" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="onSubmit('userForm')">保存</el-button>
                  <el-button @click="saveUserInfo">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </transition>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <!--      更新表单-->
          <transition name="el-zoom-in-center">
            <div v-show="showEdit" class="transition-box">
              <el-form ref="formEdit" :model="formEdit" label-width="80px" label-suffix=":">
                <el-form-item label="编号">
                  <el-input v-model="formEdit.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-input v-model="formEdit.name"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                  <el-date-picker
                    v-model="formEdit.bir"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" >
                  <el-input v-model="formEdit.address" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model="formEdit.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onUpdate">更新</el-button>
                  <el-button @click="updateUserInfo">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </transition>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                search:'',
                tableData: [],
                show:false,
                showEdit:false,
                form: {
                    id: '',
                    name: '',
                    bir: '',
                    address: '',
                    sex:'男',
                },
                formEdit: {
                    id: '',
                    name: '',
                    bir: '',
                    address: '',
                    sex:'男',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    id: [
                        { required: true, message: '输入id', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 ', trigger: 'blur' }
                    ],
                    bir: [
                        { type: 'date', required: true, message: '请选择生日', trigger: 'blur' }
                    ],
                    sex: [
                        {  required: true, message: '请性别', trigger: 'change' }
                    ],
                    address: [
                        {  required: true, message: '请输入地址', trigger: 'blur' }
                    ],

                },
            }
        },
        methods: {

            onUpdate(){ //更新信息
                //发送axois
                this.$http.post("http://localhost:8989/user/update",this.formEdit).then(res=>{
                    console.log(res.data);
                    if(res.data.status){
                        this.$message({
                            message: '恭喜你'+res.data.msg,
                            type: 'success'
                        });
                        //清空表单信息
                        this.formEdit={sex:"男"},
                            //隐藏表单
                            this.showEdit=false;
                        //刷新列表
                        this.findAllTableData();

                    }else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            saveUserInfo(){ //点击添加信息的处理
                this.show=!this.show;
                this.form={sex:'男'}; //清空信息
            },
            updateUserInfo(){
                this.showEdit=true;
                this.formEdit.address='';
                this.formEdit.bir='';
                this.formEdit.name='';
                this.formEdit.sex='';
            },
            handleEdit(index, row) {  //编辑事件
                console.log(index, row);
                this.showEdit =!this.showEdit; //打开表单
                this.formEdit=row; //数据渲染
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.$confirm('删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    this.$http.get("http://localhost:8989/user/delete?id="+row.id).then(res=>{
                        console.log(res);
                        if(res.data.status){
                            this.$message({
                                message: '恭喜你'+res.data.msg,
                                type: 'success'});
                            this.findAllTableData();//刷新数据库 表格
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                })

            },
            findAllTableData(){
                this.$http.get("http://localhost:8989/user/findAll").then(res=>{
                    this.tableData = res.data;
                })
            },
            onSubmit(userForm) {
                    this.$refs[userForm].validate((valid) => {
                        if (valid) {
                            //发送axois
                            this.$http.post("http://localhost:8989/user/save",this.form).then(res=>{
                                console.log(res.data);
                                if(res.data.status){
                                    this.$message({
                                        message: '恭喜你'+res.data.msg,
                                        type: 'success'
                                    });
                                    //清空表单信息
                                    this.form={sex:"男"},
                                        //隐藏表单
                                        this.show=false;
                                    //刷新列表
                                    this.findAllTableData();

                                }else {
                                    this.$message.error(res.data.msg);
                                }
                            })
                        } else {
                            this.$message.error("数据不符合要求");
                            return false;
                        }
                    });

        },
        },
        created() {
            this.findAllTableData();
        }
    }
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 55%;
    height: 600px;
    border-radius: 4px;
    text-align: left;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
