<template>
  <!--黄色背景板-->
  <view class="yellowBackgound">    
    <!--白色背景板-->
    <view class="whiteBackgound">   
      <!--个人简介部分-->
      <view class="personINFO">
        <image class="tx" :src=touxiang v-on:click="toPerinfo"></image>
        <view class="INFO">
          <p class="name">{{ id }}</p>
          <p class="motto">{{ signature }}</p>
        </view>
      </view>
    </view>
    <view class="collectlist">
      <image class="like" src="../../static/like.png"></image>
      <p class="line">我的收藏</p>
    </view>

    <view class = "container">
      <view class = "sub-card" v-for="(data,index) in array"
            @click = "toDetail(data.food_id)">
        <card
            :img=data.img
            :name=data.food_name
            :tag=typeChange(data.tag)
        ></card>
      </view>
    </view>
  </view>


</template>


<script>
import {personalInfo} from "../../service/apis";
import { ref } from "vue";
import card from "./components/card";
import {typeName} from "../../common/foodtype";
let id = ref("贴一张芝士面膜")
let touxiang = ref("/static/tx-1.png")
let array = ref([])
let signature = ref("谁动了我的奶酪")
export default {
  data() {
    return {
      touxiang,
      id,
      signature,
      array
    }
  },
  components:{
    card
  },
  onShow() {
    uni.getStorage({
      key:'id',
      success:(res) => {
        id.value = res.data
        if(res.data == undefined){
          uni.navigateTo({
            url: '../loginpage/index'
          })
        }
        this.getData()
      }
    })

  },
  methods: {
    toLogin: () => {               //跳转到登陆页面
      uni.navigateTo({
        url: '../loginpage/index'
      })
    },
    toPerinfo: () => {               //跳转到个人资料
      uni.navigateTo({
        url: '../perinfopage/index'
      })
    },
    getData: () => {
      personalInfo(id.value).then((res) => {
        if (res.code == 1) {
          touxiang.value = res.data[0].tximg
          signature.value = res.data[0].signature
          if(signature.value==null)signature.value='....'
          array.value = res.data[0].collectionlist
          if(id.value.length>9)id.value=id.value.slice(0,9)+'...'
          if(signature.value.length>23)signature.value=signature.value.slice(0,23)+'...'
        } else {
          if(id.value.length>9)id.value=id.value.slice(0,9)+'...'
          if(signature.value.length>23)signature.value=signature.value.slice(0,23)+'...'
        }
      })
    },
    toDetail(id) {
     console.log(id+'*')
     uni.navigateTo({
       url: '../detailpage/index?foodid='+id
     })
   },
    typeChange(tag){
      return typeName(tag)
    }
 }

}
</script>



<style scoped>

.yellowBackgound {
background: url("/static/background.jpg");
background-repeat: no-repeat;
background-size: 100% 100%;
position: absolute;
margin-top: 0%;
height: 100%;
width: 100%; 
}

.whiteBackgound {
width: 100%;
height: 28%;
position:relative;
background:white;
margin-top: 0%;
background-repeat: no-repeat;
border-radius:35px;

}

.name{
  font-size: 19px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  position: absolute;
  top: 52%;
  left: 8%;
  width: 55%;
}
.motto {
  font-family: 'Times New Roman', Times, serif;
  color: grey;
  position: absolute;
  top: 68%;
  left: 8%;
  width: 55%;
  line-height: 25px;
}
.tx {
  height: 200rpx;
  width: 200rpx;
  border-radius:30px;
  border: 2px solid #a5a5a5;
  position: absolute;
  background: rgb(253, 205, 65,0.1);
  top: 42%;
  left:65%;
}
.collectlist{
  margin-top:2%;
  width: 100%;
  display: flex;
  position: relative;
}

.like{
  width: 60rpx;
  height: 55rpx;
  position: absolute;
  margin-left:32%;
  margin-top:2.8%;
}
.line{
  font-size: 21px;
  margin-top:3%;
  color: rgb(55, 51, 51);
  margin-left: 42%;
}

/*.container{*/
/*  background-color: #fdcd3f;*/
/*  display:flex;*/
/*  flex-direction:row;*/
/*  flex-wrap: wrap;*/
/*  justify-content: left;*/
/*  padding-left: 5%;*/
/*  padding-right: 4%;*/
/*  position: absolute;*/
/*  margin-top: 3%;*/
/*  width: 91%;*/
/*}*/

/*.sub-card{*/
/*  width:24%;*/
/*  height: 80px;*/
/*  padding-bottom: 10px;*/
/*  padding-right: 1%;*/
/*}*/
.container{
    background-color: #fdcd3f;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content: space-evenly;
  width:100%;
  padding-bottom:10px;
}

.sub-card{
  margin-top: 15px;
  width:100%;
  height: 100px;
}

</style>