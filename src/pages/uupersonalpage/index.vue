<template>
 
      <!--个人简介部分-->
      <view class="personINFO">
        <view class="INFO1">
          <image class="tx" src="/static/tx-1.png" v-on:click="toPerinfo"></image>
          <view class="text">
            <p class="tag1">昵称 |</p>
            <p class="tag2">签名 |</p>
            <p class="name">贴一张芝士面膜</p>
            <p class="motto">谁动了我的奶酪</p>
            <p class="line1">—————————————————</p>
          </view>
      </view>
          
        <view class="INFO2">
          <view class="tag">
            <p class="tag3">性别 |</p>
            <p class="tag4">生日 |</p>
            <p class="tag5">美食标签 |</p>
          </view>
          <view class="detail">
            <p class="sex">女</p>
            <p class="birth">猴年马月</p>
            <p class="foodTag">晓彭肥肠鸡</p>
          </view>
          <p class="line1">—————————————————</p>
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
    <button class="b2" v-on:click="toChat">私信</button>
    <button class="b1" v-on:click="toGetUU">加为好友</button>
  </view>

</template>


<script>
export default {
  onLoad() {},
  methods: {
    toChat: () => {               //跳转到聊天页面
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
  toGetUU: () => {               //跳转到个人资料
      uni.navigateTo({
        url: '../personalpage/index'
      })
    }
}
</script>



<style scoped>


.personINFO {
  position: fixed;
  top: 0ch;
  
}

.INFO1 {
  width: 400px;
  height: 150px;
}

.tx {
  height: 200rpx;
  width: 200rpx;
  border-radius:30px;
  position: relative;
  margin-top: 7%;
  margin-left: 4%;
}

.tag {
  color: rgb(34, 33, 33);
  width:60px;
  height: 60px;
  position: relative;
  margin-left: 5%;
}
.tag1 {
  position: relative;
  width: 50px;
  margin-top: -20%;
  margin-left: 28%;
}
.tag2 {
  position: relative;
  width: 50px;
  margin-top: 5%;
  margin-left: 28%;
}

.tag3 {
  position: relative;
  width: 50px;
  margin-top: 5%;
  margin-left: 33%;
}
.tag4 {
  position: relative;
  width: 50px;
  margin-top: 5%;
  margin-left: 33%;
}
.tag5 {
  position: relative;
  width: 80px;
  margin-top: 5%;
  margin-left: 33%;
}

.detail {
  color: rgb(34, 33, 33);
  font-weight: bolder;
  width:100px;
  height: 60px;
  position: relative;
  margin-top: -17%;
  margin-left: 14%;
}
.name{
  font-weight: bolder;
  position: relative;
  margin-top: -15%;
  margin-left:39%;
  width: 120px;
}
.motto {
  font-weight: bolder;
  position: relative;
  margin-top: 5%;
  margin-left:39%;
  width: 120px;
}
.line1 {
  position: relative;
  margin-top: 3%;
  margin-left: 9%;
  color: grey;
}
.sex {
  position: relative;
  margin-top: 5%;
  margin-left:39%;
  width: 120px;
}
.birth {
  position: relative;
  margin-top: 5%;
  margin-left:39%;
  width: 120px;
}
.foodTag {
  position: relative;
  margin-top: 5%;
  margin-left: 70%;
  width: 120px;
}
.line2 {
  position: relative;
  margin-left: 9%;
  color: grey;
}

.box1 {
  width: 125px;
  height: 125px;
  border-style: solid;
  position: relative;
  margin-top: 73.5%; 
  margin-left: 9.5%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #FBCA1F;
}
.box2 {
  width: 125px;
  height: 125px;
  border-style: solid;
  position: relative;
  margin-top: -35.5%;
  margin-left: 55%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #FBCA1F;
}
.box3 {
  width: 125px;
  height: 125px;
  border-style: solid;
  position: relative;
  margin-top: 16%; 
  margin-left: 9.5%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #FBCA1F;
}
.box4 {
  width: 125px;
  height: 125px;
  border-style: solid;
  position: relative;
  margin-top: -35.5%;
  margin-left: 55%;
  border-width: 6px;
  border-radius: 20px;
  border-color: #FBCA1F;
}
.food {
  position: relative;
  margin-top: 12%;
  margin-left: 38%;
}
.img_place {
  /*display:flex;*/
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-evenly;
  width:100%;
  padding: 3%;
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

.b2 {
  position: relative;
  height: 60rpx;
  width: 120rpx;
  margin-top: -140%;
  margin-left: 80%;
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