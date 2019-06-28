<template>
    <div id="app">
        <div class="header">
            <div class="logo">
                <img src="./assets/logo.png" alt="">
            </div>
            <div class="myself">
                <div>
                    <img src="" alt="">
                    <span>老坛酸菜</span>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="main">
              <router-view class="left">
                <router-link to="/"><a-icon type="read" theme="filled" /> 已购课程</router-link>
                <router-link to="">选课</router-link>
              </router-view>
                  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'App'
}
</script>
<style scoped>
    .header {
        width: 100%;
        height: 80px;
        background: #00A94E;
        box-sizing: border-box;
        position: relative;
    }
    .logo {
        width: 90px;
        height: 35px;
        position: absolute;
        top: 23px;
        left: 60px;
    }
    .logo img {
        display: block;
        width: 90px;
        height: 35px;
    }
    .myself {
      position: absolute;
      right: 60px;
      top:24px;
      cursor: pointer;
    }
    .myself span {
      color: #fff;
      font-size: 14px;
      margin-left: 10px;
    }
    .body {
      position: fixed;
      top:80px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #f8f8f8;
    }
  .main {
    width: 1152px;
    height:956px;
    background-color: #fff;
    margin: 24px auto;
    box-sizing: border-box;
    padding: 16px 0 16px 24px
  }
  .left {
    width: 184px;
    height: 924px;
  }
</style>


