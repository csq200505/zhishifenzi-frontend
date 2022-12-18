<template>
  <view class="box">
    <view class="person">
      <image class="tx" :src=img></image>
      <view class="text">
        <p class="p1">{{name}}</p>
        <view class="food_label">
          <view class="foodlabel">{{tag}}</view>
        </view>
      </view>
<!--      <image class="arrow" src="/static/arrow2.png" v-on:click="toUUinfo(id)"></image>-->
    </view>

  </view>
</template>

<script>
export default {
  props:{
    img:String,
    name:String,
    tag:Number
  },
  data() {
    return {

    }
  },
  methods: {
    toUUinfo: (id) => {               //跳转到饭uu资料
      uni.navigateTo({
        url: '../uupersonalpage/index?uuid='+id
      })
    }
  },
}
</script>

<style scoped>
.box {
  width: 86%;
  height: 100%;
  position: relative;
  background: rgb(255, 255, 255,0.9);
  margin-left: 7%;
  /*margin-bottom: 2%;*/
  /*padding-bottom: 2%;*/
  border-radius:20px;
}
.person{
  display: flex;
  width: 100%;
}
.tx {
  height: 80px;
  width: 100px;
  border-radius:20px;
  position: relative;
  margin-top: 10px;
  margin-left: 20px;
}
.text{
  width: 52%;
  /*background-color: #4cd964;*/
  margin-left: 7%;
  margin-top: 6%;
}
.p1 {
  display: flex;
  font-size: 16px;
  font-weight: normal;
}
.food_label {
  margin-top:7%;
  margin-left:-2%;
  width: 85px;
  height: 30px;
  border-radius:35px;
  background-color: #fbcb1fc5;
}
.foodlabel {
  font-size: 14px;
  color: #303030;
  text-align: center;
  padding-top: 6px;
  letter-spacing: 1px;
}

</style>