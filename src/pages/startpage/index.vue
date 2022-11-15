<template>
  <view class="content">

    <view class="img">       
      <image class="brand" src="/static/logosquare.jpg"></image>
<!--      <image class="arrow" src="/static/arrow.jpg" v-on:click="toLogin"></image>-->
    </view>

    <view class="text">
      <h1 class="title">欢迎来到——知食分子</h1>
      <h3 class="sentence">让我们红尘作伴，一起白白胖胖</h3>
    </view>
    <view class="jump_next_page">
      <button class="jump_button" v-on:click="toLogin"><text class='button_text'>></text></button>
    </view>
      
  </view>

</template>

<script>
export default {
  onLoad() {},
  methods: {
    toLogin: () => {               //跳转到登录页面
      uni.navigateTo({
       url: '../loginpage/index'
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
  top: 38%;
  left: 35%;
  box-shadow: 1px 4px 10px 1px rgba(247,151,9,0.7);/*阴影*/
}
@keyframes roll{/*创建一个动画*/
  from{ transform: rotate(-15deg);}
  to{ transform: rotate(15deg);}
}
.brand:hover{/*鼠标移上去时,设置样式*/
  animation: roll 1.8s ;/*调用动画*/
}

/*.arrow {*/
/*  height: 100rpx;*/
/*  width: 100rpx;*/
/*  border-radius:200px;*/
/*  position: fixed;*/
/*  top: 75%;*/
/*  left: 43%;*/
/*}*/
.jump_button {
  width: 15%;
  background-color: #FFFFFF;
  color: black;
  border-radius: 98rpx;
    position: fixed;
    top: 75%;
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
  top: 25%;
  left: 23px;
}

.sentence {
  font-size: 36rpx;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top:58%;
  left: 60px;
}
</style>


