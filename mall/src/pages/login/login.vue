<template>
  <div id="login">
    <div class="loginType">
      <span :class="{selected: isSelected}" @click="wordClick">密码登录</span>
      <span :class="{selected: !isSelected}" @click="codeClick">验证码登录</span>
    </div>
    <div class="password" v-show="isSelected">
      <input type="text" placeholder="手机号/账户" v-model="username" :value="username"/>
      <input type="text" placeholder="密码" v-model="password" />
    </div>
    <div class="code" v-show="!isSelected">
      <input type="text" placeholder="手机号" v-model="phone"/>
      <div class="code_flex">
        <input type="text" placeholder="验证码" v-model="code"/>
        <button @click="getCode" v-if="btnShow">获取验证码</button>
        <button v-if="!btnShow" class="count">{{count}}s</button>
      </div>
      <p>温馨提示:未注册云蚂蚁账号的手机号,登录时将自动注册,且代表您已同意《云蚂蚁用户协议》</p>
    </div>
    <button class="goLogin" @click="phoneLogin" v-if="isSelected">登录</button>
    <button class="goLogin" @click="codeLogin" v-if="!isSelected">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isSelected: true,
      username: 'admin',
      password: '',
      phone: '15868175516',
      code: '9876',
      btnShow: true,
      count: '',
      timer: null
    }
  },
  methods: {
    wordClick () {
      this.isSelected = true
    },
    codeClick () {
      this.isSelected = false
    },
    phoneLogin () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/loginSupportDynamicPassword', {
        username: this.username,
        password: this.password
      })
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCode () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getCode', {
        userPhone: this.phone
      })
        .then((res) => {
          const re = res.data['data']
          if (re === '验证码已发送') {
            this.timeCount()
          } else {
            console.log(re)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    codeLogin () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/loginByCode', {
        userPhone: this.phone,
        code: this.code
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    timeCount () {
      const second = 60
      this.btnShow = false
      if (!this.timer) {
        this.count = second
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= second) {
            this.count--
          } else {
            this.btnShow = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#login {
  .loginType {
    height: rpx(50);
    line-height: rpx(50);
    font-size: .3rem;
    padding:rpx(10) 0;
    span {
      display: inline-block;
      width: 50%;
      text-align: center;
      padding:rpx(10) 0;
    }
    span.selected {
      color: red;
      border-bottom: 2px solid red;
    }
  }
  .password, .code {
    font-size: .4rem;
    input {
      border-bottom: 1px solid lightgrey;
      padding: rpx(40) 0;
      margin: 0 rpx(40);
    }
  }
  .code {
    .code_flex {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 rpx(50) 0 0;
      button {
        background: orangered;
        height: rpx(100);
        line-height: rpx(100);
        color: white;
        font-size: .3rem;
        padding: 0;
        width: rpx(200);
      }
      .count {
        background: grey;
      }
    }
    p {
      font-size: .3rem;
      padding: rpx(10) rpx(40) 0;
    }
  }
  .goLogin {
    background-color: red;
    margin: rpx(30) rpx(20) 0;
  }
}
</style>
