<template>
  <view>
    <view>
      <view class="weui-search-bar">
        <view class="weui-search-bar__form">
          <!-- 搜索框 -->
          <view class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="请输入搜索内容"/>
          </view>
        </view>
        <!-- 搜索按钮,调用搜索查询方法 -->
        <view class="weui-search-bar__cancel-btn" bindtap='方法名a'>搜索</view>
      </view>
    </view>
<!--    <view class="button_1_2">-->
<!--      <button class = "b1" v-on:click="toTopList">美食排行榜</button>-->
<!--      <button class = "b2">店面排行榜</button>-->
<!--    </view>-->

  </view>

  <!--index.wxml-->
  <view class="box_1">
    <image class = "go_1" src="/static/enter.png" v-on:click="toSuggest"/>
    <view class = "text_recommend">个性推荐</view>
    <view class = "text_help">帮助小主翻牌，看看要宠幸哪位佳肴</view>
    <swiper class = "mov" indicator-dots="true" indicator-color="gray" indicator-active-color="red" autoplay="true">
      <swiper-item>
        <image class="s1" :src=pageContent.data.array1[0].img v-on:click="toDetail(pageContent.data.array1[0].id)"/>
      </swiper-item>
      <swiper-item>
        <image class="s2" :src=pageContent.data.array1[1].img v-on:click="toDetail(pageContent.data.array1[1].id)"/>
      </swiper-item>
      <swiper-item>
        <image class="s3" :src=pageContent.data.array1[2].img v-on:click="toDetail(pageContent.data.array1[2].id)"/>
      </swiper-item>
      <swiper-item>
        <image class="s4" :src=pageContent.data.array1[3].img v-on:click="toDetail(pageContent.data.array1[3].id)"/>
      </swiper-item>
      <swiper-item>
        <image class="s5" :src=pageContent.data.array1[4].img v-on:click="toDetail(pageContent.data.array1[4].id)"/>
      </swiper-item>
    </swiper>
  </view>

  <view class="box_2">
    <image class = "go_2" src="/static/enter.png" v-on:click="toFanuu"/>
    <view class = "text_finduu">发现饭UU</view>
    <view class = "text_look">寻找精神灵食粮好友，偷偷看他们在吃什么！</view>

    <view class="container2">
      <view class = "sub-homeUU" v-for="(data,index) in pageContent.data.array2"
            @click = "toUUinfo(data.id)">
      <homeUU
              :img= data.img
              :id = data.id
              :similarity = data.similarity
      ></homeUU>
    </view>
    </view>
  </view>

</template>

<script>
import {getFanuu, getSuggestion} from "../../service/apis";
import homeUU from "../homepage/components/homeUU";
import {reactive} from "vue";
let id

let pageContent = reactive({
  data:{
    array1:[
      {
        img:"/static/item5.jpeg",
        id:"2223"
      },
      {
        img:"/static/item2.jpg",
        id:"2223"
      },
      {
        img:"/static/item3.jpg",
        id:"2222"
      },
      {
        img:"/static/item4.jpg",
        id:"2222"
      },
      {
        img:"/static/item5.jpeg",
        id:"2222"
      }
    ],
    array2:[
      {
        img:"/static/tx-2.jpg",
        id:"再吃1口",
        similarity:90
      },
      {
        img:"/static/tx-1.png",
        id:"再吃2口",
        similarity:90
      },
      {
        img:"/static/tx-2.jpg",
        id:"再吃3口",
        similarity:90
      },
      {
        img:"/static/tx-2.jpg",
        id:"再吃4口",
        similarity:90
      }
    ]
  }
})

export default {
  data() {
    return {
      pageContent
    }
  },
  components:{
    homeUU
  },
  onLoad() {
    uni.getStorage({
      key:'id',
      success:(res) => {
        id = res.data
        if(res.data == undefined){
          uni.navigateTo({
            url: '../loginpage/index'
          })
        }
        this.getData1()
        this.getData2()
      }
    })

  },
  methods: {
    toSuggest: () => {
      uni.navigateTo({
        url: '../suggestpage/index'
      })
    },
    toFanuu: () => {
      uni.navigateTo({
        url: '../fanuupage/index'
      })
    },
    toDetail: (id) => {
       console.log(id+'*');
      uni.navigateTo({
        url: '../detailpage/index?foodid='+id
      })
    },
    toUUinfo: (id) => {               //跳转到饭uu资料
      uni.navigateTo({
        url: '../uupersonalpage/index?uuid='+id
      })
    },
    getData1: () => {
      getSuggestion(id).then((res) => {
        if (res.code == 1) {
          console.log(res.data)
          pageContent.data = {  ...pageContent.data, array1:res.data, }
        } else {
        }
      })
    },
    getData2:() => {
      getFanuu(id).then((res) => {
        if(res.code==1){
          console.log(res.data)
          let tmp = []
          tmp.push(res.data[0],res.data[1],res.data[2],res.data[3])
          pageContent.data = {...pageContent.data,array2:tmp }
        }else{}
      })
    },
  },
}
</script>

