<template>
  <!--黄色背景板-->
  <view class="yellowBackgound">    
    <!--白色背景板-->
    <view class="whiteBackgound">   
      <!--个人简介部分-->
      <view class="personINFO">
        <image class="tx" src="/static/tx-1.png" v-on:click="toPerinfo"></image>
        <view class="INFO">
          <p class="name">贴一张芝士面膜</p>
          <p class="motto">谁动了我的奶酪</p>
          <view class="tag">
            <p class="tag1">人气</p>
            <p class="tag2">粉丝</p>
            <p class="tag3">关注</p>
          </view>
          <view class="num">
            <p class="num1">97</p>
            <p class="num2">634</p>
            <p class="num3">58</p>
          </view>
        </view>
      </view>
    </view>
  </view>
  
  
  
  <view class="icon">
    <image class="icon1" src="/static/friend.png"></image>
<!--    <image class="icon2" src="/static/help.png"></image>-->
<!--    <image class="icon3" src="/static/set.png"></image>-->
    <view class="tag">
      <p class="tag4">好友</p>
<!--      <p class="tag5">帮助</p>-->
<!--      <p class="tag6">设置</p>-->
    </view>
  </view>
  

  <!--收藏的图片部分-->
  <view class="img">
    <view class="box1">
      <p class="block1">甜品</p>
      <image class="p1" src="/static/item9.png"></image>
      <image class="p2" src="/static/item9.png"></image>
      <image class="p3" src="/static/item9.png"></image>
      <image class="p4" src="/static/item9.png"></image>
    </view>
    <view class="box2">
      <p class="block2">饮品</p>
      <image class="p5" src="/static/item7.jpg"></image>
      <image class="p6" src="/static/item7.jpg"></image>
      <image class="p7" src="/static/item7.jpg"></image>
      <image class="p8" src="/static/item7.jpg"></image>
    </view>
    <view class="box3">
      <p class="block3">主食</p>
      <image class="p9" src="/static/item4.jpg"></image>
      <image class="p10" src="/static/item4.jpg"></image>
      <image class="p11" src="/static/item4.jpg"></image>
      <image class="p12" src="/static/item4.jpg"></image>
    </view>
    <view class="box4">
      <p class="block4">小吃</p>
      <image class="p13" src="/static/item6.jpg"></image>
      <image class="p14" src="/static/item6.jpg"></image>
      <image class="p15" src="/static/item6.jpg"></image>
      <image class="p16" src="/static/item6.jpg"></image>
    </view>       
      
  </view>

  <view class="button">
    <button class="b1" v-on:click="toLogin">退出登录</button>
  </view>

</template>


<script>
export default {
  onLoad() {},
  methods: {
    toLogin: () => {               //跳转到登陆页面
      uni.navigateTo({
       url: '../loginpage/index'
      })
    },
    toPerinfo: () => {               //跳转到个人资料
      uni.navigateTo({
        url: '../perinfopage/index'
      })
    }
  },
}
</script>



<style scoped>

.yellowBackgound {
background: url("/static/bg.jpeg");
background-repeat: no-repeat;
background-size: 100% 100%; 
position: fixed; 
height: 100%; 
width: 100%; 
}

.whiteBackgound {
width: 100%;
height: 20%;
position:fixed;
background:white;
margin-top: 25%;
background-repeat: no-repeat;
border-radius:35px;
}

.personINFO {
  position: fixed;
  top: 0ch;
}
.name{
  font-size: larger;
  font-weight: bolder;
  font-family: 'Times New Roman', Times, serif;
  position: fixed;
  top: 15%;
  left: 8%;
}
.motto {
  font-family: 'Times New Roman', Times, serif;
  color: grey;
  position: fixed;
  top: 20%;
  left: 8%;
}
.tag {
  font-family: 'Times New Roman', Times, serif;
  font-size: 10px;
  color: grey;
}
.tag1 {
  position: fixed;
  top: 28.5%;
  left: 10%;
}
.tag2 {
  position: fixed;
  top: 28.5%;
  left: 25%;
}
.tag3 {
  position: fixed;
  top: 28.5%;
  left: 41%;
}

.num {
  font-size: x-small;
  font-weight: bolder;
}
.num1 {
  position: fixed;
  top: 25%;
  left: 11%;
}
.num2 {
  position: fixed;
  top: 25%;
  left: 25%;
}
.num3 {
  position: fixed;
  top: 25%;
  left: 42%;
}

.tx {
  height: 200rpx;
  width: 200rpx;
  border-radius:30px;
  position: fixed;
  top: 15%;
  left: 65%;
}

.icon {
  position: fixed;
  top: 23.5%;
}
.icon1 {
  height: 60rpx;
  width: 60rpx;
  position: fixed;
  left: 55%;
}
/*.icon2 {*/
/*  height: 60rpx;*/
/*  width: 60rpx;*/
/*  position: fixed;*/
/*  left: 22%;*/
/*}*/
/*.icon3 {*/
/*  height: 60rpx;*/
/*  width: 60rpx;*/
/*  position: fixed;*/
/*  left: 34%;*/
/*}*/

.tag4 {
  position: fixed;
  top: 28.5%;
  left: 56%;
}
/*.tag5 {*/
/*  position: fixed;*/
/*  top: 33%;*/
/*  left: 23%;*/
/*}*/
/*.tag6 {*/
/*  position: fixed;*/
/*  top: 33%;*/
/*  left: 35%;*/
/*}*/

.block1 {
  position: fixed;
  top: 61%;
  left: 23%;
  font-family:'Arial Narrow';
  font-size: 12px;
}

.p1 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 39%;
  left: 12%;
}
.p2 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 39%;
  left: 28%;
}
.p3 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 50%;
  left: 12%;
}
.p4 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 50%;
  left: 28%;
}


.block2 {
  position: fixed;
  top: 61%;
  right: 23%;
  font-family:'Arial Narrow';
  font-size: 12px;
}

.p5 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 39%;
  right: 12%;
}
.p6 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 39%;
  right: 28%;
}
.p7 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 50%;
  right: 28%;
}
.p8 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 50%;
  right: 12%;
}

.block3 {
  position: fixed;
  top: 89%;
  left: 23%;
  font-family:'Arial Narrow';
  font-size: 12px;
}
.p9 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 67%;
  left: 12%;
}
.p10 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 67%;
  left: 28%;
}
.p11 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 78%;
  left: 12%;
}
.p12 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 78%;
  left: 28%;
}

.block4 {
  position: fixed;
  top: 89%;
  right: 23%;
  font-family:'Arial Narrow';
  font-size: 12px;
}
.p13 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 67%;
  right: 12%;
}
.p14 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 67%;
  right: 28%;
}
.p15 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 78%;
  right: 28%;
}
.p16 {
  height: 110rpx;
  width: 110rpx;
  position: fixed;
  top: 78%;
  right: 12%;
}

.b1 {
  position: fixed;
  top: 92%;
  left: 21%;
  height: 50rpx;
  width: 160rpx;
  margin-top: 10rpx;
  margin-left: 120rpx;
  margin-right: auto;
  margin-bottom: 7rpx;
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.6em 1.5em;
  font-weight: 900;
  font-size: 8px;
  line-height:1;
  border: 1px solid black;
  border-radius: 1.5em;
  box-shadow: 0.1em 0.1em;
  flex-direction: row;
}

</style>