<template>
    <div>
      <h1>Table表格组件使用</h1>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                empty-text="暂时无数据" border :height="500" :row-class-name="showCss" size="medium" fit :highlight-current-row="true">
        <el-table-column label="id" prop="id" width="100px" header-align="center"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age" sortable></el-table-column>
        <el-table-column label="qq" prop="qq" header-align="center" align="center"></el-table-column>
        <el-table-column label="部门" prop="dept.name" header-align="center" align="center" :formatter="aaa"></el-table-column>
        <el-table-column label="">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "Tables",
        data(){
            return{
                tableData:[
                    {
                        id:1809102021,name:"孙昀",age:'6',qq:'103144436',
                        dept:{id:'1',name:'编辑部'}
                    },
                    {
                        id:1809102021,name:"老四",age:24,qq:'10314454436',
                        dept:{id:'1',name:'外交部'}
                    },
                    {
                        id:1809102021,name:"老王",age:26,qq:'10311464436',
                        dept:{}
                    },
                    {
                        id:1809102021,name:"花花",age:26,qq:'10311464436',
                        dept:{}
                    },

                ],
                search:'',
            }
        },
        methods:{
            aaa(row, column, cellValue, index){
                console.log(cellValue);
                console.log(index);
                console.log(row);
                if(cellValue){
                    // return row.dept.name;
                    return cellValue;
                }else{
                    return "刚刚入职，暂无分配";
                }
            },
            showCss({row, rowIndex}){
                if(rowIndex % 2 == 0){
                    return "warning-row";
                }else{
                    return "success-row";
                }
            },
            handleEdit(index,row){
                console.log(index);
                console.log(row);
            },
            handleDelete(index,row){
                console.log(index);
                console.log(row);
            }
        },
        created() {
        },
    }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
