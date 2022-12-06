<template>
 
      <!--个人简介部分-->
      <view class="personINFO">
        <view class="INFO1">
          <image class="tx" :src=touxiang></image>
          <view class="text1">
            <p class="tag1">昵称 |</p>
            <p class="name">{{uuid}}</p>
          </view>
          <view class="text2">
            <p class="tag2">签名 |</p>
            <p class="motto">{{signature}}</p>
          </view>
          <p class="line1"></p>
          <button class="b1" v-on:click="toGetUU">加为好友</button>
      </view>

        <view class="INFO2">
          <view class="text3">
            <p class="tag3">性别 |</p>
            <p class="sex">{{sex}}</p>
          </view>
          <view class="text4">
            <p class="tag4">美食标签 |</p>
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
    //uuid.value='小明'
    personalInfo(uuid.value).then((res) => {
      console.log(res)
      if(res.code == 1){
        touxiang.value = res.data[0].tximg
        signature.value = res.data[0].signature
        if(signature.value==null)signature.value=''
        array.value = res.data[0].collectionlist
        sex.value = res.data[0].sex
        if(sex.value==null)sex.value='男'
        if(uuid.value.length>9)uuid.value=uuid.value.slice(0,9)+'...'
        if(signature.value.length>9)signature.value=signature.value.slice(0,9)+'...'
      }else{
        if(uuid.value.length>9)uuid.value=uuid.value.slice(0,9)+'...'
        if(signature.value.length>9)signature.value=signature.value.slice(0,9)+'...'
      }

    })

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
.INFO1{
  position: relative;
}
.INFO2{
  position: relative;
}
.tx {
  height: 200rpx;
  width: 200rpx;
  border-radius:30px;
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
}


.text1{
  margin-left:37%;
  margin-top:-22%;
  width: 100%;
  display: flex;
  position: relative;
}
.tag1 {
  position: absolute;
}
.name{
  margin-left: 55px;
  margin-top: -2px;
  position: absolute;
  font-size: 19px;
  font-weight: bold;
  width: 190px;
}
.text2{
  margin-left:37%;
  margin-top:10%;
  width: 100%;
  display: flex;
  position: relative;
}
.tag2 {
  position: absolute;
}
.motto{
  margin-left: 55px;
  margin-top: -2px;
  position: absolute;
  font-size: 19px;
  font-weight: bold;
  width: 190px;
}
.line1{
  border-style: groove;
  margin-top:18%;
  margin-left: 5%;
  margin-right: 5%;
}

.text3{
  margin-left:10%;
  margin-top:5%;
  width: 100%;
  display: flex;
  position: relative;
}
.tag3 {
  position: absolute;
}
.sex{
  margin-left: 55px;
  margin-top: -2px;
  position: absolute;
  font-size: 19px;
  font-weight: bold;
  width: 190px;
}
.text4{
  margin-left:10%;
  margin-top:10%;
  width: 100%;
  display: flex;
  position: relative;
}
.tag4 {
  position: absolute;
}
.foodTag{
  margin-left: 90px;
  margin-top: -2px;
  position: absolute;
  font-size: 19px;
  font-weight: bold;
  width: 190px;
}
.line2{
  border-style: groove;
  margin-top:10%;
  margin-left: 5%;
  margin-right: 5%;
}




.collectlist{
  margin-top:0%;
  width: 100%;
  display: flex;
  position: relative;
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
  margin-top: 3%;
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
  margin-top: -82rpx;
  left: 56%;
  height: 60rpx;
  width: 160rpx;
  margin-left: 120rpx;
  margin-right: auto;
  margin-bottom: 7rpx;
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.8em 1.5em;
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