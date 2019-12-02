<template>
  <div class="third-party">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px">
      <el-form-item label="接入平台">
        <el-select v-model="ruleForm.platform">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="IP 地址" prop="ip">
        <el-input v-model="ruleForm.ip"></el-input>
      </el-form-item>
      <el-form-item label="监控端口" prop="port">
        <el-input v-model="ruleForm.port"></el-input>
      </el-form-item>
      <el-form-item label="设备序列号" prop="deviceNum">
        <el-input v-model="ruleForm.deviceNum"></el-input>
      </el-form-item>
      <el-form-item label="设备名称">
        <el-input v-model="ruleForm.deviceName"></el-input>
      </el-form-item>
      <el-form-item label="接入密码">
        <el-input v-model="ruleForm.psd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
  data() {
    return {
      ruleForm: {
        platform: "",
        ip: "",
        port: "",
        deviceNum: "",
        deviceName: "",
        psd: ""
      },
      rules: {
        ip: [{ required: true, message: "请输入IP地址", trigger: "blur" }],
        port: [{ required: true, message: "请输入监控端口", trigger: "blur" }],
        deviceNum: [
          { required: true, message: "请输入设备序列号", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.third-party {
  width: 80%;
  margin: auto;
  .el-button--primary {
    background: #00a65a;
    border: 1px solid #00a65a;
  }
  /deep/.el-form-item__label {
    font-weight: bold;
  }
  /deep/.el-form-item__content {
    margin-left: 190px !important;
  }
  /deep/.el-select {
    display: block;
  }
}
</style>



