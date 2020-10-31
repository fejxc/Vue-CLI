<template>
    <div>
      <template>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in imgs" :key="item">
            <el-image
              style="width: 100%; height: 100%"
              :src="item"
              fit="fil"></el-image>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

</template>

<script>
    import homeImg1 from "../assets/indexImges/1.jpg";
    import homeImg2 from "../assets/indexImges/2.jpg";
    import homeImg3 from "../assets/indexImges/3.jpg";
    import homeImg4 from "../assets/indexImges/4.jpg";
    import homeImg5 from "../assets/indexImges/5.jpg";
    import homeImg6 from "../assets/indexImges/6.jpg";

    export default {
        name: "Index",
        data(){
            return{
                imgs:[homeImg1,homeImg2,homeImg3,homeImg4,homeImg5,homeImg6]
            }
        }
    }
</script>

<style scoped>

</style>
