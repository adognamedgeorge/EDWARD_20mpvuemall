<template>
  <div>
    <div id="nav">
      <div>
      <span>
        <img src="/static/images/user.png" alt="">
      </span>
        <p>金主特惠</p>
      </div>
      <div>
      <span>
        <img src="/static/images/user.png" alt="">
      </span>
        <p>吃遍中国</p>
      </div>
      <div>
      <span>
        <img src="/static/images/user.png" alt="">
      </span>
        <p>服务承诺</p>
      </div>
    </div>
    <div>
      <nav-ads></nav-ads>
    </div>
  </div>
</template>

<script>
import navAds from './ads'
export default {
  name: 'homeNav',
  components: {
    navAds
  }
}
</script>

<style scoped lang="scss">
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    height: rpx(150);
    width: rpx(150);
    text-align: center;
    span {
      height: rpx(100);
      width: rpx(100);
      display: inline-block;
      border-radius: 100%;
      img {
        @include img(50%);
      }
    }
    p {
      font-size: .3rem;
    }
  }
}
</style>
