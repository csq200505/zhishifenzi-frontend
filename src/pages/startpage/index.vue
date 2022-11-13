<template>
  <view class="content">

    <view class="img">       
      <image class="brand" src="/static/brand.jpg"></image>
      <image class="arrow" src="/static/arrow.jpg" v-on:click="toLogin"></image>
    </view>

    <view class="text">
      <h1 class="title">欢迎来到——知食分子</h1>
      <h3 class="sentence">让我们红尘作伴，一起白白胖胖</h3>
    </view>
      
  </view>

</template>

<script>
export default {
  onLoad() {},
  methods: {
    toLogin: () => {               //跳转到登录页面
      uni.navigateTo({
       url: '../labelpage/index'
      })
    }
  },
}
</script>

<style>

.content {
  background: url("/static/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;             
  position: fixed; 
  height: 100%; 
  width: 100%; 

}

.brand {
  height: 230rpx;
  width: 230rpx;
  border-radius:200px;
  position: fixed;
  top: 27%;
  left: 35%;
}

.arrow {
  height: 100rpx;
  width: 100rpx;
  border-radius:200px;
  position: fixed;
  top: 70%;
  left: 43%;
}

.title {
  font-size: 66rpx;
  color: #000000;
  display: flex;
  justify-content:center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  position: fixed;
  top: 12%;
  left: 23px;
}

.sentence {
  font-size: 36rpx;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top:52%;
  left: 60px;
}
</style>


