<template>
<!-- 头像 -->
<div class="photo">
  <img class="img" :src =source>
  <span class="word">头像</span>
</div>

<!-- 昵称 -->
<div class="Name">
  <span class="name_word">昵称</span>
  <div class="name_content">
    <input type="text" :placeholder=id disabled>
  </div>
</div>

<!-- 性别 -->
<div class="sex">
  <span class="sex_word">性别</span>
</div>
  <checkbox-group @change = "clickSex(1)" >
    <label class="male"><checkbox style="transform: scale(0.7)" color="#F79709" :checked="checkSex(1)">男</checkbox></label>
  </checkbox-group>
  <checkbox-group @change = "clickSex(2)" >
    <label class="female"><checkbox style="transform: scale(0.7)" color="#F79709" :checked="checkSex(2)">女</checkbox></label>
    </checkbox-group>
<!-- 身份 -->
<div class="birthday">
  <span class="bir_word">身份</span>
</div>
  <checkbox-group @change = "clickIdentity(1)" >
    <label class="student"><checkbox style="transform: scale(0.7)" color="#F79709" :checked = "checkIdentity(1)">学生</checkbox></label>
  </checkbox-group>
  <checkbox-group @change = "clickIdentity(2)" >
    <label class="staff"><checkbox style="transform: scale(0.7)" color="#F79709" :checked = "checkIdentity(2)">教职工</checkbox></label>
  </checkbox-group>
<!-- 签名 -->
<div class="sentence">
  <span class="sen_word">签名</span>
  <div class="sen_content">
    <input type="text" placeholder="谁动了我的奶酪？"
         v-model=signature
    >
  </div>
</div>

    <view class="button">
      <button class="b1" v-on:click="submit">提交</button>
    </view>
</template>

<script>
import { ref } from 'vue'
import {personalInfo, setInfo} from "../../service/apis";

const checkSex = (value) => {
  if(value === sex.value){
    return true;
  }
  return false;
}

const checkIdentity = (value) =>{
  if(value === identity.value){
    return true;
  }
  return false;
}

const clickSex = (value) => {
  if(value == sex.value){
    return;
  }else{
    sex.value = value
  }
}

const clickIdentity = (value) => {
  if(value == identity.value){
    return;
  }else{
    identity.value = value
  }
}

const submit = () => {
  setInfo(id.value,source.value,sex.value,identity.value,signature.value)
      .then((res) => {
        if(res.code == 1){
          uni.showToast({
            title:"修改成功",
            duration:2000
          })
        }else{
          uni.showToast({
            title:"修改失败",
            icon:'error',
            duration:2000
          })
        }
      })

}
const id = ref("")

const sex = ref(1)

const identity = ref(1)

const source = ref("/static/tx-1.png")

const signature = ref("")

export default {
  name: "index",
  data(){
    return {
      sex, identity,
      source, signature,id
    }
  },
  methods:{
    checkSex,
    checkIdentity,
    clickSex,
    clickIdentity,
    submit,
  },
  onLoad(){
    uni.getStorage({
      key:'id',
      success:(res) => {
        id.value = res.data
        console.log(id.value)
        if(res.data == undefined){
          uni.navigateTo({
            url: '../loginpage/index'
          })
        }else{
          personalInfo(id.value).then((res) => {
            if(res.code == 1){
              source.value = res.data[0].tximg
              signature.value = res.data[0].signature
              sex.value=res.data[0].sex
              identity.value=res.data[0].identity
            }
          })

        }
      }
    })
  }
}
</script>

<style scoped>
/* 头像 */
.img {
  display: flex;
  margin: 60px auto 10px auto;
  width: 80px;
  height: 80px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  font-size: 8px;
  position: absolute;
  transition: all 0.5s;
  z-index: 99;
  margin-top:6%;
  margin-left: 20%;
}


.word {
  position:absolute;
  top: 79rpx;
  left: 33rpx;
  padding: 10px;
  font-weight: 250;
  font-size: 13px;
}


/* 昵称 */
.name_word{
  position: absolute;
  top:220rpx;
  left:33rpx;
  padding: 10px;
  font-weight: 250;
  font-size: 13px;
}
.name_content{
  position: absolute;
  top:233rpx;
  left: 150rpx ;
  font-size :13px;
}

/* 性别 */
.sex_word{
  position:absolute;
  top: 330rpx;
  left: 33rpx;
  padding: 10px;
  font-weight: 250;
  font-size: 13px;
}
/* 生日 */
.bir_word{
  position:absolute;
  top: 440rpx;
  left: 33rpx;
  padding: 10px;
  font-weight: 250;
  font-size: 13px;
}
/* 签名 */
.sen_word{
  position:absolute;
  top: 545rpx;
  left: 33rpx;
  padding: 10px;
  font-weight: 250;
  font-size: 13px;
}
.sen_content{
  position: absolute;
  top:558rpx;
  left: 150rpx ;
  font-size :13px;
}

.male{
  position: fixed;
  margin-top: 45.5%;
  margin-left:17%;
}
.female{
  position: fixed;
  margin-top: 45.5%;
  margin-left:40%;
}

.student{
  position: fixed;
  margin-top: 60%;
  margin-left:16%;
}
.staff{
  position:fixed;
  margin-top: 60%;
  margin-left:38.5%;
}

.b1 {
  position: fixed;
  top: 60%;
  left: 23%;
  height: 60rpx;
  width: 160rpx;
  margin-top: 10rpx;
  margin-left: 120rpx;
  margin-right: auto;
  margin-bottom: 7rpx;
  background: #FBCA1F;
  font-family: inherit;
  font-weight: 900;
  font-size: 14px;
  padding-left: 20px;
  letter-spacing: 5px;
  padding-top: 6px;
  line-height:1;
  border: 1px solid black;
  border-radius: 1.5em;
  box-shadow: 0.1em 0.1em;
  flex-direction: row;
}
</style>