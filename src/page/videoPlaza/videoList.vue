<template>
  <div class="safety container">
    <div class="wrapper">
      <wrapperBoxTitle :title="'chanel1'">
        <living :sources="videoOptions1"></living>
      </wrapperBoxTitle>
    </div>
  </div>
</template>

<script>
import wrapperBoxTitle from "@/components/wrapperBoxTitle.vue"; //引入盒子title
import living from '@/components/videoVue'

export default {
  components: {
    wrapperBoxTitle,
    living
  },
  data() {
    return {
      videoOptions1:[
        {
          type: "rtmp/mp4",
          src: "rtmp://112.19.241.28:31935/zxedu1115080/192.168.1.174"
        }
      ],
      // videoOptions2: [
      //   {
      //     type: "rtmp/mp4",
      //     src: "rtmp://112.19.241.28:31935/zxedu1115080/192.168.1.175"
      //   }
      // ],
      // videoOptions3: [
      //   {
      //     type: "rtmp/mp4",
      //     src: "rtmp://112.19.241.28:31935/zxedu1115080/192.168.1.171"
      //   }
      // ],
      // videoOptions4: [
      //   {
      //     type: "rtmp/mp4",
      //     src: "rtmp://112.19.241.28:31935/zxedu1115080/192.168.1.172"
      //   }
      // ],
      // videoOptions5: [
      //   {
      //     type: "rtmp/mp4",
      //     src: "rtmp://112.19.241.28:31935/zxedu1115080/192.168.1.173"
      //   }
      // ]
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style  lang="less" scoped>
.wrapper {
  width: 500px;
}
.videoBox{
  width: 98%;
  height: 98%;
  margin: 0 auto;
  .video-player{
    width: 100%;
    height: 100%;
  }
}
</style>