<template>
  <view>
    <view>
      <view class="weui-search-bar">
        <view class="weui-search-bar__form">
          <!-- 搜索框 -->
          <view class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="请输入搜索内容"/>
          </view>
        </view>
        <!-- 搜索按钮,调用搜索查询方法 -->
        <view class="weui-search-bar__cancel-btn" bindtap='方法名a'>搜索</view>
      </view>
    </view>
    <view class="button_1_2">
      <button class = "b1">美食排行榜</button>
      <button class = "b2">店面排行榜</button>
    </view>

  </view>

  <!--index.wxml-->
  <view class="box_1">
    <image class = "go_1" src="/static/进入.png" v-on:click="toSuggest"/>
    <view class = "text_recommend">个性推荐</view>
    <view class = "text_help">帮助小主翻牌，看看要宠幸哪位佳肴</view>
    <swiper indicator-dots="true" indicator-color="gray" indicator-active-color="red" autoplay="true">
      <swiper-item>

        <image src="https://i.postimg.cc/pXZm2KMy/image.png" />

      </swiper-item>
      <swiper-item>
        <image src="https://i.postimg.cc/7ZjwDLhf/4.png"/>
      </swiper-item>
      <swiper-item>
        <image src="https://i.postimg.cc/PrBR5vbs/1.png"/>
      </swiper-item>
      <swiper-item>
        <image src="https://i.postimg.cc/L8tN4C6L/3.png"/>
      </swiper-item>
      <swiper-item>
        <image src="https://i.postimg.cc/fRN1v0V7/5.png"/>
      </swiper-item>
    </swiper>
  </view>

  <view class="box_2">
    <image class = "go_2" src="/static/进入.png" v-on:click="toFanuu"/>
    <view class = "text_finduu">发现饭UU</view>
    <view class = "text_look">寻找精神灵食粮好友，偷偷看他们在吃什么！</view>
    <view class="container1">
      <image class = "picture_1" src="https://i.postimg.cc/SK0RddWT/11.png"/>
      <image class = "picture_2" src="https://i.postimg.cc/8P9zk4np/22.png"/>
      <image class = "picture_3" src="https://i.postimg.cc/x1mTXmWK/33.png"/>
      <image class = "picture_4" src="https://i.postimg.cc/j5xs3FCX/44.png"/>
    </view>
    <view class="container2">
      <view class="container2_1">
        <view class = "name_1">再吃亿口</view>
        <view class = "taste_1">口味相似度100%</view>
      </view>
      <view class="container2_2">
        <view class = "name_2">奶茶接班人 </view>
        <view class = "taste_2">口味相似度99% </view>
      </view>
      <view class="container2_3">
        <view class = "name_3">清蒸奥利奥</view>
        <view class = "taste_3">口味相似度98%</view>
      </view>
      <view class="container2_4">
        <view class = "name_4">皮蛋solo粥</view>
        <view class = "taste_4">口味相似度95%</view>
      </view>
  </view>
  </view>

</template>

<script>
export default {
  onLoad() {},
  methods: {
    toSuggest: () => {
      uni.navigateTo({
        url: '../suggestpage/index'
      })
    },
    toFanuu: () => {
      uni.navigateTo({
        url: '../fanuupage/index'
      })
    }
  },
}

</script>
<!-- 搜索 -->
<style scoped>
.weui-search-bar {
  position: relative;
  padding: 8px 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  background-color: #FBCA1F;
  border-top: 1rpx solid #D7D6DC;
  border-bottom: 1rpx solid #D7D6DC;
}
.weui-icon-search_in-box {
  position: absolute;
  left: 10px;
  top: 7px;
}
.weui-search-bar__form {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: auto;
  flex: auto;
  border-radius: 5px;
  background: #FFFFFF;
  border: 1rpx solid #E6E6EA;
}
.weui-search-bar__box {
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}
.weui-search-bar__input {
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.weui-search-bar__cancel-btn {
  margin-left: 10px;
  line-height: 28px;
  color: #ffffff;
  white-space: nowrap;
}

.b1 {
  position: relative;
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

.b1:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

.b1:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

.b2 {
  position: relative;
  height: 50rpx;
  width: 160rpx;
  margin-top: 3px;
  margin-left: 1px ;
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

.b2:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

.b2:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}
.button_1_2
{
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
}
/**index.wxss**/
.box_1{
  border: 1.5px solid #FBCA1F;
  margin: 20rpx;
  padding: 20rpx;
}
.text_recommend{
  font-family: SimHei;
  font-size: 18px;
  /*font-style: bold ;*/
  font-weight: 900;
}
/**app.wxss**/

.text_help{
  font-size: 10px;
  /*text-align: center;居中*/
  margin-bottom: 10px;
  color:#7f8a94;
}

.box_2{
  border: 1.5px solid #FBCA1F;
  margin: 20rpx;
  padding: 20rpx;
}
.text_finduu{
  font-family: SimHei;
  font-size: 18px;
  /*font-style: italic;斜体*/
  font-weight: bold;
}
/**app.wxss**/

.text_look{
  font-size: 10px;
  /*text-align: center;居中*/
  margin-bottom: 10px;
  color:#7f8a94;
}

.container1 view{
  width:100px;
  height:50px;
  /*text-align: center;*/
  line-height: 100px;
}

.container2_1{
  margin-left: 5px;
  width:60px;
  height:60px;
  background: black;
}
.container2_2{
  margin-left: 12px;
  width:60px;
  height:60px;
  background: black;
}
.container2_3{
  margin-left: 11px;
  width:60px;
  height:60px;
  background: black;
}
.container2_4{
  margin-left: 12px;
  width:60px;
  height:60px;
  background: black;
}
.picture_1
{
  width:60px;
  height:60px;
}

.picture_2
{
  width:60px;
  height:60px;
}
.picture_3
{
  width:60px;
  height:60px;
}
.picture_4
{
  width:60px;
  height:60px;
}

.name_1
{
  margin-left:10px;
  margin-top: 15px;
  font-family:SimHei;
  font-size: 10px;
  color:#ffffff;
}

.name_2
{
  margin-left:5px;
  margin-top: 15px;
  font-family:SimHei;
  font-size: 10px;
  color:#ffffff;
}
.name_3
{
  margin-left:5px;
  margin-top: 15px;
  font-family:SimHei;
  font-size: 10px;
  color:#ffffff;
}

.name_4
{
  margin-left:5px;
  margin-top: 15px;
  font-family:SimHei;
  font-size: 10px;
  color:#ffffff;
}

.taste_1
{
  margin-left:6px;
  margin-top: 12px;
  font-family:SimHei;
  font-size: 7px;
  color:#ffffff;
}

.taste_2
{
  margin-left:7px;
  margin-top: 12px;
  font-family:SimHei;
  font-size: 7px;
  color:#ffffff;
}
.taste_3
{
  margin-left:7px;
  margin-top: 12px;
  font-family:SimHei;
  font-size: 7px;
  color:#ffffff;
}

.taste_4
{
  margin-left:7px;
  margin-top: 12px;
  font-family:SimHei;
  font-size: 7px;
  color:#ffffff;
}

.container1 {
  display: flex;
  justify-content: space-around;
}

.container2 {
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
}

.go_1{
  position: absolute;
  margin-top:1px;
  margin-left:255px;
  width:30px;
  height:30px;
  z-index: 9999;
}

.go_2{
  position: absolute;
  margin-top:1px;
  margin-left:255px;
  width:30px;
  height:30px;
  z-index: 9999;
}
</style>
