<template>
  <view class = "all">
    <view class="title">
      <view class = "top_text">个性推荐</view>
    </view>
    <view class = "food">
      <view class = "line_1">
        <view class = "food_1">
          <image class = "picture_1" src="https://i.postimg.cc/fR6Qvpx1/z.png" />
          <view class = "h1">
            <view class = "name_1">Bigbear韩国炸鸡</view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_1">超级好吃的炸鸡</view>
          <view class = "love1">
            <image class = "like_1" src="/static/like.png" />
            <view class = "num_1">3243</view>
          </view>
        </view>
        <view class = food_2>
          <image class = "picture_2" src="https://i.postimg.cc/JzhdBqvv/h.png" />
          <view class = "h2">
            <view class = "name_2">汉霸王 </view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_2">汉堡薯条优质商家</view>
          <view class = "love2">
            <image class = "like_2" src="/static/like.png" />
            <view class = "num_2">1343</view>
          </view>
        </view>
        <view class = food_3>
          <image class = "picture_3" src="https://i.postimg.cc/Qxprbh85/000.png" />
          <view class = "h3">
            <view class = "name_3"> 杨国福 </view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_3">精选品牌</view>
          <view class = "love3">
            <image class = "like_3" src="/static/like.png" />
            <view class = "num_3">1343</view>
          </view>
        </view>
      </view>

      <view class = "line_2">
        <view class = food_4>
          <image class = "picture_4" src="https://i.postimg.cc/Qxprbh85/000.png" />
          <view class = "h4">
            <view class = "name_4"> 杨国福 </view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_4">精选品牌</view>
          <view class = "love4">
            <image class = "like_4" src="/static/like.png" />
            <view class = "num_4">1343</view>
          </view>
        </view>
        <view class = "food_5">
          <image class = "picture_5" src="https://i.postimg.cc/fR6Qvpx1/z.png" />
          <view class = "h5">
            <view class = "name_5">Bigbear韩国炸鸡</view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_5">超级好吃的炸鸡</view>
          <view class = "love5">
            <image class = "like_5" src="/static/like.png" />
            <view class = "num_5">1343</view>
          </view>
        </view>
        <view class = food_6>
          <image class = "picture_6" src="https://i.postimg.cc/JzhdBqvv/h.png" />
          <view class = "h6">
            <view class = "name_6">汉霸王 </view>
            <image class = "loc_1" src="/static/location.png" />
          </view>
          <view class = "footnote_6">汉堡薯条优质商家</view>
          <view class = "love6">
            <image class = "like_6" src="/static/like.png" />
            <view class = "num_6">1343</view>
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
.all{
  background: #FBCA1F;
}
.food{
  display: flex;
}
.title{
  flex:1;
  height:40px;
  /*border: 1.5px solid #DCDCDC;*/
  background: white;
}
.top_text{
  font-weight:normal;
  font-family: STZhongsong;
  font-size: 22px;
  text-align: center;
  padding-top: 6px;
  letter-spacing: 2.5px;
}
.line_1{
  margin-left: 1.33%;
  width: 48%;
}

.line_2{
  margin-left: 1.33%;
  width: 48%;
}
.food_1{
  width: 100%;
  height: 220px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
}
.food_2{
  width: 100%;
  height: 220px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
}
.food_3{
  width: 100%;
  height: 190px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
  margin-bottom: 2%;
}
.food_4{
  width: 100%;
  height: 190px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
}
.food_5{
  width: 100%;
  height: 220px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
}
.food_6{
  width: 100%;
  height: 220px;
  /*border: 1px solid #DCDCDC;*/
  background: white;
  margin-top: 3%;
  border-radius: 4px;
  margin-bottom: 2%;
}
.picture_1{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 74%;
}
.picture_2{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 74%;
}
.picture_3{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 70%;
}
.picture_4{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 70%;
}
.picture_5{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 74%;
}
.picture_6{
  border-radius: 6px;
  margin-top: 2%;
  margin-left: 4%;
  width: 93%;
  height: 74%;
}
.name_1{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.name_2{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.name_3{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.name_4{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.name_5{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.name_6{
  font-size: 14px;
  margin-left: 7px;
  font-family: SimHei;
  font-weight:bold;
}
.footnote_1{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.footnote_2{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.footnote_3{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.footnote_4{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.footnote_5{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.footnote_6{
  margin-top: 2px;
  font-size: 11px;
  margin-left:7px;
  color: #8f8f94;
}
.h1{
  width: 100%;
  display: flex;
}
.h2{
  width: 100%;
  display: flex;
}
.h3{
  width: 100%;
  display: flex;
}
.h4{
  width: 100%;
  display: flex;
}
.h5{
  width: 100%;
  display: flex;
}
.h6{
  width: 100%;
  display: flex;
}
.loc_1{
  margin-left: 2%;
  height:15px;
  width:15px;
}

.love1{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 8%;
  display: flex;
}
.like_1{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_1{
  font-size: 10px;
  color: #8f8f94;
}
.love2{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 8%;
  display: flex;
}
.like_2{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_2{
  font-size: 10px;
  color: #8f8f94;
}
.love3{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 9%;
  display: flex;
}
.like_3{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_3{
  font-size: 10px;
  color: #8f8f94;
}
.love4{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 9%;
  display: flex;
}
.like_4{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_4{
  font-size: 10px;
  color: #8f8f94;
}
.love5{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 8%;
  display: flex;
}
.like_5{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_5{
  font-size: 10px;
  color: #8f8f94;
}

.love6{
  margin-left:50%;
  /*background: #4cd964;*/
  width: 50%;
  height: 8%;
  display: flex;
}
.like_6{
  width: 16%;
  height: 80%;
  margin-left: 53%;
}
.num_6{
  font-size: 10px;
  color: #8f8f94;
}
</style>