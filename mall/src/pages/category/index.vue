<template>
  <div id="box">
    <div>
      <home-search></home-search>
      <home-head v-on:headVal="getGoods"></home-head>
    </div>
    <div class="content">
      <div class="flexRow">
        <div v-for="(item, index) of goodsList" :key="index" @click="bindToDetail(item.cid)">
          <img :src="item.url" alt="">
        </div>
      </div>
      <div class="noGoods" v-show="goodsList === false">
        <div>noGooooooooods</div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from '../../js/link.js'
import homeSearch from '@/components/search'
import homeHead from '@/components/head'
export default {
  data () {
    return {
      goodsList: [],
      id: ''
    }
  },
  components: {
    homeSearch,
    homeHead
  },
  methods: {
    // 通过类目名称获取商品列表
    getGoods (headId) {
      // for (let k in this.sortList) {
      //   this.sortList[k].isSelected = false
      //   if (this.sortList[k]['id'] === id) {
      //     this.sortList[k].isSelected = true
      //   }
      // }
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getCatById', {
        goodsId: headId
      })
        .then((res) => {
          const result = res.data['data']
          this.goodsList = result
          // this.postSorts(this.goodsList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadGoods () {
      // for (let k in this.sortList) {
      //   this.sortList[k].isSelected = false
      //   if (this.sortList[k]['id'] === id) {
      //     this.sortList[k].isSelected = true
      //   }
      // }
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getCatById', {
        goodsId: this.id
      })
        .then((res) => {
          const result = res.data['data']
          this.goodsList = result
          // this.postSorts(this.goodsList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 跳转detail页面传参
    bindToDetail (a) {
      this.$router.push({ path: '/pages/detail/detail', query: { cid: a } })
    },
    getQuery () {
      this.id = this.$root.$mp.query['id']
      this.loadGoods()
    }
  },
  mounted () {
    const vm = this
    Link.$on('val', (data) => {
      vm.goodsList = data
    })
    this.getQuery()
  }
}
</script>

<style scoped lang="scss">
#box {
  .flexRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      width: 49%;
      height: rpx(270);
      margin-bottom: rpx(15);
      img {
        @include img(rpx(20));
      }
    }
  }
  .noGoods {
    div {
      text-align: center;
    }
  }
}
  .content {
    padding: rpx(20) rpx(20) 100%;
    background: -webkit-linear-gradient(left top, #d39203, blue);
    background: -o-linear-gradient(left top, #d39203, blue);
    background: -moz-linear-gradient(left top, #d39203, blue);
    background: linear-gradient(left top, #d39203, blue);
  }
</style>
