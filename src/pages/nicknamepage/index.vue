<template>
  <button type="submit" style="height:50px;width:80%" v-on:click="toSubmit">确认提交</button>
  <!-- 昵称 -->
  <div class="Name">
    <span class="name_word">昵称 |</span>
    <div class="name_content">
      <input type="text" placeholder="请输入昵称"
             v-model = id
      >
    </div>
  </div>
  <image class="brand" src="/static/logosquare.jpg"></image>
</template>

<script>
import {creatNick} from "../../service/apis";
import { ref } from 'vue';

const id = ref('')
let openId = ""

export default {
  data(){
    return{
      id
    }
  },
  methods: {
    toSubmit: () => {
      console.log(id.value)
      console.log(openId)

      openId='oYFMI6geWmmVdW3JtpHfpLzJk6kE'
      if(id.value==''){
        //用户名不能为空
        uni.showToast({
              title: '用户名不能为空！',
              icon: 'error',
              duration: 2000
            }
        )
      }
      else {
        creatNick(id.value, openId).then((res) => {
          console.log(res)
          if (res.code == 1) {
            uni.setStorage({key: "id", data: id.value})
            uni.navigateTo({
              url: '../labelpage/index'
            })
          } else {
            //该用户名已存在
            uni.showToast({
                  title: '用户名已存在!',
                  icon: 'error',
                  duration: 2000
                }
            )
          }
        })
      }

      uni.navigateTo({
        url: '../labelpage/index'
      })
    }
  },
  onLoad(){
    uni.getStorage({
      key:'openId',
      success:(res) => {
        openId = res.data
        if(res.data == undefined){
          uni.navigateTo({
            url: '../loginpage/index'
          })
        }
      }
    })
  }
}
</script>

<style scoped>
/*Button*/
button {
  position: absolute;
  margin-top: 110%;
  padding: 1.3em 1.3em;
  font-size: 16px;
  margin-left: 10%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 550;
  color: #000;
  background-color: rgb(255, 193, 37);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  line-height:40%;  /*button中字体居中*/
}

button:hover {
  background-color: #F79709;
  box-shadow: 0px 15px 20px rgba(204, 143, 51, 0.6);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
.name_word{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: absolute;
  margin-top:85%;
  margin-left:23%;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
}
.name_content{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  position: absolute;
  margin-top:88.4%;
  margin-left: 43% ;
  font-size :20px;
}
.brand {
  height: 350rpx;
  width: 350rpx;
  border-radius:200px;
  position: fixed;
  top: 12%;
  left: 26%;
  box-shadow: 1px 4px 10px 1px rgba(247,151,9,0.7);/*阴影*/
}
@keyframes roll{/*创建一个动画*/
  from{ transform: rotate(-15deg);}
  to{ transform: rotate(15deg);}
}
.brand:hover{/*鼠标移上去时,设置样式*/
  animation: roll 1.8s ;/*调用动画*/
}
</style>