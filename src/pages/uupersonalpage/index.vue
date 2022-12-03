<template>
 
      <!--个人简介部分-->
      <view class="personINFO">
        <view class="INFO1">
          <image class="tx" :src=touxiang></image>
          <view class="text">
            <p class="tag1">昵称 |</p>
            <p class="tag2">签名 |</p>
            <p class="name">{{uuid}}</p>
            <p class="motto">{{signature}}</p>
            <p class="line1"></p>
          </view>
      </view>

        <view class="INFO2">
          <view class="tag">
            <p class="tag3">性别 |</p>
            <p class="tag5">美食标签 |</p>
          </view>
          <view class="detail">
            <p class="sex">{{sex}}</p>
            <p class="foodTag">晓彭肥肠鸡</p>
          </view>
          <p class="line2"></p>
        </view>
      </view>
  <view class="collectlist">
    <image class="star1" src="../../static/like.png"></image>
    <p class="line">Ta的收藏</p>
  </view>
  <view class = "container">
    <view class = "sub-card" v-for="(data,index) in array"
          @click = "toDetail(data.food_id)">
      <card
          :img=data.img
      ></card>
    </view>
  </view>
  

  <view class="button">
<!--    <button class="b2" v-on:click="toChat">私信</button>-->
    <button class="b1" v-on:click="toGetUU">加为好友</button>
  </view>

</template>


<script>
import {personalInfo} from "../../service/apis";
import {ref} from "vue";
import card from "./components/card";

let uuid = ref("")

const touxiang = ref("/static/item6.jpg")
const signature = ref("...")
const array = ref([])
const sex = ref("男")
const tags = ref([])

export default {
  data(){
    return{
      touxiang, signature,sex,tags,array, uuid
    }

  },
  components:{
    card
  },
  onLoad(e) {
    uuid.value=e.uuid;
    // uuid.value='小明'
    personalInfo(uuid.value).then((res) => {
      console.log(res)
      if(res.code == 1){
        touxiang.value = res.data[0].tximg
        signature.value = res.data[0].signature
        if(signature.value==null)signature.value='....'
        array.value = res.data[0].collectionlist
        sex.value = res.data[0].sex
        if(sex.value==null)sex.value='男'

      }
    })
    if(uuid.value.length>10)uuid.value=uuid.value.slice(0,10)+'...'
    if(signature.value.length>10)signature.value=signature.value.slice(0,10)+'...'
  },


  methods: {
    toDetail(id) {
      console.log(id+'*')
      uni.navigateTo({
        url: '../detailpage/index?foodid='+id
      })
    }

  },

}
</script>



<style scoped>
.personINFO {
  position: relative;
  top: 0ch;
}

.tx {
  height: 200rpx;
  width: 200rpx;
  border-radius:30px;
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
}
.tag1 {
  position: relative;
  width: 50px;
  margin-top: -24%;
  margin-left: 35%;
}
.tag2 {
  position: relative;
  width: 50px;
  margin-top: 5%;
  margin-left: 35%;
}
.name{
  font-weight: bolder;
  position: relative;
  margin-top: -15.5%;
  margin-left:48%;
  width: 180px;
}
.motto {
  font-weight: bolder;
  position: relative;
  margin-top: 5%;
  margin-left:48%;
  width: 180px;
}
.line1{
  border-style: groove;
  margin-top:12%;
  margin-left: 5%;
  margin-right: 5%;
}

.tag {
  color: rgb(34, 33, 33);
  position: relative;
  margin-left: 5%;
}

.tag3 {
  position: relative;
  width: 50px;
  margin-top: 5%;
  margin-left: 5%;
}
.tag5 {
  position: relative;
  width: 80px;
  margin-top: 5%;
  margin-left: 5%;
}

.detail {
  color: rgb(34, 33, 33);
  font-weight: bolder;
  position: relative;
}
.sex {
  position: relative;
  margin-top: -15.5%;
  margin-left:23%;
  width: 120px;
}
.foodTag {
  position: relative;
  margin-top: 5%;
  margin-left: 33%;
  width: 120px;
}
.line2{
  border-style: groove;
  margin-top:6%;
  margin-left: 5%;
  margin-right: 5%;
}

.collectlist{
  top:33%;
  width: 100%;
  display: flex;
  position: absolute;
}

.star1{
  width: 60rpx;
  height: 55rpx;
  position: absolute;
  margin-left:32%;
  margin-top:2.5%;
}
.line{
  font-size: 20px;
  margin-top:3%;
  color: rgb(55, 51, 51);
  margin-left: 42%;
}

.container{
  background-color: #ffffff;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: left;
  padding-left: 5%;
  padding-right: 4%;
  position: absolute;
  top: 39%;
  width: 91%;
}

.sub-card{
  width:24%;
  height: 80px;
  padding-bottom: 10px;
  padding-right: 1%;
}
.b1 {
  position: absolute;
  top: 13%;
  left: 56%;
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
</style>