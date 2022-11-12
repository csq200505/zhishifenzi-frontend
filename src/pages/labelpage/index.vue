<template>
<view class="content">

    <view class="box">
        <view class="type1">
            <image class="item1" src="/static/item1.jpeg"></image> 
            <h1 class="text1">快餐便当</h1>
            <view class="choose1">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>
       
        <view class="type2">
            <image class="item2" src="/static/item2.jpg"></image> 
            <h1 class="text2">汉堡薯条</h1>
            <view class="choose2">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type3">
            <image class="item3" src="/static/item3.jpg"></image> 
            <h1 class="text3">意面披萨</h1>
            <view class="choose3">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type4">
            <image class="item4" src="/static/item4.jpg"></image> 
            <h1 class="text4">日料寿司</h1>
            <view class="choose4">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type5">
            <image class="item5" src="/static/item5.jpeg"></image> 
            <h1 class="text5">火锅香锅</h1>
            <view class="choose5">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type6">
            <image class="item6" src="/static/item6.jpg"></image> 
            <h1 class="text6">烧烤串串</h1>
            <view class="choose6">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type7">
            <image class="item7" src="/static/item7.jpg"></image> 
            <h1 class="text7">奶茶甜点</h1>
            <view class="choose7">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

        <view class="type8">
            <image class="item8" src="/static/item8.jpg"></image> 
            <h1 class="text8">轻食沙拉</h1>
            <view class="choose8">
                <switch type="checkbox" checked="{{switch2Checked}}" bindchange="switch2Change" color="orange" style="transform:scale(1.2);"/>
            </view>   
        </view>

    </view>
    

    <view class="header">
        <h1 class="title">知食</h1>
    </view>

    <view class="jump_next_page">
        <button class="jump_button" v-on:click="toStart"><text class='button_text'>></text></button>
    </view>

</view> 
</template>
    
<script>
    export default {
        onLoad() {},
        methods: {
            toStart: () => {  //跳转到登录页面
                uni.navigateTo({
                    url: '../startpage/index'
            })
        }
    },
}
</script>
    

<style scoped>
.content {
background: url("/static/bg.jpeg");
background-repeat: no-repeat;
background-size: 100% 100%; 
position: fixed; 
height: 100%; 
width: 100%; 

}

.title {
font-size: 67rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 0.5%;
left: 42%;
}

.box {
width: 100%;
height: 94%;
position:fixed;
background:white;
margin-top: 13%;
background-repeat: no-repeat;
border-radius:35px;
}

.jump_button {
margin-top: 139%;
width: 15%;
background-color: #FFD040;
color: white;
border-radius: 98rpx;
}
/* 去除按钮边框 */
button::after{
  border:none;
}

.item1 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 10%;
left: 6%;
}
.text1 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 12%;
left: 23%;
}
.choose1 {
position: fixed;
top: 11.7%;
left: 83%;
}
.item2 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 20%;
left: 6%;
}
.text2 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 22%;
left: 23%;
}
.choose2 {
position: fixed;
top: 21.7%;
left: 83%;
}

.item3 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 30%;
left: 6%;
}
.text3 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 32%;
left: 23%;
}
.choose3 {
position: fixed;
top: 31.7%;
left: 83%;
}

.item4 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 40%;
left: 6%;
}
.text4 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 42%;
left: 23%;
}
.choose4 {
position: fixed;
top: 41.7%;
left: 83%;
}

.item5 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 50%;
left: 6%;
}
.text5 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 52%;
left: 23%;
}
.choose5 {
position: fixed;
top: 51.7%;
left: 83%;
}

.item6 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 60%;
left: 6%;
}
.text6 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 62%;
left: 23%;
}
.choose6 {
position: fixed;
top: 61.7%;
left: 83%;
}

.item7 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 70%;
left: 6%;
}
.text7 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 72%;
left: 23%;
}
.choose7 {
position: fixed;
top: 71.7%;
left: 83%;
}

.item8 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 80%;
left: 6%;
}
.text8 {
font-size: 38rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 82%;
left: 23%;
}
.choose8 {
position: fixed;
top: 81.7%;
left: 83%;
}


</style>