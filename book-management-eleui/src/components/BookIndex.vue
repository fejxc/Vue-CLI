<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px"  style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>后台管理</template>
          <el-menu-item-group>
            <template slot="title">图书管理</template>
            <el-menu-item index="1-1" @click="addBookInfo()">添加</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>fejxc</span>
      </el-header>

      <el-main>
        <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" slot-scope="scope">
          <el-table-column
            label="id"
            width="140">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="书名"
            width="140">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="作者"
            width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作" width="160">
            <template slot-scope="scope">
              <el-button size="mini" @click="delBookInfo(scope.$data,scope.row)">删除</el-button>
              <el-button size="mini" @click="updateBookInfo(scope.$data,scope.row)">修改</el-button>
            </template>
          </el-table-column>
          <el-table-column width="200">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size=""
                placeholder="输入书名的关键字搜索"/>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "BookAdd",
        data() {
            return {
                tableData:[],
                search:'',
            }
        },
        methods:{
            //根据id删除图书
            delBookInfo(index,row){
                this.$http.get("http://localhost:8989/book/delete?id="+row.id).then(res=>{
                    this.findAll();
                    console.log(row.id);
                    console.log(res);
                })
            },
            //查找所有
            findAll(){
                this.$http.get("http://localhost:8989/book/findAll").then(res=>{
                    console.log(res);
                    this.tableData=res.data;
                })
            },
            //添加图书
            addBookInfo(){

                this.$router.push("/add");
            },
            //更新图书
            updateBookInfo(index,row){
                //this.updateForm=row;
                console.log(row.id);
                this.$router.push({name:'update',params:{id:row.id,name:row.name,author:row.author}});
            }
        },
        created() {
           this.findAll();
        }
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
