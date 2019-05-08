<template>
  <div class="outerWrap">
    <div class="homeHead">
      <ul>
        <li v-for="(item, index) of sortList" :key="index">
          {{item['name']}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Link from '../js/link.js'
export default {
  name: 'homeHead',
  data () {
    return {
      sortList: []
    }
  },
  methods: {
    getSorts () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.get('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getTopCat')
        .then((res) => {
          console.log(res)
          const re = res.data
          this.sortList = re.data
          this.postSorts(this.sortList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postSorts (a) {
      Link.$emit('val', a)
    }
  },
  mounted () {
    this.getSorts()
  }
}
</script>

<style scoped lang="scss">
.homeHead {
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: lightgrey;
  ul {
    margin: 0;
    padding: 0;
    height: rpx(90);
    line-height: rpx(60);
    white-space: nowrap;
    float: left;
    li {
      font-size: .3rem;
      padding: 0 rpx(20);
      display: inline-block;
    }
    li:first-child {
      display: none;
    }
  }
}
.outerWrap {
  height: rpx(60);
  overflow: hidden;
}
</style>
