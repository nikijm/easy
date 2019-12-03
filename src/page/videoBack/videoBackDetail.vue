<template>
  <div class="channel-content">
    <div class="videotape-channel">
      <p>录像(channel1)-视图列表</p>
      <div>
        <div class="go-back" @click="backToVideoList">
          <el-button class="check-video" icon="el-icon-arrow-left">返回</el-button>
        </div>
        <div class="search-btn">
          <el-input placeholder="搜索">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
      </div>
    </div>
    <div class="button-list">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
        @row-click="editTemp"
      >
        <el-table-column prop="videoName" label="名称"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" sortable></el-table-column>
        <el-table-column prop="emergencySign" label="紧急标志"></el-table-column>
        <el-table-column prop="videoDuration" label="录像时长" sortable></el-table-column>
        <el-table-column prop="videoAddress" label="视频地址"></el-table-column>
        <el-table-column label="操作" align="center" width="250px">
          <template slot-scope="scope">
            <el-button
              class="check-video"
              icon="el-icon-video-play"
              @action="verdioInfo(scope)"
              size="mini"
            >播放</el-button>
            <el-button
              type="primary"
              icon="el-icon-bottom"
              @action="verdioInfo(scope)"
              size="mini"
            >下载</el-button>
            <el-button
              icon="el-icon-delete"
              type="danger"
              @action="verdioInfo(scope)"
              size="mini"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination :pageTotal="pageTotal"></pagination>
  </div>
</template>
<script>
import Pagination from "@/components/pagination";
export default {
  //   name: "testList",
  data() {
    return {
      pageTotal: 60,
      tableData: [
        {
          videoName: "channel1",
          startTime: "2018-2-24 12:99:00",
          emergencySign: false,
          videoDuration: "channel1",
          videoAddress: "srcpage\videoBack\videoBackDetail.vue"
        },
        {
          videoName: "channel1",
          startTime: "2018-2-24 12:99:00",
          emergencySign: false,
          videoDuration: "channel1",
          videoAddress: "srcpage\videoBack\videoBackDetail.vue"
        },
        {
          videoName: "channel1",
          startTime: "2018-2-24 12:99:00",
          emergencySign: false,
          videoDuration: "channel1",
          videoAddress: "srcpage\videoBack\videoBackDetail.vue"
        }
      ]
    };
  },

  methods: {
    editTemp() {
      this.$router.push({
        name: "versionInfo"
      });
    },
    //返回列表
    backToVideoList() {
      this.$router.push({
        name: "videoBackList"
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
  .go-back {
    float: left;
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
  .button-list {
    .el-button + .el-button {
      margin-left: 0px;
    }
  }
}
</style>
