<template>
  <div class="common">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png" alt>
      </div>
      <div class="myself">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">老坛酸菜</a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">账号管理</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
    <div class="body">
      <div class="main">
        <div class="left">
          <router-link to="/">
            <a-icon type="read" theme="filled"/>已购课程
          </router-link>
          <router-link to="/select">
            <a-icon type="appstore"/>选课
          </router-link>
        </div>
        <div class="right">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background: #00a94e;
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
  top: 24px;
  cursor: pointer;
}
.ant-dropdown-link {
  color: #fff;
  font-size: 14px;
}
.body {
  height: 1004px;
  width:100%;
  position: fixed;
  top: 80px;
  background-color: #f8f8f8;
}
.main {
  width: 1152px;
  height: 956px;
  background-color: #fff;
  margin: 24px auto;
  box-sizing: border-box;
  padding: 16px 0 16px 24px;
  display: flex;
}
.left {
  width: 184px;
  height: 924px;
  border-right: 1px solid #e8e8e8;
}
.left a {
  display: block;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  text-align: left;
  margin-bottom: 32px;
}
.left a:visited {
  text-decoration: none;
}
.left a i {
  margin-right: 12px;
}
a.router-link-exact-active {
  color: #00a94e;
  border-right: 3px solid #00a94e;
}
.right {
  width:100%;
  height: 956px;
   padding: 0 24px;
   box-sizing: border-box;
}
</style>


