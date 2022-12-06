<template>
  <view>
  <view class="title">
    <view class = "top_text">热门美食奉之</view>
  </view>
  <view class="collectlist">
    <p style="border-style: groove"></p>
  </view>
  <!-- 8个label -->
  <view class="outerBox">
    <div class="frontBox" :class="[item.showCode ? 'frontBox' : 'laterBox']" v-for="(item,index) in dataList" :key="index"
         @click="onCilck(index)">
      <div>{{item.name}}</div>
    </div>
  </view>

  <view class = "container">
    <view class = "sub-card" v-for="(data,index) in array"
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
  </view>
</template>

<script>
import card from '../toplistpage/components/card'
import {foodTopList} from "../../service/apis";
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
let array = ref([])
let arr =['超级好吃！','饭友推荐~','今日最佳','大家快来！','多人收藏']
let num=30

const currentTab = ref(0)
export default {
  data() {
    return {
      array,
      currentTab,
      arr,
      dataList: [
        {
          name: "全部美食",
          showCode: true,
        },{
          name: "快餐便当",
          showCode: true,
        },
        {
          name: "米粉面食",
          showCode: true,
        },
        {
          name: "汉堡西餐",
          showCode: true,
        },
        {
          name: "日韩料理",
          showCode: true,
        },
        {
          name: "香锅水煮",
          showCode: true,
        },
        {
          name: "烧烤串串",
          showCode: true,
        },
        {
          name: "奶茶甜点",
          showCode: true,
        },
        {
          name: "轻食小吃",
          showCode: true,
        },
      ],
    };
  },
  mounted() {
    //如果需要默认选择某一个，指定该div下标为false即可
    this.dataList[currentTab.value].showCode = false
  },
  components:{
    card
  },
  onShow() {
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
      if(currentTab.value==0)currentTab.value='all'
      else currentTab.value=String(currentTab.value)
      foodTopList(currentTab.value,num).then((res) => {
        console.log(res)

          array.value = res.data

      })
      if(currentTab.value=='all')currentTab.value=0
      else currentTab.value=Number(currentTab.value)
    },
    toDetail(id) {
      console.log(id+'*')
      uni.navigateTo({
        url: '../detailpage/index?foodid='+id
      })
    },
    // 点击事件
    onCilck(index) {
      for (var i = 0; i < this.dataList.length; i++) {
        // index：当前点击的div下标（通过点击事件触发拿到的）
        // i：循环拿到的每一条div下标
        if (index == i) {
          // 通过将两者比较得出应该展示哪一种样式
          // this.dataList[i].showCode = false;//点击当前div，再次点击当前div不会恢复默认样式，必须点击其他div才会恢复默认样式
          this.dataList[i].showCode = !this.dataList[i].showCode; //点击当前div，再次点击当前div恢复默认样式，无需点击其他div恢复默认样式
        } else {
          this.dataList[i].showCode = true;
        }
      }
      currentTab.value = index
      if(currentTab.value==0)currentTab.value='all'
      else currentTab.value=String(currentTab.value)
      foodTopList(currentTab.value,num).then((res) => {
        console.log(res)

          array.value = res.data

      })
      if(currentTab.value=='all')currentTab.value=0
      else currentTab.value=Number(currentTab.value)
    },
  }
}
</script>

<style scoped>
.title{
  flex:1;
  height:40px;
  /*border: 1.5px solid #DCDCDC;*/
  background: white;
  color: black;
}
.top_text{
  font-weight:normal;
  font-family: STZhongsong;
  font-size: 23px;
  text-align: center;
  padding-top: 6px;
  letter-spacing: 2.5px;
}
.tag_text{
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
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 1%;
  padding-top: 5px;
  padding-left: 0.5%;
  padding-right: 0.5%;
  position: relative;
}

.collectlist {
  position: relative;
}

.sub-card{
  width:50%;
  height: 250px;
  padding-bottom: 5px;
}

.outerBox {
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 1%;
}
/* 公共样式 */
.frontBox {
  cursor: pointer;
  padding: 2%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  align-content: center;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  margin-left: 1.9%;
}
/* 默认样式 */
.frontBox {
  font-weight:normal;
  background: white;
  color: black;
  width:5% ;
  height:90px;

}
/* 点击后样式 */
.laterBox {
  background: #FBCA1F;
  color: #151515;
  width:5% ;
  height:90px;
  font-weight:normal;
  align-content: center;

}

</style>