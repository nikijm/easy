<template>
  <div class="channel-config">
    <div class="search-btn">
      <el-input
        v-model="searchVal"
        placeholder="搜索"
        type="text"
        auto-complete="off"
        class="search_bar"
      >
        <a slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
    </div>
    <el-row>
      <el-col
        class="channel-config-card"
        :span="12"
        v-for="(item,index) in channelData"
        :key="index"
      >
        <el-card class="box-cards content-info-version">
          <div slot="header" class="clearfix">
            <span>{{item.name}}</span>
            <div style="float:right">
              <el-switch v-model="item.swithValue" active-color="#00a65a" inactive-color="#ebedef"></el-switch>
              <span class="card-button">
                <i class="el-icon-setting"></i>
              </span>
            </div>
          </div>
          <div class="content-info item">
            <el-row class="event-add-backgrond">
              <el-col :span="9">通道号</el-col>
              <el-col :span="7">{{item.channel}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">摄像机接入类型</el-col>
              <el-col :span="7">{{item.subtype}}</el-col>
            </el-row>
            <el-row class="event-add-backgrond">
              <el-col :span="9">摄像机接入RTSP地址</el-col>
              <el-col :span="7">{{item.rtspaddress}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">摄像机接入ONVIF地址</el-col>
              <el-col :span="7">{{item.onvifaddress}}</el-col>
            </el-row>
            <el-row class="event-add-backgrond">
              <el-col :span="9">传输协议</el-col>
              <el-col :span="7">{{item.transport}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">摄像机用户名</el-col>
              <el-col :span="7">{{item.username}}</el-col>
            </el-row>
            <el-row class="event-add-backgrond">
              <el-col :span="9">摄像机密码</el-col>
              <el-col :span="7">{{item.password}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">接入CND地址</el-col>
              <el-col :span="7">{{item.cndaddress}}</el-col>
            </el-row>
            <el-row class="event-add-backgrond">
              <el-col :span="9">按需直播</el-col>
              <el-col :span="7">{{item.livebroadcast}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">开启音频</el-col>
              <el-col :span="7">{{item.openaudio}}</el-col>
            </el-row>
            <el-row class="event-add-backgrond">
              <el-col :span="9">开启录像</el-col>
              <el-col :span="7">{{item.openvideo}}</el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "versionInfo",
  data() {
    return {
      searchVal: "",
      //   swithValue: "",
      channelData: [
        {
          swithValue: false,
          name: "channel1",
          channel: "5",
          subtype: "RTSP",
          rtspaddress: "",
          onvifaddress: "",
          transport: "TCP",
          username: "ss",
          password: "d",
          cndaddress: "",
          livebroadcast: "",
          openaudio: "1",
          openvideo: "1"
        },
        {
          swithValue: true,
          name: "channel2",
          channel: "7",
          subtype: "RTSP",
          rtspaddress: "",
          onvifaddress: "",
          transport: "TCP",
          username: "ss",
          password: "d",
          cndaddress: "",
          livebroadcast: "",
          openaudio: "1",
          openvideo: "2"
        },
        {
          swithValue: false,
          name: "channel3",
          channel: "9",
          subtype: "RTSP",
          rtspaddress: "",
          onvifaddress: "",
          transport: "TCP",
          username: "ss",
          password: "d",
          cndaddress: "",
          livebroadcast: "",
          openaudio: "1",
          openvideo: "1"
        },
        {
          swithValue: true,
          name: "channel4",
          channel: "8",
          subtype: "RTSP",
          rtspaddress: "",
          onvifaddress: "",
          transport: "TCP",
          username: "ss",
          password: "d",
          cndaddress: "",
          livebroadcast: "",
          openaudio: "1",
          openvideo: "1"
        }
      ],
      versionInfo: [
        {
          label: ""
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.channel-config {
  width: 95%;
  margin: auto;
  .search-btn {
    width: 50%;
    margin: auto;
    padding: 50px;
  }
  /deep/.channel-config-card {
    margin-bottom: 20px;
    .el-card__header {
      padding: 10px 15px;
      color: #00a65a;
      background-color: #f9f9f9;
    }
  }
}
.content-info {
  font-size: 14px;
  line-height: 25px;
}
.event-add-backgrond {
  background-color: #f9f9f9;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-cards {
  margin-right: 20px;
  /deep/.el-card__body {
    padding: 0px 0px 0px 5px !important;
  }
  .card-button {
    padding: 0 3px;
    background: #00a56a;
    color: white;
    border-radius: 6px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
</style>
