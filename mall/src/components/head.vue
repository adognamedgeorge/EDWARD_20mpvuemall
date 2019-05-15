<template>
  <div class="outerWrap">
    <div class="homeHead">
      <ul>
        <li v-for="(item, index) of sortList" :key="index" @click="getGoods(item['name'])" :class="{selected: item.isSelected}">
          {{item['name']}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 定义公共组件非父子组件传值
import Link from '../js/link.js'
export default {
  name: 'homeHead',
  data () {
    return {
      sortList: [],
      goodsList: [],
      isSelected: false
    }
  },
  methods: {
    // 获取类目名称
    getSorts () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.get('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getTopCat')
        .then((res) => {
          const re = res.data
          this.sortList = re.data
          this.postSorts(this.sortList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 通过类目名称获取商品列表页并跳转
    getGoods (name) {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getCatByName', {
        goodsName: name
      })
        .then((res) => {
          const result = res.data
          this.goodsList = result.data
          this.postSorts(this.goodsList)
        })
        .catch(err => {
          console.log(err)
        })
      for (let k in this.sortList) {
        this.sortList[k].isSelected = false
        if (this.sortList[k]['name'] === name) {
          this.sortList[k].isSelected = true
        }
      }
    },
    // 跳转到类目列表页
    bindToCategory () {
      // const url = '../category/index'
      // if (mpvuePlatform === 'wx') {
      //   mpvue.switchTab({ url })
      // } else {
      //   mpvue.navigateTo({ url })
      // }
      this.$router.push('/pages/category/index')
    },
    // 向固定侧栏传值
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
.selected {
  color: red;
}
</style>
