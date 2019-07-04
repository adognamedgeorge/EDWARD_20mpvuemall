<template>
  <div id="wrap">
    <div id="cart">
      <ul>
        <li v-for="(item, index) of goodsList" :key="index">
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" :checked="item.checked" />
              <span></span>
            </div>
            <div class="img">
              <img :src="item.urls" alt="">
            </div>
            <div class="text">
              <h4>{{ item.title }}</h4>
              <p>500g</p>
              <p>￥{{ item.price / 100 }}</p>
              <div class="counter">
                <span @click="cut(item)">-</span>
                <input readonly disabled type="number" v-model="item.count" :min="item.minSoldNum" :max="item.maxStock">
                <span class="second" @click="add(item)">+</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pay">
      <span>应付<i>￥</i>{{money}}</span>
      <button>去结算</button>
    </div>
  </div>
</template>

<script>
import store2 from '../../vuex/store'
export default {
  name: 'cart',
  data () {
    return {
      cartList: [],
      userId: ''
    }
  },
  computed: {
    goodsList () {
      return store2.getters.goodsList
    }
  },
  methods: {
    // getCart () {
    //   let Flyio = require('flyio')
    //   let fly = new Flyio()
    //   fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getCartDetailByUserId', {
    //     userId: 101
    //   })
    //     .then((res) => {
    //       let re = res.data
    //       this.cartList = re.data
    //       console.log(re.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    // 购物车减;mpvue不支持ref
    cut (item) {
      if (item.count <= item.minSoldNum) {
        item.count = item.minSoldNum
      } else {
        item.count--
      }
    },
    // 购物车加
    add (item) {
      if (item.count >= item.maxStock) {
        item.count = item.maxStock
      } else {
        item.count++
      }
    }
  }
}
</script>

<style scoped lang="scss">
#cart {
  ul {
    li {
      padding: rpx(20);
      border-bottom: 1px solid lightgrey;
      .content {
        display: flex;
        flex-direction: row;
        height: rpx(200);
        padding: rpx(30) 0;
        justify-content: space-around;
        align-items: center;
        .checkbox {
          width: 5%;
          height: rpx(40);
        }
        .img {
          width: 25%;
          height: rpx(170);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          width: 60%;
          h4 {
            height: rpx(50);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-top: rpx(20);
          }
          p {
            font-size: .3rem;
          }
          p:first-child {
            color: lightgray;
          }
          p:nth-child(3) {
            color: red;
            margin-top: rpx(50);
          }
          .counter {
            @include counter(rpx(200), rpx(50), grey, rpx(50), rpx(100));
            .noAllow {
              cursor: no-drop;
            }
          }
        }
      }
    }
  }
}
</style>
