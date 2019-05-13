<template>
  <div id="box">
    <div class="flexRow">
      <div v-for="(item, index) of goodsList" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
    <div class="noGoods" v-if="goodsList.length === 0">
      <div>noGooooooooods</div>
    </div>
  </div>
</template>

<script>
import Link from '../../js/link.js'
export default {
  data () {
    return {
      goodsList: []
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
  padding: rpx(20);
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
</style>
