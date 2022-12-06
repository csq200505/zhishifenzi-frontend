<template>
  <view class="box">
    <image class="tx" :src=img></image>
    <view class="text">
      <p class="p1">{{id}}</p>
      <p class="p2">与你口味相似度\n{{similarity}}</p>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    img:String,
    id:String,
    similarity:Number
  },
  data() {
    return {
      title: 'homeUU',
    }
  },
}
</script>

<style scoped>

.box{
  background: rgb(0, 0, 0);
  margin-left: 4%;
  margin-top: 23%;
  padding-bottom: 5%;
  width: 91%;
}
.tx
{
  width:100%;
  height:80px;
  background: black;
}
.text{
  width:97%;
  height: 60px;
  background: black;
  position: relative;
}
.p1
{
  text-align: center;
  margin-top:5px;
  font-family:SimHei;
  font-size: 12px;
  color:#ffffff;
}
.p2
{
  text-align: center;
  margin-left:0%;
  margin-top: 6px;
  margin-bottom: 5px;
  font-family:SimHei;
  font-size: 10px;
  color:#ffffff;
}

</style>