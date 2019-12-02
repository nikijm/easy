<template>
  <div class="channel-content">
    <div class="videotape-channel">
      <h2>录像通道</h2>
      <div class="search-btn">
        <el-input placeholder="搜索">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      @row-click="editTemp"
    >
      <el-table-column prop="channelNum" label="通道号" sortable></el-table-column>
      <el-table-column prop="channelName" label="通道名称"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" sortable></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button class="check-video" icon="el-icon-search" @action="verdioInfo(scope)">查看录像</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :pageTotal="pageTotal"></pagination>
  </div>
</template>
<script>
import Pagination from "@/components/pagination";
export default {
  name: "testList",
  data() {
    return {
      pageTotal: 60,
      tableData: [
        {
          channelNum: "1",
          channelName: "channel1",
          updateTime: "2016-05-02"
        },
        {
          channelNum: "2",
          channelName: "channel2",
          updateTime: "2016-05-03"
        },
        {
          channelNum: "3",
          channelName: "channel3",
          updateTime: "2016-05-04"
        },
        {
          channelNum: "4",
          channelName: "channel4",
          updateTime: "2016-05-05"
        }
      ]
    };
  },

  methods: {
    editTemp() {
      this.$router.push({
        name: "versionInfo"
      });
    }
  },
  components: {
    Pagination
  }
};
</script>
<style lang='less' scoped>
.channel-content {
  margin: 80px 30px;
  background: white;
  border-top: 3px solid #008d4c;
  padding: 20px;
  .check-video {
    background-color: #00a65a;
    border-color: #00a65a;
    color: white;
  }
}
.videotape-channel {
  padding: 10px;
  text-align: center;
  .search-btn {
    float: right;
    margin-bottom: 20px;
    .el-input-group__append {
      background-color: #008d4c;
      color: white;
      border: 0;
      font-size: 16px;
    }
    .el-input {
      width: 200px;
    }
  }
}
</style>
