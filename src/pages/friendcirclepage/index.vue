<template>

  <view class="page">
   <view class="headers">
     <h1 class="title1">关注</h1>
     <h1 class="title2">推荐</h1>
     <h1 class="title3">最新</h1>
     <h1 class="title4">作品</h1>
   </view>
   <view class="list">
 
   <view class="list1">
       <image class="share1" src="/static/item8.jpg"></image>
       <view class="friend1">
         <image class="profile1" src="/static/item8.jpg"></image>
       <view class="text1">
         <h1 class="comment1">蔬菜好吃！！</h1>
       <h2 class="name1">再吃亿口</h2>
       </view>
       </view>
   </view>
 
   <view class="list2">
       <image class="share2" src="/static/item8.jpg"></image>
       <view class="friend2">
         <image class="profile2" src="/static/item8.jpg"></image>
       <view class="text2">
         <h1 class="comment2">沙拉好吃！！</h1>
       <h2 class="name2">再吃亿口</h2>
       </view>
       </view>
   </view>
 
   <view class="list3">
       <image class="share3" src="/static/item8.jpg"></image>
       <view class="friend3">
         <image class="profile3" src="/static/item8.jpg"></image>
       <view class="text3">
         <h1 class="comment3">炸鸡好吃！！</h1>
       <h2 class="name3">再吃亿口</h2>
       </view>
       </view>
   </view>
 
   </view>
 </view>
 </template>
 
 <script>
 export default {
   name: "index"
 }
 </script>
 
 <style scoped>
 .headers
 {
   display: flex;
   margin-top: 5px;
 }
 .title1
 {
 font-size: 40rpx;
 color: #000000;
 top: 5px;
 left: 10px;
 margin-left: 20px;
 }
 .title2
 {
 font-size: 40rpx;
 color: #000000;
 margin-left: 45px;
 }
 .title3
 {
 font-size: 40rpx;
 color: #000000;
 margin-left: 45px;
 }
 .title4
 {
 font-size: 40rpx;
 color: #000000;
 margin-left: 45px;
 }
 
 .list1{
   margin-top: 3%;
   margin-left:3%;
 }
 .friend1
 {
   display:flex;
   margin-top: 15x;
 }
 .profile1
 {
 height: 130rpx;
 width: 130rpx;
 border-radius:200px;
 border: 2px solid rgb(91, 59, 0);
 margin-top: 3px;
 }
 .share1
 {
 height: 400rpx;
 width: 700rpx;
 border-radius:10px;
 }
 .text1{
   margin-top: 9px;
   margin-left: 8px;
 }
 .comment1
 {
 font-size: 50rpx;
 color: #000000;
 font-weight: bolder;
 font-family: SimHei;
 display:flex;
 /* font-style: italic;斜体 */
 }
 .name1
 {
 font-size: 30rpx;
 color: #000000;
 font-weight: bolder;
 }
 
 .list2{
   margin-left:3%;
   margin-top: 5%;
 
 }
 .friend2
 {
   display:flex;
   margin-top: 15x;
 }
 .profile2
 {
 height: 130rpx;
 width: 130rpx;
 border-radius:200px;
 border: 2px solid rgb(91, 59, 0);
 margin-top: 3px;
 }
 .share2
 {
   height: 400rpx;
   width: 700rpx;
 border-radius:10px;
 
 }
 .text2{
   margin-top: 9px;
   margin-left: 8px;
 }
 .comment2
 {
 font-size: 50rpx;
 color: #000000;
 font-weight: bolder;
 font-family: SimHei;
 display:flex;
 /* font-style: italic;斜体 */
 }
 .name2
 {
 font-size: 30rpx;
 color: #000000;
 font-weight: bolder;
 }
 
 .list3{
   margin-top: 5%;
   margin-left:3%;
 }
 .friend3
 {
   display:flex;
   margin-top: 15x;
 }
 .profile3
 {
 height: 130rpx;
 width: 130rpx;
 border-radius:200px;
 border: 2px solid rgb(91, 59, 0);
 }
 .share3
 {
   height: 400rpx;
   width: 700rpx;
 border-radius:10px;
 
 }
 .text3{
   margin-top: 9px;
   margin-left: 8px;
 
 }
 .comment3
 {
 font-size: 50rpx;
 color: #000000;
 font-weight: bolder;
 font-family: SimHei;
 display:flex;
 /* font-style: italic;斜体 */
 }
 .name3
 {
 font-size: 30rpx;
 color: #000000;
 font-weight: bolder;
 }
 </style>
 
 