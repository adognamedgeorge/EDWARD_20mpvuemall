<template>
  <div id="wrap">
    <div id="cart">
      <ul>
        <li v-for="(item, index) of goodsList" :key="index">
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" :checked="item.select" @click="toggleSelect(item.cid)"/>
              <span></span>
            </div>
            <div class="img">
              <img :src="item.urls" alt="">
            </div>
            <div class="text">
              <h4>{{ item.title }}</h4>
              <p>500g<span @click="del(item.cid)">  &Chi;</span></p>
              <p>￥{{ item.price / 100 }}</p>
              <div class="counter">
                <span @click="changeNumber(item.cid, -1)">-</span>
                <input readonly disabled type="number" v-model="item.num" :min="item.minSoldNum" :max="item.maxStock">
                <span class="second" @click="changeNumber(item.cid, 1)">+</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pay">
      <span>应付<i>￥</i>{{sum / 100}}</span>
      <button>去结算</button>
    </div>
  </div>
</template>

<script>
import store2 from '../../vuex/store'
// import { mapMutations, mapGetters } from 'vuex'
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
    },
    sum () {
      return store2.getters.sumMoney
    }
    // ...mapGetters(['goodsList', 'sum'])
  },
  methods: {
    // ...mapMutations([
    //   'deleteGoods', 'updateGoods'
    // ]),
    findPosition (cid) {
      return this.goodsList.findIndex(item => {
        return item.cid === cid
      })
    },
    changeNumber (cid, val) {
      console.log(cid, val)
      let i = this.findPosition(cid)
      let number = this.goodsList[i].num
      store2.commit('updateGoods', {
        index: i,
        key: 'num',
        value: number + val <= 0 ? 1 : number + val
      })
      // this.updateGoods({
      //   index: i,
      //   key: 'num',
      //   value: number + val <= 0 ? 1 : number + val
      // })
    },
    toggleSelect (cid) {
      let i = this.findPosition(cid)
      let select = this.goodsList[i].select
      console.log(select)
      store2.commit('updateGoods', {
        index: i,
        key: 'select',
        value: !select
      })
      // this.updateGoods({
      //   index: i,
      //   key: 'select',
      //   value: !select
      // })
    },
    del (cid) {
      let i = this.findPosition(cid)
      store2.commit('deleteGoods', i)
      // this.deleteGoods(i)
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
            @include img(rpx(0));
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
