<template>
  <div class="outerWrap">
    <div class="homeHead">
      <ul>
        <li v-for="(item, index) of sortList" :key="index" @click="sendId(item.id)" >
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
    sendId (indexId) {
      this.$emit('headVal', indexId)
    },
    // 获取类目名称
    getSorts () {
      let Fly = require('flyio')
      let fly = new Fly()
      fly.get('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getTopCat')
        .then((res) => {
          const re = res.data
          this.sortList = re.data
          this.postSorts(this.sortList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 跳转到类目列表页
    // bindToCategory (id) {
    //   // const url = '../category/index'
    //   // if (mpvuePlatform === 'wx') {
    //   //   mpvue.switchTab({ url })
    //   // } else {
    //   //   mpvue.navigateTo({ url })
    //   // }
    //   this.$router.push({ path: '/pages/category/index', query: { id: id } })
    // },
    // 向固定侧栏传值
    postSorts (left) {
      Link.$emit('val', left)
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
