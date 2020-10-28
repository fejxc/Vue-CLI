<template>
  <div>
    <h1>datepicker的使用</h1>
    <el-date-picker v-model="creatDate"
                    :editable="true"
                    :clearable="true"
                    placeholder="选择日期"
                    type="daterange"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    format="yyyy/MM/dd"
    ></el-date-picker>

    <h1>日期的配置</h1>
    <el-date-picker
      v-model="creatDate"
      type="date"
      placeholder="选择日期"
      format="yyyy/M/d"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
    export default {
        name: "DatePickers",
        data() {
            return {
                creatDate: '',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }],
                },
            }
        }
    }
</script>

<style scoped>

</style>
