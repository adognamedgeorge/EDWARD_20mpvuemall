<template>
  <div class="img">
    <img src="https://goss.veer.com/creative/vcg/veer/612/veer-134669323.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'navAds'
}
</script>

<style scoped lang="scss">
.img {
  height: rpx(170);
  padding: rpx(20) rpx(30);
  img {
    @include img(rpx(20));
  }
}
</style>
