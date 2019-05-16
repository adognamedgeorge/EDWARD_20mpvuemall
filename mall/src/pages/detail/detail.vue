<template>
  <div id="detailBox">

    <div class="divSlide">
      <swiper class="detailSwiper" indicator-dots="true" autoplay="true" interval="6000" duration="1000" circular="true">
        <block v-for="(item, index) in bannerList" :key="index">
          <swiper-item>
            <img :src="item" alt="" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
    </div>

    <div class="detailText">
      <h4 @click="getDetail">{{ title }}</h4>
      <p class="firstP">
        <span>￥ {{price / 100}}</span>
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

    <div class="fixBtn" @click="bindToCart">
      <button>&lsaquo;</button>
      <div>
        <button class="lastBtn iconfont">&#xe61b;</button>
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
      bannerList: [],
      title: '',
      price: ''
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
      fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getDetails', {
        cid: 1001
      })
        .then((res) => {
          const re = res.data
          this.bannerList = re.data['urls']
          this.title = re.data['title']
          this.price = re['data']['price']
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getDetail()
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
