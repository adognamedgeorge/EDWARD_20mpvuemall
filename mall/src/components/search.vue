<template>
  <div id="box">
    <div class="dSearch">
      <div class="iconLf" @click="leftShow">
        <i class="iconfont">&#xe7f9;</i>
        <p>分类</p>
      </div>
      <div class="inSearch">
        <div class="inWrap">
          <i class="iconfont">&#xe611;</i>
          <input type="text" placeholder="请输入搜索关键词" />
        </div>
      </div>
      <div class="iconRt" @click="bindToCart">
        <i class="iconfont">&#xe61b;</i>
        <p>购物车</p>
        <span>{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import homeHead from './head'
import store from '@/pages/counter/store'
export default {
  name: 'homeSearch',
  components: {
    homeHead
  },
  computed: {
    count () {
      let num = store.state.count
      if (num < 0) {
        return 0
      } else if (num > 99) {
        return 99 + '+'
      } else {
        return num
      }
    }
  },
  data () {
    return {
      childVal: true
    }
  },
  methods: {
    leftShow () {
      this.$emit('val', this.childVal)
    }
  }
}
</script>

<style scoped lang="scss">
.dSearch {
  flex-direction: row;
  padding: rpx(20) 0;
  background-color: whitesmoke;
  .iconLf, .iconRt {
    width: 20%;
    flex-direction: column;
    font-size: .3rem;
    color: #262626;
  }
  .iconRt {
    position: relative;
    span {
      background-color: red;
      position: absolute;
      left: 50%;
      top: rpx(-5);
      display: inline-block;
      border-radius: 100%;
      padding: 0 rpx(10);
      font-size: .2rem;
    }
  }
  .inSearch {
    flex: 1;
    background-color: rgba(152, 191, 61, 0.44);
    border-radius: rpx(30);
    color: white;
    padding: 0 rpx(30);
    div {
      flex-direction: row;
      input {
        margin: rpx(10) rpx(20);
        font-size: .3rem;
      }
    }
  }
}
.dSearch, .iconLf, .iconRt, .inWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
