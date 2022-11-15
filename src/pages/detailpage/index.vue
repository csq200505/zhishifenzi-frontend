<template>
  <view class="list">
    <view class="friend">
      <image class="profile" src="/static/item8.jpg"></image>
      <h2 class="name">再吃亿口</h2>
    </view>
  </view>

  <view class="share">
    <swiper class="swiper">
      <swiper-item>
        <image  src="/static/item7.jpg"></image>
        <view class="num">1</view>
      </swiper-item>
      <swiper-item>
        <image  src="/static/item3.jpg"></image>
        <view class="num">2</view>
      </swiper-item>
      <swiper-item>
        <image src="/static/item6.jpg"></image>
        <view class="num">3</view>
      </swiper-item>
    </swiper>
  </view>

  <view class="text">
    <h1 class="content">好吃好吃好吃好吃好吃好吃好吃好吃好吃
      喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢
    </h1>
  </view>

  <view class="comment">
    <h1 class="comment_title">打分</h1>


    <div>
      <div class="comment-container">
        <!-- 标签评分 -->
        <div style="display: flex;margin-bottom: 10px">
          <div class="comment-container-item-label-box" v-for="n in 5" :key="index" @click="selected(n)">
            <img class="comment-container-item1" v-show="cur<n"
                 src="/static/star_empty.png"/>
            <img class="comment-container-item1" v-show="cur>=n"
                 src="/static/star_full.png"/>
          </div>
        </div>
      </div>
    </div>
  </view>

  <view class="location">
    <image class="position" src="/static/position.png"></image>
    <h1 class="res_name">玫瑰园一楼</h1>
  </view>

</template>

<script>
export default {
  name: "integralComment",
  data() {
    return {
      cur: -1,//评分星星下标
    }
  },
  methods: {
    //评分点击事件
    selected(n){
      this.cur = n - 1
      console.log(this.cur)
    }

  }
}
</script>

<style scoped>

.friend
{
  display:flex;
  margin-left: 1%;
}
.profile
{
  height: 100rpx;
  width: 100rpx;
  border-radius:200px;
  border: 1px solid rgb(91, 59, 0);
  margin-top: 2%;

}
.name
{
  font-size: 35rpx;
  color: #000000;
  font-weight: bolder;
  margin-top: 6.5%;
  margin-left: 3%;
}
.swiper
{
  height:300px;
  margin-top:1.5%;
}
.num
{
  margin-left:95%;
  margin-top:-8%;
  font-size: 39rpx;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:rgba(255, 255, 0, 0.795);
}
.text
{
  font-size:50rpx;
  margin-top:-13%;
}
.comment
{
  display:flex;
  margin-top:-2%;
}
.comment_title
{
  font-size:50rpx;
  margin-top:6.5%;
  font-family: SimHei;

}
.comment-container
{
  padding: 15px;
  margin-left:-5%;
}
.comment-container-item-label-box
{
  padding: 6px 0px;
  display:flex;
  align-items: center;
  justify-content:end;
}

.comment-container-item1
{
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.imgurl-item
{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
.location
{
  display:flex;
  margin-top:-5%;
}
.position
{
  height: 65rpx;
  width: 65rpx;
}
.res_name
{
  font-size:50rpx;
  margin-top:0.5%;
  margin-left:1%;
  font-family: SimHei;
}
</style>