<template>
  <view class="box">
    <view class="person">
      <image class="tx" src="/static/tx-1.png"></image>
      <view class="text">
        <p class="p1">再吃亿口</p>
        <p class="p2">与你口味相似度100%</p>
      </view>
      <image class="arrow" src="/static/arrow2.png"></image>
    </view>

  </view>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 12%;
  position: relative;
  background:rgb(255, 237, 117);
  margin-top: 3%;
  padding-bottom: 2%;
  border-radius:35px;
}
.person{
  display: flex;
  width: 100%;
}
.tx {
  height: 120rpx;
  width: 120rpx;
  border-radius:200px;
  position: relative;
  margin-top: 3%;
  margin-left: 5%;
}
.text{
  width: 33%;
  margin-left: 3%;
  margin-top: 6%;
}
.p1 {
  display: flex;
  font-size: small;
  font-weight: bolder;
}
.p2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 10px;
  color: grey;
  margin-top: 2%;
}
.arrow {
  height: 80rpx;
  width: 80rpx;
  margin-left: 26%;
  margin-top: 6%;
}
</style>