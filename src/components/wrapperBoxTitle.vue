<template>
    <div class="wrapper_box">
      <div class="inner_wrap">
        <div class="title_wrap">{{title}}</div>
        <div class="body_wrap">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name:'wrapperBox',
    props: ['title']
  }
</script>
<style  lang="less">
  .wrapper_box{
    padding: 20px;
    .inner_wrap{
      position: relative;
      width: 100%;
      height: 100%;
      position: relative;
      .title_wrap{
        position: relative;
        z-index: 1;
        padding: 0 10px;
        height: 44px;
        line-height: 44px;
        font-size: 20px;
        background: #114594;
        overflow: hidden;
      }
      .body_wrap{
        position: absolute;
        top: 0;
        bottom: 0;
        padding-top: 44px;
        margin: auto;
        width: 100%;
        background-image: radial-gradient(50% 150%, #0A328B 50%, #041D54 100%);
        box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.5);
        overflow: hidden;
      }
    }
    @media (max-width: 1919px) {
      padding: 10px;
      .inner_wrap{
        .title_wrap{
          padding: 0 5px;
          height: 35px;
          line-height: 35px;
          font-size: 12px;
        }
        .body_wrap{
          padding-top: 30px;
          box-shadow: inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
        }
      }
    }
    @media (max-width: 1365px) {
      padding: 5px;
    }
  }
</style>
