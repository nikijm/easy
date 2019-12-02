<template>
  <div class="elasticip-mg">
    <TabControl :data-source="dataSource" :active-name="ActiveName">
      <EasyNvrBasicConfig slot="EasyNvrBasicConfig"></EasyNvrBasicConfig>
      <ThirdPartyPlatform slot="ThirdPartyPlatform"></ThirdPartyPlatform>
    </TabControl>
  </div>
</template>

<script>
import TabControl from "@/components/TabControl";
import EasyNvrBasicConfig from "./easyNvrBasicConfig";
import ThirdPartyPlatform from "./thirdPartyPlatform";
export default {
  name: "basicConfig",
  components: {
    TabControl,
    EasyNvrBasicConfig,
    ThirdPartyPlatform
  },
  data() {
    return {
      ActiveName: "EasyNvrBasicConfig", // 进入时需要显示的那个tab
      id: this.$route.params.id || "",
      resourceId: "",
      dataSource: [
        // 给tab组件的数据格式
        {
          tabName: "EasyNvrBasicConfig",
          tabTitle: "easyNVR基础设置",
          icon: "xiangqing"
        },
        {
          tabName: "ThirdPartyPlatform",
          tabTitle: "第三方平台接入",
          icon: "xiangqing"
        }
      ]
    };
  },
  created() {
    // this.resourceId = this.$route.params._id;
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.elasticip-mg {
  width: 60%;
  margin: 90px auto auto auto;
  background: white;
  > span {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
    .el-button {
      float: right;
    }
  }

}
</style>
