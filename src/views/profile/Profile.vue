<template>
  <div id="profile">
    <div class="profile-nav-bar">
      <nav-bar>
        <template #nb-center>三月半商城</template>
      </nav-bar>
    </div>
    <div class="profile-user">
      <div class="pu-img">
        <img src="@/assets/img/profile/avatar.svg" alt />
      </div>
      <div class="pu-login" @click="loginClick">
        <span>登陆</span>
        <span>/</span>
        <span>注册</span>
        <div class="phone">
          <img src="@/assets/img/profile/phone.svg" alt />暂无绑定手机号
        </div>
      </div>
      <div class="pu-right"></div>
    </div>
    <div class="profile-wallet">
      <div class="pw-left"><div><span>0.00</span>元</div>
      我的余额</div>
      <div class="pw-center"><div><span>0</span>个</div>
      我的优惠</div>
      <div class="pw-right"><div><span>0</span>分</div>
      我的积分</div>
    </div>
    <div class="profile-cardone">
      <div class="pc-top">
        <img src="@/assets/img/profile/message.svg" alt="">
      <span>我的消息</span></div>
      <div class="pc-center">
        <img src="@/assets/img/profile/shop.svg" alt="">
      <span>积分商城</span></div>
      <div class="pc-bottom">
        <img src="@/assets/img/profile/vip.svg" alt="">
      <span>会员卡</span></div>
    </div>
    <div class="profile-cardtwo">
      <div class="pc-top">
        <img src="@/assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span></div>
      <div class="pc-bottom">
        <img src="@/assets/img/profile/download.svg" alt="">
      <span>下载购物APP</span></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar/NavBar";
export default {
  components: {
    NavBar
  },
  methods: {
    loginClick() {
      this.$toast.show('登录功能还未完成')
    }
  }
};
</script>

<style>
#profile {
  background-color: #F2F2F2;
  height: 100vh
}

.profile-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: bold;
}

.profile-user {
  background-color: var(--color-tint);
  font-size: 16px;
  color: #ffffff;
  padding: 10px;
  display: flex;
  align-items: center;
}

.profile-user .pu-img {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
}

.profile-user .pu-img img {
  width: 100%;
}

.profile-user .pu-login {
  padding-left: 10px;
  flex-grow: 1;
}

.profile-user .pu-login img {
  width: 16px;
}

.profile-user .pu-login .phone {
  margin-top: 5px;
  font-size: 14px;
}

.profile-user .pu-right {
  height: 10px;
  width: 10px;
  border: 2px solid #ffffff;
  border-left: none;
  border-bottom: none;
  transform: rotate(45deg);
}

.profile-wallet {
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}

.profile-wallet > div {
  flex-grow: 1;  
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-wallet .pw-center{
  border-left: 1px solid #F2F2F2;
  border-right: 1px solid #F2F2F2;
}

.profile-wallet span {
  font-size: 20px;
  font-weight: bold;
  color: #FF5F3E;
}

.profile-cardone {
  background-color: #ffffff;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 45px;
}

.profile-cardone >div {
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.profile-cardone span{
  padding-left: 15px;
  box-sizing: border-box;
  flex: 1;
}

.profile-cardone .pc-center span {
  border-top: 1px solid #F2F2F2;
  border-bottom: 1px solid #F2F2F2;
}

.profile-cardone img {
  height: 16px;
  width: 16px;
}

.profile-cardtwo {
  background-color: #ffffff;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 45px;
}

.profile-cardtwo >div {
  padding: 0 7px;
  display: flex;
  align-items: center;
}

.profile-cardtwo span{
  padding-left: 6px;
  box-sizing: border-box;
  flex: 1;
}

.profile-cardtwo .pc-top span {
  border-bottom: 1px solid #F2F2F2;
}

.profile-cardtwo img {
  height: 32px;
  width: 32px;
}
</style>