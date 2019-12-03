<template>
  <div>
    <el-card class="box-cards content-info-version">
      <div slot="header" class="clearfix">
        <h2>版本信息</h2>
      </div>
      <div class="content-info item">
        <el-row class="event-add-backgrond">
          <el-col :span="6">硬件信息</el-col>
          <el-col :span="10">AMD64</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">接口版本</el-col>
          <el-col :span="10">v1</el-col>
        </el-row>
        <el-row class="event-add-backgrond">
          <el-col :span="6">运行时间</el-col>
          <el-col :span="10">2019-11-26</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">软件信息</el-col>
          <el-col :span="10">EasyNVR/v3(Bulid/2018.12/23232;Platform/Window)</el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-cards authorization-info">
      <div slot="header" class="clearfix">
        <h2>授权信息</h2>
      </div>
      <div class="content-info item">
        <el-row class="event-add-backgrond">
          <el-col :span="6">授权对象</el-col>
          <el-col :span="10">EasyActiveMachine</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">授权时间</el-col>
          <el-col :span="10">永久授权</el-col>
        </el-row>
        <el-row class="event-add-backgrond">
          <el-col :span="6">通道数</el-col>
          <el-col :span="10">129</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">机器码</el-col>
          <el-col :span="16">
            <div>NVREED2FBF2997322EBCB0DF4292EF60BC6</div>
            <div>(通过邮箱：support@easydarwin.org 向商务人员咨询永久授权信息)</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">提交激活文件</el-col>
          <el-col :span="16">
            <!-- <el-button type="success">点击上传</el-button> -->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "versionInfo",
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      versionInfo: [
        {
          label: ""
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style lang="less" scoped>
.content-info {
  font-size: 14px;
  line-height: 25px;
  .el-row {
    padding: 5px;
  }
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
  width: 65%;
  margin: 80px auto auto auto;
  .el-card__body {
    padding: 0px !important;
  }
}
.authorization-info {
  margin-top: 20px;
  .el-button {
    background-color: #00a65a;
    border-color: #00a65a;
    color: white;
  }
}
</style>
