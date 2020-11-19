<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="720px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          :src="item"
          fit="fit"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import homeImg1 from "../assets/banner/banner1.jpg";
  import homeImg2 from "../assets/banner/banner2.jpg";
  import homeImg3 from "../assets/banner/banner3.jpg";
  import homeImg4 from "../assets/banner/banner4.jpg";
    export default {
        name: "test03",
        data(){
            return{
                imgs:[homeImg1,homeImg2,homeImg3,homeImg4]
            }
        }
    }
</script>

<style scoped>

</style>
