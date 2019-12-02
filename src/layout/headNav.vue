<template>
  <header class="head-nav rflex" :style="{'width':headNavWidth+'px'}" id="header_container">
    <div class="bread_container">
      <span @click="handleLefeMenu" class="bars">
        <icon-svg icon-class="iconmenu-fold" :class="{isactive:changeBarDirection}" />
      </span>
      <div class="userinfo-right rflex">
        <div class="userinfo">
          <div class="login-name" @click="setDialogInfo">
            <span class="name avatarname">登录</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { setToken, getToken } from "@/utils/auth";
import store from "@/store";

export default {
  name: "head-nav",
  data() {
    return {
      changeBarDirection: false
    };
  },

  computed: {
    ...mapGetters(["name", "avatar", "sidebar"]),
    headNavWidth() {
      return document.body.clientWidth - this.sidebar.width;
    }
  },

  methods: {
    handleLefeMenu() {
      this.$store.dispatch("setLeftCollapse"); // 折叠菜单
      this.$store.dispatch("handleLeftMenu"); // 改变菜单宽度 180->35/35-180
      this.changeBarDirection = !this.changeBarDirection;
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload();
      });
    },
    /**
     * 弹出框-修改密码或者系统设置
     * @param {string} cmditem 弹框类型
     */
    setDialogInfo() {
          this.logout();
      }
    }
};
</script>

<style scoped lang='less'>
.bread_container {
  background-color: #00a65a;
  width: 100%;
  color: white;
  .bars {
    line-height: 60px;
    cursor: pointer;
    .isactive {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      transition: 0.38s;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    .svg-icon {
      font-size: 25px;
    }
  }
}

.head-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 29;
  transition: width 0.2s;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background: #00a65a;
  .logout {
    vertical-align: middle;
    cursor: pointer;
  }
}
.userinfo-right {
  float: right;
  line-height: 60px;
  text-align: right;
  padding: 0 10px;
  justify-content: space-between;
}
.login-name {
  display: inline-block;
  vertical-align: middle;
  padding: 0 5px;
  cursor: pointer;
  .name {
    line-height: 20px;
    text-align: center;
    font-size: 12px;
  }
  .avatarname {
    color: white;
    font-weight: bolder;
    font-size: 13px;
  }
}
</style>
