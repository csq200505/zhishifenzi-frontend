<template>
  <view class="list">
    <view class="friend">
      <image class="profile" src="/static/tx-2.jpg"></image>
      <h2 class="name">再吃亿口</h2>
    </view>
  </view>

  <view class="share">
    <swiper class="swiper">
      <swiper-item>
        <image class="ph1" :src=array.img ></image>
        <view class="num">1</view>
      </swiper-item>
      <swiper-item>
        <image class="ph2" src="/static/item3.jpg"></image>
        <view class="num">2</view>
      </swiper-item>
      <swiper-item>
        <image class="ph3" src="/static/item6.jpg"></image>
        <view class="num">3</view>
      </swiper-item>
    </swiper>
  </view>

  <view class="text">
    <h1 class="content">好吃好吃好吃好吃好吃好吃好吃好吃好吃
      喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢
      大家都来吃啊！！！大家都来吃啊！！！
    </h1>
  </view>



  <view class="location">
    <image class="position" src="/static/position.png"></image>
    <h1 class="res_name">{{ array.location+array.name }}</h1>
  </view>

  <view class = "love">

    <image class = "like" :src=likeSrc.src v-on:click="doLikeClick" />
    <view class = "like_num">{{ array.like_nums }}</view>
    <image class = "collect" :src=collectSrc.src v-on:click="doCollectClick"/>
  </view>
</template>


<script>
import {doCollect, doLike,getDish} from "../../service/apis";
import {ref} from "vue";
let id
let food_id = null
let collectSrc= ref({
    src:"/static/star_empty.png"
})
let likeSrc= ref({
  src:"/static/like_empty.png"
})
let array= ref({
    img:"/static/item1.jpeg",
    location:"玫瑰一楼",
     name:"烧腊简餐",
     like_nums:0,
})

export default{
  data() {
    return{
      collectSrc,
      likeSrc,
      array
    };
  },
  onLoad(e){
    food_id=e.foodid;
    collectSrc.value.src = "/static/star_empty.png"
    likeSrc.value.src = "/static/like_empty.png"
    uni.getStorage({
      key:'id',
      success:(res) => {
        id = res.data
        console.log(id)
        if(res.data == undefined){
          uni.navigateTo({
            url: '../loginpage/index'
          })
        }
        this.getData()
      }
    })
  },
  mounted() {

  },
  methods:{
    getData: () => {
      console.log(food_id+'***')
      getDish(food_id).then((res)=>{
        console.log(res)
        if(res.code==0){
          console.log(res.data[0])
          array.value = res.data[0]
        }else{}
      })
    },
    doCollectClick: () => {
      doCollect(id,food_id).then((res)=>{
        console.log(res)
        if(res.code==1){
          collectSrc.value={src:'/static/star_full.png'}
        }else if(res.code==2){
          collectSrc.value={src:'/static/star_empty.png'}
        }else{}
       })
    },
    doLikeClick: () => {
      doLike(id,food_id).then((res)=>{
        console.log(res)
        if(res.code==1){
          likeSrc.value={src:'/static/like.png'}
          array.value = {
              ...array.value,
              like_nums:res.data[0].like_nums
          }
        }else if(res.code==2){
          likeSrc.value={src:'/static/like_empty.png'}
        }else{}
      })
    },
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
  height: 110rpx;
  width: 110rpx;
  border-radius:200px;
  border: 1px solid rgb(91, 59, 0);
  margin-top: 2%;

}
.name
{
  font-size: 40rpx;
  color: #000000;
  font-weight: bolder;
  margin-top: 6.5%;
  margin-left: 3%;
}
.swiper
{
  height:292px;
  width:100%;
  margin-top:3%;
}
.ph1
{
  width:100%;
  height:100%;
}
.ph2
{
  width:100%;
  height:100%;
}
.ph3
{
  width:100%;
  height:100%;
}
.num
{
  margin-left:95%;
  margin-top:-10%;
  font-size: 25px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:rgba(255, 255, 0, 0.795);
}
.text
{
  font-size:45rpx;
  padding: 20px;
}

.love{
  margin-left:58%;
  top:90%;
  width: 40%;
  display: flex;
  position: absolute;
}
.collect
{
  width: 85rpx;
  height: 85rpx;
  margin-left:68%;
  margin-top:-2%;
  position: absolute;
}
.like{
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  margin-left:0%;
}
.like_num{
  font-size: 22px;
  margin-top:3%;
  color: rgb(55, 51, 51);
  margin-left:29%;
}

.location
{
  display:flex;
  top:83%;
  width: 100%;
  margin-left:3%;
  position: absolute;

}
.position
{
  height: 50rpx;
  width: 50rpx;
}
.res_name
{
  font-size:40rpx;
  margin-top:0.5%;
  margin-left:1%;
  font-family: SimHei;
}
</style>
