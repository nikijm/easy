<template>
  <el-tabs v-model="currentPane" type="card" class="tab-container" @tab-click="tabClick">
    <el-tab-pane v-for="(item, index) in dataSource" :key="index" :name="item.tabName">
      <span slot="label">
        <i :class="'icon ic-' + item.icon " />
        {{ item.tabTitle }}
      </span>
      <slot :name="item.tabName" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
/*
参数说明：
必填：
dataSource: 用于展示的数据源， 格式：
        [{
          tabName: '' String,标识slot name属性
          tabTitle: '', String,tab标题
          icon: '' String,字体图标类名去掉'ic-'
        }]
选填：
@tabClick: tab被点击触发，可以接手一个数据，目前数据包含了currentTabName
activeTabName: 初始化需要展示的tab，传入tab的标识
*/
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    activeTabName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      currentTabName: this.activeTabName ? this.activeTabName : this.dataSource[0].tabName
    }
  },
  computed: {
    currentPane: {
      get() {
        return this.activeTabName ? this.activeTabName : this.dataSource[0].tabName
      },
      set(currentPane) {
        this.currentTabName = currentPane
        this.$emit('update:activeName', currentPane)
      }
    }
  },

  methods: {
    tabClick() {
      this.$emit('tabClick', { currentTabName: this.currentTabName })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-container {
  width: 100%;
  /deep/.el-tabs__header {
    // margin-top: 12px;
    margin-bottom: 20px;
    .el-tabs__nav::before{
      display: inline-block;
      content: '';
      // width: 50px;
      height: 100%;
      border-bottom: 1px solid #dadce6;
      position: relative;
      top: 16px;
    }
    .el-tabs__nav {
      border: none;
    }
    .el-tabs__nav-wrap {
    margin-bottom: -1px;
    }
    .el-tabs__item {
      padding: 0 10px !important;
      min-width: 130px !important;
      text-align: center;
      border: none;
      border-bottom: 1px solid #dadce6;
      i {
        margin-right: 10px;
      }
    }
    .is-active {
      border-left: 1px solid #dadce6 ;
      border-right: 1px solid #dadce6 ;
      border-top: 2px solid #00a65a !important;
      border-bottom: 1px solid #ffffff;
      position: relative;
      color: #47474a;
      top: 2px;
    }
  }
}
</style>
