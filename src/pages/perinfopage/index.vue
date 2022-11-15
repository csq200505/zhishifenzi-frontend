<template>
<!-- 头像 -->
<div class="photo">
  <div class="img">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(0,0,0,1)"></path></svg>
  </div>
  <span class="word">头像</span>
</div>

<!-- 昵称 -->
<div class="Name">
  <span class="name_word">昵称</span>
  <div class="name_content">
    <input type="text" placeholder="贴一张芝士面膜">
  </div>
</div>

<!-- 性别 -->
<div class="sex">
  <span class="sex_word">性别</span>
</div>
<label class="male"><checkbox value="sexPick" style="transform: scale(0.7)" color="#F79709" checked>男</checkbox></label>
<label class="female"><checkbox value="sexPick" style="transform: scale(0.7)" color="#F79709" >女</checkbox></label>

<!-- 身份 -->
<div class="birthday">
  <span class="bir_word">身份</span>
</div>
<label class="student"><checkbox value="occupPick" style="transform: scale(0.7)" color="#F79709" checked>学生</checkbox></label>
<label class="staff"><checkbox value="occupPick" style="transform: scale(0.7)" color="#F79709" >教职工</checkbox></label>


<!-- 签名 -->
<div class="sentence">
  <span class="sen_word">签名</span>
  <div class="sen_content">
    <input type="text" placeholder="谁动了我的奶酪？">
  </div>
</div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
/* 头像 */
.img {
  display: flex;
  margin: 60px auto 10px auto;
  width: 55px;
  height: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  font-size: 8px;
  position: absolute;
  transition: all 0.5s;
  z-index: 99;
  background-color: #152f50;
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

svg {
  padding: 0 5px;
  cursor: pointer;
}

.photo:hover .img {
  transform: scale(1.1);
  border: 1px solid #f0f0f0;
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
</style>