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
        <button class="jump_button" v-on:click="toHome"><text class='button_text'>></text></button>
    </view>

</view> 
</template>
    
<script>
    export default {
        onLoad() {},
        methods: {
            toHome: () => {  //跳转到首页
                uni.switchTab({
                    url: '../homepage/index'
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
font-size: 60rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 5%;
left: 42%;
}

.box {
width: 100%;
height: 88.5%;
position:fixed;
background:white;
margin-top: 20%;
background-repeat: no-repeat;
border-radius:35px;
}

.jump_button {
margin-top: 161%;
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
top: 13%;
left: 6%;
}
.text1 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 15%;
left: 23%;
}
.choose1 {
position: fixed;
top: 14.7%;
left: 83%;
}
.item2 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 23%;
left: 6%;
}
.text2 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 25%;
left: 23%;
}
.choose2 {
position: fixed;
top: 24.7%;
left: 83%;
}

.item3 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 33%;
left: 6%;
}
.text3 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 35%;
left: 23%;
}
.choose3 {
position: fixed;
top: 34.7%;
left: 83%;
}

.item4 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 43%;
left: 6%;
}
.text4 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 45%;
left: 23%;
}
.choose4 {
position: fixed;
top: 44.7%;
left: 83%;
}

.item5 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 53%;
left: 6%;
}
.text5 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 55%;
left: 23%;
}
.choose5 {
position: fixed;
top: 54.7%;
left: 83%;
}

.item6 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 63%;
left: 6%;
}
.text6 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 65%;
left: 23%;
}
.choose6 {
position: fixed;
top: 64.7%;
left: 83%;
}

.item7 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 73%;
left: 6%;
}
.text7 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 75%;
left: 23%;
}
.choose7 {
position: fixed;
top: 74.7%;
left: 83%;
}

.item8 {
height: 100rpx;
width: 100rpx;
border-radius:200px;
position: fixed;
top: 83%;
left: 6%;
}
.text8 {
font-size: 35rpx;
color: #000000;
display: flex;
justify-content:center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
position: fixed;
top: 85%;
left: 23%;
}
.choose8 {
position: fixed;
top: 84.7%;
left: 83%;
}


</style>