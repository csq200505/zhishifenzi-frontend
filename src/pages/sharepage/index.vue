<template>
  <!--index.wxml-->
  <view>
    <view class="container_1">
      <view class = "top_text">美味分享</view>
    </view>
    <view class = "tip">每次最多上传2/20张，单张文件不超过20MB</view>
    <view class="container_2">
      <image src="https://i.postimg.cc/pd4rp2Yh/33.png" class = "picture1"/>
      <view class = "in_1">
        <view class = "in_word">请输入吃后感~</view>
        <image src = "/static/delete.png" class = "delete_1"/>
      </view>
    </view>
    <view class="container_3">
      <image src="https://i.postimg.cc/ydRdRwvf/23.png" class = "picture2"/>
      <view class = "in_2">
        <view class = "in_word2">请输入吃后感~</view>
        <image src = "/static/delete.png" class = "delete_2"/>
      </view>
    </view>
    <view class="container_4">
      <button class="add">+继续添加</button>
      <button class="up">确认上传</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.container_1{
  flex:1;
  height:35px;
  background: #FBCA1F;
}
.top_text{
  font-weight:normal;
  font-family: YouYuan;
  font-size: 22px;
  text-align: center;
  padding-top: 0%;
  letter-spacing: 2.5px;
}
.tip{
  position: absolute;
  font-family: SimSun;
  font-size: 10px;
  margin-top: 13px;
  left:20px;
  color: darkgray;
}
.container_2{
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
  margin-top: 40px;
  margin-left: 10px;
  height:80px;
  width:500px;
}
.container_3{
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
  margin-top: 5px;
  margin-left: 10px;
  height:80px;
  width:500px;
}
.picture1{
  border-radius:15px;
  height:70px;
  width:70px;
  margin-right: 10px;
}
.picture2{
  border-radius:15px;
  height:70px;
  width:70px;
  margin-right: 10px;
}
.in_1{
  padding-right: 0px;
  border-radius:15px;
  height:70px;
  width:220px;
  background:#F5F5F5;
}
.in_2{
  padding-right: 0px;
  border-radius:15px;
  height:70px;
  width:220px;
  background:#F5F5F5;
}
.in_word{
  padding-top: 5px;
  padding-left: 5px;
  font-size: 11px;
  color: #bdbdbd;
}
.in_word2{
  padding-top: 5px;
  padding-left: 5px;
  font-size: 11px;
  color: #bdbdbd;
}
.delete_1{
  padding-left: 180px;
  padding-top: 5px;
  z-index: 1;
  height:20px;
  width:20px;
}
.delete_2{
  padding-left: 180px;
  padding-top: 5px;
  z-index: 1;
  height:20px;
  width:20px;
}
.container_4{
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
  margin-top: 165px;
  margin-left: 10px;
  height:40px;
  width:300px;
}
.add{
  padding-left: 20;
  height:35px;
  width:95px;
  font-size: 13px;
  background: #FBCA1F;
  border: 1px solid black;
}
.up{
  padding-left: 80;
  height:35px;
  width:95px;
  font-size: 13px;
  background: #FBCA1F;
  border: 1px solid black;
}
</style>