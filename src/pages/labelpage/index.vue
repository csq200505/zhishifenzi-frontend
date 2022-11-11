<template>
<view class="background">
<image class="bg" src="/static/bg.jpeg"></image>
</view>
<view class="headers">
<view class="back">
<image class="back" src="/static/back.jpg"></image>
</view>
<view class="title">
<image class="title" src="/static/title.jpg"></image>
</view>
</view>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  position:fixed;
  background-size:100% 100%;
  /*z-index 较大的元素会覆盖较小的元素在上层进行显示*/
  z-index: -1;
}
.back {
  height:70rpx;
  width: 70rpx;
  margin-top: 20rpx;
  margin-left: 11rpx;
}
.title {
  height:120rpx;
  width: 260rpx;
  margin-top: 20rpx;
  margin-left: 20rpx;
}

</style>