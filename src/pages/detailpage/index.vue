<template>

  <view class="share">
    <view class="photo">
        <image class="ph1" :src=array.img ></image>
    </view>
  </view>

  <view class="food_info">
  <view class="food_title">
    <view class="foodname">鸡排蛋包饭</view>
  </view>
    <view class="foodprice">
      <view class="food_lp">
      <view class="money_label">￥</view>
      <view class="price">15</view>
    </view>
  
  <view class="food_label">
      <view class="foodlabel">快餐便当</view>
    </view>
  
</view>
</view>

  <view class="text">
    <view class="content">好吃好吃好吃好吃好吃好吃好吃好吃好吃
      喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢 喜欢喜欢喜欢
      大家都来吃啊！！！大家都来吃啊！！！
    </view>
  </view>



  <view class="location">
    <image class="position" src="/static/position.png"></image>
    <h1 class="res_name">{{ array.location+"+店名"}}</h1>
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

.photo
{
  height:320px;
  width:100%;
  /* margin-top:3%; */
}
.ph1
{
  width:100%;
  height:100%;
  /* border-radius:15px; */
}
.food_info
{
  margin-left:1%;
}
.food_title
{
  /* background:orange; */
  margin-left:3%;
  margin-top:5%;
  /* display: flex; */
} 
.foodname
{
  font-size: 35px;
}
.foodprice
{
  margin-left:3%;
  margin-top:1%;
  display: flex;
}
.food_lp
{
  color:rgb(255, 77, 0);
  display: flex;
  margin-top:1%;
 
}

.money_label
{
  font-size: 20px;
  margin-top:8%;
  
  
}
.price
{
  font-size: 25px;
  margin-left:-2%;
 
  
}
.food_label
{
  margin-top:2%;
  margin-left:6%;
  width: 100px;
  height: 30px;
  border-radius:35px;
  background-color: #fbcb1fc5;
  
}
.foodlabel
{
  font-size: 20px;
  margin-left:8%;
}

.text
{
  margin-top:3%;
  margin-left:2%;
  width: 96%;
  
  background-color: rgb(249, 249, 249);
  /* background-color: aqua; */
  border-radius:20px;
 
}
.content
{
  font-size:25px;
  padding: 12px;
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
  margin-top:4%;
  display:flex;
  top:83%;
  width: 100%;
  margin-left:3%;
  position: absolute;

}
.position
{
  height: 60rpx;
  width: 60rpx;
}
.res_name
{
  font-size:40rpx;
  margin-top:0.5%;
  margin-left:1%;
}
</style>
