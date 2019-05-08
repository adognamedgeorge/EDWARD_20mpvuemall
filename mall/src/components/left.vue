<template>
  <div id="left">
    <div class="box">
      <ul>
        <li v-for="(item, index) of sortList" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Link from '../js/link.js'
export default {
  name: 'homeLeft',
  data () {
    return {
      sortList: []
    }
  },
  mounted () {
    const vm = this
    Link.$on('val', (data) => {
      vm.sortList = data
    })
  }
}
</script>

<style scoped lang="scss">
#left {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  .box {
    width: rpx(300);
    background-color: whitesmoke;
    ul {
      li {
        padding: rpx(20);
      }
      li:first-child {
        display: none;
      }
    }
  }
}
</style>
