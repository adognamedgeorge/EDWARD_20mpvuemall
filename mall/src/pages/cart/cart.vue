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
            <h4>绿树果黄金蜜哈密绿树果黄金蜜哈密绿树果黄金蜜哈密</h4>
            <p>500g</p>
            <p>￥32.00</p>
            <div class="counter">
              <span>-</span>
              <input type="text" value="123" />
              <span class="second">+</span>
            </div>
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
      padding: rpx(20);
      .content {
        display: flex;
        flex-direction: row;
        height: rpx(200);
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
          }
          .counter {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            float: right;
            border: 1px solid black;
            width: rpx(200);
            height: rpx(50);
            text-align: center;
            span {
              width: rpx(50);
            }
            span:first-child {
              border-right: 1px solid grey;
            }
            .second {
              border-left: 1px solid blue;
            }
            input {
              width: rpx(100);
            }
          }
        }
      }
    }
  }
}
</style>
