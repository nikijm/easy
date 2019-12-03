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
              <span class="card-button" @click="openSetting(item)">
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
    <el-dialog title="通道配置" :visible.sync="dialogFormVisible" class="channel-dialog">
      <el-form :model="form">
        <el-form-item label="通道名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="通道号" :label-width="formLabelWidth">
          <el-input v-model="form.channel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-switch v-model="form.swithValue" active-color="#00a65a" inactive-color="#ebedef"></el-switch>
        </el-form-item>
        <el-form-item label="接入平台" :label-width="formLabelWidth">
          <el-select v-model="form.subtype">
            <el-option label="RSTP" value="RSTP"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-checkbox v-model="form.onvifSelected" label="ONVIF探测" border size="mini"></el-checkbox>
        </el-form-item>
        <div v-if="form.onvifSelected">
          <el-form-item label="探测ONVIF IP" :label-width="formLabelWidth">
            <el-input v-model="form.onvifIp" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="探测ONVIF用户名" :label-width="formLabelWidth">
            <el-input v-model="form.onvifUserName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="探测ONVIF密码" :label-width="formLabelWidth">
            <el-input v-model="form.onvifPwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth">
            <el-button class="probe-click">探测</el-button>
          </el-form-item>
        </div>
        <el-form-item label="摄像机接入RTSP地址" :label-width="formLabelWidth">
          <el-input v-model="form.rtspaddress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="摄像机接入ONVIF地址" :label-width="formLabelWidth">
          <el-input v-model="form.onvifaddress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="摄像机用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="摄像机密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="接入CND地址" :label-width="formLabelWidth">
          <el-input v-model="form.cndaddress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="传输协议" :label-width="formLabelWidth">
          <el-radio-group v-model="form.transport" size="mini">
            <el-radio-button label="TCP"></el-radio-button>
            <el-radio-button label="UDP"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="录像保留(天)" :label-width="formLabelWidth">
          <el-input-number size="mini" v-model="form.videoRetain" :min="-1"></el-input-number>
        </el-form-item>
        <el-form-item label="其他选项" :label-width="formLabelWidth">
          <el-checkbox-group v-model="form.otherSelect">
            <el-checkbox label="按需直播" name="livebroadcast"></el-checkbox>
            <el-checkbox label="开启音频" name="openaudio"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button class="probe-click" type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "versionInfo",
  data() {
    return {
      searchVal: "",
      dialogFormVisible: false,
      channelSettingData: "",
      mindate: 0,
      form: {
        swithValue: false,
        name: "channel1",
        channel: "5",
        subtype: "RTSP",
        onvifIp: "",
        onvifUserName: "",
        onvifPwd: "",
        rtspaddress: "",
        onvifaddress: "",
        transport: "TCP",
        username: "ss",
        password: "d",
        cndaddress: "",
        livebroadcast: "",
        onvifSelected: false, // 是否勾选ONVIF
        otherSelect: [],
        videoRetain: 0 //保留天数
      },
      formLabelWidth: "170px",
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
  methods: {
    openSetting(val) {
      this.dialogFormVisible = true;
      this.form = Object.assign(this.form, val);
      console.log(this.form);
    }
  }
};
</script>
<style lang="less" scoped>
@saleColor:#00a65a;
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
    background: @saleColor;
    color: white;
    border-radius: 6px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
.channel-dialog {
  .el-checkbox.is-bordered.is-checked {
    border-color: @saleColor;
  }
  /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: @saleColor;
  }
  /deep/.el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: @saleColor;
    border-color: @saleColor;
  }
  .probe-click {
    background: @saleColor;
    color: white;
    border-color: @saleColor;
  }
  /deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background-color: @saleColor;
    border-color: @saleColor;
  }
  /deep/.el-radio-button__inner:hover {
    color:@saleColor;
  }
}
</style>
