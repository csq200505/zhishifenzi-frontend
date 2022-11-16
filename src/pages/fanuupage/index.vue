<template>
  <view class="title">
    <view class = "top_text">发现饭uu</view>
  </view>
  <view class = "container">
    <uuitem class = "sub-uuitem" v-for="(data,index) in array"
          :img=data.img
          :id = data.id
          :similarity = data.similarity
    ></uuitem>
  </view>
</template>

<script>
import uuitem from '../fanuupage/components/uuitem'
import {getFanuu} from "../../service/apis";
let array =  [
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  },
  {
    img:"/static/tx-1.png",
    id:"再吃亿口",
    similarity:90
  }

]

export default {
  data() {
    return {
      array
    }
  },
  components:{
    uuitem
  },
  onLoad() {
    this.getData()
  },
  methods:{
    getData:() => {
      getFanuu('').then((res) => {
        if(res.code==1){
          this.array = res.data
        }else{}
      })
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
  /*background-color: #FBCA1F;*/
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content: space-evenly;
  width:100%;
  padding-bottom:10px;
  padding-left: 3%;
}

.sub-uuitem{
  width:94%;
}
</style>