<template>

  <view class = "food-card1" >

        <image  class = "foodpicture" :src=img />

  </view>
</template>
<script>
export default {
  props:{
    img:String
  },
  data() {
    return {
      title: 'card',
    }
  },
  methods: {

  }
}
</script>

<style>

.food-card1{
  margin-left: 1%;
  width: 97%;
  height: 100%;
  /*border: 1px solid #DCDCDC;*/
  background: #c5c5c5;
  border-radius: 10px;
}

.foodpicture{
  border-radius: 10px;
  margin-top: 3%;
  margin-left: 3%;
  width: 94%;
  height: 94%;
  z-index: 500;
}

</style>