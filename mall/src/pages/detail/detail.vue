<template>
  <div id="detailBox">

    <div class="divSlide">
      <swiper class="detailSwiper" indicator-dots="true" autoplay="true" interval="6000" duration="1000" circular="true">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item>
            <img :src="item.url" alt="" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
    </div>

    <div class="detailText">
      <h4 @click="getDetail">【现挖】临安天目小香薯5斤黄心特小小红薯新鲜番薯地瓜山芋蔬菜</h4>
      <p class="firstP">
        <span>￥ 36.00</span>
        <span class="lastSpan">奖励金: ￥ 1.00</span>
      </p>
      <p>快递费: 订单不满20元,收运费5元</p>
      <p>
        客服热线:
        <span>0571-86908200</span>
      </p>
    </div>

    <div class="tabBtn">
      <div>
        <i></i>
        <p>客服</p>
      </div>
      <div>
        <i></i>
        <p>分享</p>
      </div>
      <button>加入购物车</button>
      <button>立即购买</button>
    </div>

    <div class="fixBtn">
      <button>&lsaquo;</button>
      <div>
        <button class="lastBtn iconfont" @click="bindToCart">&#xe61b;</button>
        <span>{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../counter/store'
export default {
  name: 'detail',
  data () {
    return {
      banner: [
        { url: 'https://goss.veer.com/creative/vcg/veer/612/veer-134669323.jpg' },
        { url: 'https://goss2.veer.com/creative/vcg/veer/612/veer-133071017.jpg' },
        { url: 'https://goss.veer.com/creative/vcg/veer/612/veer-147395960.jpg' },
        { url: 'https://goss4.veer.com/creative/vcg/veer/612/veer-161959036.jpg' }
      ]
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    getDetail () {
      let Fly = require('flyio')
      let fly = Fly()
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getGoodsListByCid', {
        goodsName: '大米',
        page: 2,
        pageSize: 2
      })
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    bindToCart () {
      const url = '../cart/cart'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
      this.goToFuck()
    }
  }
}
</script>

<style scoped lang="scss">
#detailBox {
  .divSlide {
    .detailSwiper {
      height: rpx(500);
      img {
        @include img(rpx(0));
      }
    }
  }
  .detailText {
    padding: rpx(20);
    p {
      padding: rpx(10) 0;
      line-height: 100%;
      span {
        color: red;
      }
    }
    p.firstP {
      span {
        font-size: .4rem;
      }
      span.lastSpan {
        float: right;
        font-size: .3rem;
      }
    }
    p:not(:first-child) {
      font-size: .3rem;
      color: grey;
    }
  }

  .tabBtn {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    div, button {
      width: 25%;
      text-align: center;
      line-height: rpx(100);
      height: rpx(100);
    }
  }

  .fixBtn {
    position: fixed;
    top: 0;
    width: 90%;
    margin: 0 5%;
    padding-top: rpx(20);
    button {
      display: inline-block;
      padding: 0;
      width: rpx(60);
      height: rpx(60);
      line-height: rpx(60);
      border-radius: 100%;
      background-color: rgba(128, 128, 128, .6);
      font-size: .4rem;
    }
    div {
      display: inline-block;
      float: right;
      position: relative;
      span {
        position: absolute;
        left: 50%;
        background-color: red;
        border-radius: 50%;
        padding: 0 rpx(10);
        font-size: .2rem;
      }
    };
  }
}
</style>
