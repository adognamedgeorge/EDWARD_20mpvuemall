<template>
  <div @click="clickHandle">

    <div class="homeSearch">
      <home-search v-on:val="val"></home-search>
      <div>
        <home-head v-on:headVal="bindToCategory"></home-head>
      </div>
    </div>

    <div class="homeSlide">
      <home-slide v-bind:pList="posterList"></home-slide>
      <home-nav></home-nav>
      <home-main :newCat="newCat" :secCat="secCat"></home-main>
    </div>

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/index" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>

    <div class="homeLeft" v-show="leftShow">
      <home-left></home-left>
    </div>

    <div class="mask" v-if="leftShow" @click="showMask"></div>
  </div>
</template>

<script>
import store from '../counter/store'
import card from '@/components/card'
import homeSearch from '@/components/search'
import homeLeft from '@/components/left'
import homeSlide from '@/components/slide'
import homeNav from '@/components/nav'
import homeMain from '@/components/main'
import homeHead from '@/components/head'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      leftShow: false,
      posterList: [],
      catList: [],
      newCat: [],
      secCat: []
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    card,
    homeSearch,
    homeHead,
    homeLeft,
    homeSlide,
    homeNav,
    homeMain
  },

  methods: {
    val (childVal) {
      this.leftShow = childVal
    },
    showMask () {
      this.leftShow = false
    },
    bindViewTap () {
      const url = '../logs/index'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    // 跳转到商品类目页
    bindToCategory (data) {
      this.$router.push({ path: '/pages/category/index', query: { id: data } })
    },
    // 获取首页海报数据
    getPoster () {
      let Fly = require('flyio')
      let fly = Fly()
      fly.get('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getHomePic')
        .then(res => {
          const re = res.data
          this.posterList = re.data['posterList']
          this.catList = re.data['catList']
          this.newCat = re.data['catList'].slice(0, 3)
          this.secCat = re.data['catList'].slice(2)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  mounted () {
    this.getPoster()
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
.homeSearch {
  position: fixed;
  height: rpx(170);
  top: 0;
  left: 0;
  z-index: 9;
  bottom: 0;
  right: 0;
}
.homeSlide {
  margin-top: rpx(170);
}
.homeLeft {
  position: absolute;
  top: 0;
  left: 0;
}
.counter {
  position: relative;
}
.mask {
  @include mask();
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
