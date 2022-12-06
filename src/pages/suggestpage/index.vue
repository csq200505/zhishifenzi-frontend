<template>
  <view class="title">
    <view class = "top_text">个性推荐</view>
  </view>

  <view class = "container">
    <view class = "sub-card1" v-for="(data,index) in array1"
    @click = "toDetail(data.id)">
      <card
            :img=data.img
            :name = data.name
            :note = data.note
            :like_nums = data.like_nums
            :x = arr[Math.floor((Math.random()*arr.length))]
      ></card>
    </view>
    <view class = "sub-card2" v-for="(data,index) in array"
          @click = "toDetail(data.id)">
      <card
            :img=data.img
            :name = data.name
            :note = data.note
            :like_nums = data.like_nums
            :x = arr[Math.floor((Math.random()*arr.length))]
      ></card>
    </view>
    <view class = "sub-card3" v-for="(data,index) in array2"
          @click = "toDetail(data.id)">
      <card
            :img=data.img
            :name = data.name
            :note = data.note
            :like_nums = data.like_nums
            :x = arr[Math.floor((Math.random()*arr.length))]
      ></card>
    </view>
  </view>
</template>

<script>
import card from '../suggestpage/components/card'
import {getSuggestion} from "../../service/apis";
import {ref} from "vue";
let id
// let array1 =  reactive([
//   {
//     img:"/static/item5.jpeg",
//     id:"002",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   }
// ])
// let array2 =  reactive([
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"011",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   }
// ])
// let array = reactive([
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"003",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"004",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"005",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"006",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"007",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"008",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"009",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   },
//   {
//     img:"https://i.postimg.cc/fR6Qvpx1/z.png",
//     id:"012",
//     name:"Bigbear韩国炸鸡",
//     note:"超级好吃的炸鸡",
//     like_nums:3243
//   }
// ])
let array1 = ref([])
let array2 = ref([])
let array = ref([])
let arr =['超级好吃！','饭友推荐~','今日最佳','大家快来！','多人收藏']

export default {
  data() {
    return {
      array1,array,array2,arr
    }
  },
  components:{
    card
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
        this.getData()
      }
    })

  },
  methods:{
    getData:() => {
      console.log("*")
      getSuggestion(id).then((res) => {
        console.log(res)
        if(res.code==1){
          let tmp = res.data
          let tmp1 = []
          let tmp2 = []
          tmp1.push(tmp[9])
          tmp.pop()
          tmp2.push(tmp[8])
          tmp.pop()
          array.value = tmp
          array1.value = tmp1
          array2.value = tmp2
        }else{}
      })
    },
    toDetail(id) {
       console.log(id+'*')
      uni.navigateTo({
        url: '../detailpage/index?foodid='+id
      })
    }
  }
}
</script>

<style scoped>
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
.container{
  background-color: #FBCA1F;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 0.5%;
  padding-right: 0.5%;
  height: 1250px;
}

.sub-card1{
  width:50%;
  height: 220px;
}

.sub-card2{
  width:50%;
  height: 250px;
}

.sub-card3{
  width:50%;
  height: 220px;
}

</style>