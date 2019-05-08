<template>
  <div class="divSlide">
    <swiper class="homeSwiper" indicator-dots="true" autoplay="true" interval="2000" duration="1000" circular="true">
      <block v-for="(item, index) in banner" :key="index">
        <swiper-item>
          <img :src="item.url" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSlide',
  data () {
    return {
      banner: [
        { url: 'https://goss.veer.com/creative/vcg/veer/612/veer-134669323.jpg' },
        { url: 'https://goss2.veer.com/creative/vcg/veer/612/veer-133071017.jpg' },
        { url: 'https://goss.veer.com/creative/vcg/veer/612/veer-147395960.jpg' },
        { url: 'https://goss4.veer.com/creative/vcg/veer/612/veer-161959036.jpg' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.divSlide {
  padding: rpx(30);
  .homeSwiper {
    height: rpx(300);
    border-radius: rpx(20);
    img {
      @include img(rpx(20))
    }
  }
}
</style>
