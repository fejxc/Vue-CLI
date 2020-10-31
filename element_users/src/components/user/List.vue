<template>
    <div>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="编号"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
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
        <el-table-column label="生日" prop="bir"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column align="rigth">
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
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
<!--      添加按钮-->
      <el-button type="success" size="mini" style="margin-top: 20px;">添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                search:'',
                tableData: [{
                    id: 1,
                    name: '王小虎',
                    bir:'2020-01-01',
                    address: '上海市普陀区金沙江路 1518 弄',
                    sex:'男'
                }, {
                    id: 2,
                    name: '孙昀',
                    bir:'2020-01-01',
                    address: '上海市普陀区金沙江路 1517 弄',
                    sex:'男'
                }, {
                    id: 3,
                    name: '李四',
                    bir:'2020-01-01',
                    address: '上海市普陀区金沙江路 1519 弄',
                    sex:'男'
                }, {
                    id: 4,
                    bir:'2020-01-01',
                    name: '李五',
                    address: '上海市普陀区金沙江路 1516 弄',
                    sex:'男'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

</style>