<!-- 搜索 -->
<style scoped>
.mov{
  /*background: #FBCA1F;*/
  margin-bottom: 2%;
  height: 200px;
}
.s1{
  height: 100%;
  width: 100%;
}
.s2{
  height: 100%;
  width: 100%;
}
.s3{
  height: 100%;
  width: 100%;
}
.s4{
  height: 100%;
  width: 100%;
}
.s5{
  height: 100%;
  width: 100%;
}
.weui-search-bar {
  position: relative;
  padding: 8px 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  background-color: #FBCA1F;
  border-top: 1rpx solid #D7D6DC;
  border-bottom: 1rpx solid #D7D6DC;
}
.weui-icon-search_in-box {
  position: absolute;
  left: 10px;
  top: 7px;
}
.weui-search-bar__form {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: auto;
  flex: auto;
  border-radius: 5px;
  background: #FFFFFF;
  border: 1rpx solid #E6E6EA;
}
.weui-search-bar__box {
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}
.weui-search-bar__input {
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.weui-search-bar__cancel-btn {
  margin-left: 10px;
  line-height: 28px;
  color: #ffffff;
  white-space: nowrap;
}
.b1 {
  position: relative;
  height: 60rpx;
  width: 180rpx;
  margin-top: 10px;
  margin-left: 120rpx;
  margin-right: auto;
  margin-bottom: 7rpx;
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.8em 1.5em;
  font-weight: 900;
  font-size: 10px;
  line-height:1;
  border: 1px solid black;
  border-radius: 1.5em;
  box-shadow: 0.1em 0.1em;
  flex-direction: row;
}
.b1:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}
.b1:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}
.b2 {
  position: relative;
  height: 60rpx;
  width: 180rpx;
  margin-top: 10px;
  margin-left: 1px ;
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.8em 1.5em;
  font-weight: 900;
  font-size: 10px;
  line-height:1;
  border: 1px solid black;
  border-radius: 1.5em;
  box-shadow: 0.1em 0.1em;
  flex-direction: row;
}
.b2:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}
.b2:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}
.button_1_2
{
  display: flex;
  /*border: 1.5px solid #FBCA1F;*/
}
/**index.vue.wxss**/
.box_1{
  border: 1.5px solid #FBCA1F;
  margin: 5%2%2%2%;

  padding: 2%;
}
.text_recommend{
  font-family: SimHei;
  font-size: 20px;
  /*font-style: bold ;*/
  font-weight: bold;
}
/**app.wxss**/
.text_help{
  font-size: 13px;
  /*text-align: center;居中*/
  margin-bottom: 2%;
  color:#7f8a94;
}
.box_2{
  border: 1.5px solid #FBCA1F;
  margin: 5%2%2%2%;
  padding: 2%;
  padding-bottom: 4%;
}
.text_finduu{
  font-family: SimHei;
  font-size: 20px;
  /*font-style: italic;斜体*/
  font-weight: bold;
}
/**app.wxss**/
.text_look{
  font-size: 13px;
  /*text-align: center;居中*/
  margin-bottom: 2%;
  color:#7f8a94;
}

.container2 {
  display: flex;
  width: 100%;
  height: 170px;
  /*border: 1.5px solid #FBCA1F;*/
}
.sub-homeUU{
  width:25%;
  /*height:100%;*/
}
.go_1{
  position: absolute;
  margin-top:1%;
  margin-left:83%;
  width:30px;
  height:30px;
  z-index: 9999;
}
.go_2{
  position: absolute;
  margin-top:1%;
  margin-left:83%;
  width:30px;
  height:30px;
  z-index: 9999;
}
</style>