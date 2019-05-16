<template>
  <div id="box">
    <div>
      <home-search></home-search>
      <home-head></home-head>
    </div>
    <div class="content">
      <div class="flexRow">
        <div v-for="(item, index) of goodsList" :key="index" @click="bindToDetail">
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
      goodsList: []
    }
  },
  components: {
    homeSearch,
    homeHead
  },
  methods: {
    bindToDetail () {
      this.$router.push({ path: '/pages/detail/detail', query: { id: 1 } })
    }
  },
  mounted () {
    const vm = this
    Link.$on('val', (data) => {
      vm.goodsList = data
    })
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
