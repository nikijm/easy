<template>
  <div class="home rflex">
    <left-menu></left-menu>
    <div class="menu_right wflex el-scrollbar" ref="menu_right" :style="{'height':contentStyleObj.height,'left':sidebar.width+'px'}" >
      <head-nav></head-nav>
      <div class="menu_content" ref="menu_content" >
        <router-view></router-view>
        <!--页面渲染入口-->
      </div>
      <footerNav></footerNav>
      <backTop :ele="$refs.menu_right"></backTop>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

import HeadNav from "./headNav.vue";
import LeftMenu from "./leftMenu.vue";
import FooterNav from "./footerNav.vue";
import backTop from "cps/backTop";

export default {
  name: "home",
  data() {
    return {
      contentStyleObj: {
        height: "",
        // overflow: "auto"
      }
    };
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  components: {
    HeadNav,
    LeftMenu,
    FooterNav,
    backTop
  },
  created() {
    this.getHeight();
    window.addEventListener("resize", this.getHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  },
  methods: {
    getHeight() {
      this.contentStyleObj.height = window.innerHeight - 60 + "px";
      console.log(this.contentStyleObj.height)
    }
  },
  watch: {}
};
</script>
<style scoped lang='less'>
.home {
  .menu_right {
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f6f7fc;
    .menu_content {
      position: relative;
      margin-top: 60px;
      width: 100%;
      //   height: 1000px;
      //   overflow: auto;
      // background:#f0f2f5;
    }
  }
}
</style>
