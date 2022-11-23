<template>

  <view class = "food-card1" >
    <view class = "food-card2">
        <image  class = "foodpicture" :src=img />
      <view class = "h1">
        <view class = "foodname">{{name}}</view>
        <image class = "loc" src="/static/location.png" />
      </view>
      <view class = "footnote">{{note}}</view>

      <!--      <view class = "special" v-if="special == 0?true:false">饭友推荐！</view>-->

      <view class = "love">
        <image class = "like" src="/static/like.png" />
        <view class = "like-num">{{like_nums}}</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props:{
    img:String,
    name:String,
    note:String,
    like_nums:Number
  },
  data() {
    return {
      title: 'card',
    }
  },
  methods: {

  }
}
</script>

<style>
.food-card1{
  width: 100%;
  height: 100%;
  /*border: 1px solid #DCDCDC;*/
  background: #FBCA1F;
  border-radius: 4px;
}
.food-card2{
  margin-left: 1%;
  width: 97%;
  height: 100%;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  border-radius: 4px;
}

.foodpicture{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 74%;
  z-index: 500;
}

.foodname{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}

.loc{
  margin-left: 2%;
  height:15px;
  width:15px;
}


.footnote{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}

.h1{
  width: 100%;
  display: flex;
}

.love{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 8%;
  display: flex;
}
.like{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.like-num{
  font-size: 10px;
  color: #8f8f94;
}
</style>