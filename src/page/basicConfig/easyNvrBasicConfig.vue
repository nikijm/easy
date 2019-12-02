<template>
  <div class="basic-config">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="EasyNVR 本地地址">
        <el-input v-model="form.localIp"></el-input>
      </el-form-item>
      <el-form-item label="EasyNVR 本地端口">
        <el-input v-model="form.localPort"></el-input>
      </el-form-item>
      <el-form-item label="RTMP端口">
        <el-input v-model="form.RTMPPort"></el-input>
      </el-form-item>
      <el-form-item label="直播页面鉴权">
        <el-checkbox-group v-model="form.type">
          <el-checkbox name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="快照间隔(分)">
        <el-input v-model="form.time"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
  data() {
    return {
      form: {
        localIp: "",
        localPort: "",
        RTMPPort: "",
        type: [],
        time: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
.basic-config {
  width: 80%;
  margin: auto;
  .el-button--primary{
      background: #00a65a;
      border: 1px solid #00a65a;
  }
   /deep/.el-form-item__label {
      font-weight: bold;
  }
    /deep/.el-form-item__content {
      margin-left: 190px !important;
  }
}
</style>



