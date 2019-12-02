<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="titleArea rflex">
          <span class="title">
            <i>EasyNVR-登录</i>
          </span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username" class="login-item">
            <span class="loginTips">
              <icon-svg icon-class="iconuser" />
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="text"
              placeholder="用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <span class="loginTips">
              <icon-svg icon-class="iconLock" />
            </span>
            <el-input
              @keyup.enter.native="submitForm('loginForm')"
              class="area"
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
          <div class="tiparea">
            <p class="wxtip">账户为：admin/123456</p>
          </div>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import { login } from "@/api/user";
import { setToken } from "@/utils/auth";

export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {
    loginByWechat() {},
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message
      });
    },
    submitForm(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          let userinfo = this.loginForm;
          login(userinfo).then(res => {
            let userList = res.data.userList;
            setToken("Token", userList.token);
            this.$router.push({ path: "/" });
            this.$store.dispatch("initLeftMenu"); //设置左边菜单始终为展开状态
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.form_contianer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 350px;
  border: 1px solid #C0C4CC;
  text-align: center;
  .titleArea {
    justify-content: center;
    align-items: center;
    // text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding: 30px 0 30px 0;
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .loginForm {
    padding: 20px;
    .submit_btn {
      float: right;
      padding: 10px 20px 10px 30px;
	  font-size: 16px;
	  letter-spacing: 10px;
	  background-color: #3c763d;
	  color: white;
	  border: none;
    }
    .loginTips {
      position: absolute;
      left: 10px;
      z-index: 20;
      font-size: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}



.tiparea {
  text-align: left;
  font-size: 12px;
  color: #4cbb15;
  padding: 10px 0;
  .tip {
    margin-left: 54px;
  }
}

// .form-fade-enter-active,
// .form-fade-leave-active {
//   transition: all 1s;
// }
// .form-fade-enter,
// .form-fade-leave-active {
//   transform: translate3d(0, -50px, 0);
//   opacity: 0;
// }
// .loginForm {
//   .el-button--primary {
//     // background-color: #ff7c1a;
//     // border: 1px solid #ff7c1a;
//   }
// }
// .sanFangArea {
//   border-top: 1px solid #dcdfe6;
//   padding: 10px 0;
//   display: none;
//   .title {
//     font-size: 14px;
//     color: #8b9196;
//     margin-bottom: 10px;
//   }
//   ul {
//     li {
//       flex: 1;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       .svg-icon {
//         font-size: 24px;
//       }
//     }
//   }
// }
</style>
