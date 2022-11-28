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
      <view class="img_place">
        <image class="p1" src="/static/item8.jpg"></image>
        <image class="p2" src="/static/item8.jpg"></image>
        <image class="p3" src="/static/item8.jpg"></image>
        <image class="p4" src="/static/item8.jpg"></image>
      </view>
      <p class="food">轻食</p>
    </view>
    <view class="box2">
      <view class="img_place">
        <image class="p1" src="/static/item7.jpg"></image>
        <image class="p2" src="/static/item7.jpg"></image>
        <image class="p3" src="/static/item7.jpg"></image>
        <image class="p4" src="/static/item7.jpg"></image>
        </view>
      <p class="food">饮品</p>
    </view>
    <view class="box3">
      <view class="img_place">
        <image class="p1" src="/static/item4.jpg"></image>
        <image class="p2" src="/static/item4.jpg"></image>
        <image class="p3" src="/static/item4.jpg"></image>
        <image class="p4" src="/static/item4.jpg"></image>
      </view>
      <p class="food">主食</p>
    </view>
    <view class="box4">
      <view class="img_place">
        <image class="p1" src="/static/item6.jpg"></image>
        <image class="p2" src="/static/item6.jpg"></image>
        <image class="p3" src="/static/item6.jpg"></image>
        <image class="p4" src="/static/item6.jpg"></image>
      </view>
      <p class="food">小吃</p>
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
background: url("/static/background.jpg");
background-repeat: no-repeat;
background-size: 100% 100%; 
position: fixed; 
margin-top: -100%;
height: 200%; 
width: 100%; 
}

.whiteBackgound {
width: 100%;
height: 20%;
position:fixed;
background:white;
margin-top: 50%;
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

.box1 {
  width: 120px;
  height: 120px;
  border-style: solid;
  position: relative;
  margin-top: 73.5%; 
  margin-left: 9.5%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #ffffff;
}
.box2 {
  width: 120px;
  height: 120px;
  border-style: solid;
  position: relative;
  margin-top: -35.5%; 
  margin-left: 55%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #ffffff;
}
.box3 {
  width: 120px;
  height: 120px;
  border-style: solid;
  position: relative;
  margin-top: 16%; 
  margin-left: 9.5%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #ffffff;
}
.box4 {
  width: 120px;
  height: 120px;
  border-style: solid;
  position: relative;
  margin-top: -35.5%; 
  margin-left: 55%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #ffffff;
}
.food {
  position: relative;
  margin-top: 12%;
  margin-left: 38%;
}
.img_place {
  position: relative;
  margin-top: 2.5%;
  margin-left: 3%;
}

.p1 {
  height: 110rpx;
  width: 110rpx;
  border-radius: 10px;
  position: relative;
}
.p2 {
  height: 110rpx;
  width: 110rpx;
  border-radius: 10px;
  position: relative;
  margin-left: 3%;
}
.p3 {
  height: 110rpx;
  width: 110rpx;
  border-radius: 10px;
  position: relative;
}
.p4 {
  height: 110rpx;
  width: 110rpx;
  border-radius: 10px;
  position: relative;
  margin-left: 3%;
}

.b1 {
  position: fixed;
  top: 89%;
  left: 23%;
  height: 60rpx;
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
  font-size: x-small;
}

</style>