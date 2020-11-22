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
          <!--  分页组件-->


        </el-table>
      </el-main>
<!--分页处理-->
      <el-pagination
        @current-change="findPage"
        @size-change="findSize"
        small
        background
        prev-text="上一页"
        next-text="下一页"
        style="margin: 15px 0px"
        layout="prev, pager, next,jumper,total,sizes"
        :page-size="size"
        :current-page="pageNow"
        :page-sizes="[2,4,6,8,10]"
        :total="totals">
      </el-pagination>
      <!--分页处理-->
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
                totals:0,
                size:6,
                pageNow:1,
            }
        },
        methods:{
            findPage(page){//处理分页
                console.log(page);
                this.page= page;
                this.findAll(page,this.size)
            },
            findSize(size){  //处理每页显示记录发生变化的方法
                console.log(size);
                this.size=size;
                this.findAll(this.page,size);
            },
            //根据id删除图书
            delBookInfo(index,row){

                console.log(index, row);
                this.$confirm('删除该图书, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(()=>{
                    this.$http.get("http://localhost:8989/book/delete?id="+row.id).then(res=>{
                        console.log(res);
                        console.log(res.status);
                        if(res.status==200){
                            alert("删除成功");
                            this.findAll();//刷新数据库
                        }else {
                            alert("删除失败！");
                        }

                    })
                })
            },
            //查找所有
            findAll(page,size){
                page = page?page:this.pageNow;
                size = size?size:this.size;
                this.$http.get("http://localhost:8989/book/findByPage?pageNow="+page+"&pageSize="+size).then(res=>{
                    console.log(res.data);
                    this.tableData=res.data.books;
                    this.totals=res.data.totals;
                })
            },


            //添加图书
            addBookInfo(){

                this.$router.push("/add");
            },
            //更新图书
            updateBookInfo(index,row){
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
