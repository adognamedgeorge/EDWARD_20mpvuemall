<template>
  <div id="cart">
    <ul>
      <li>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" checked />
            <span></span>
          </div>
          <div class="img">
            <img src="https://goss2.veer.com/creative/vcg/veer/612/veer-133071017.jpg" alt="">
          </div>
          <div class="text">
            <span>-</span>
            <input type="text">
            <span>+</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cart'
}
</script>

<style scoped lang="scss">
#cart {
  ul {
    li {
      .content {
        display: flex;
        flex-direction: row;
        height: rpx(200);
        justify-content: space-around;
        background-color: yellow;
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
      }
    }
  }
}
</style>
