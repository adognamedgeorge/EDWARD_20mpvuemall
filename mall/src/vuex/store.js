import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store2 = new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    // addCar: (state) => {
    //   let Flyio = require('flyio')
    //   let fly = new Flyio()
    //   fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/addToCart', {
    //     userId: 101
    //   })
    //     .then((res) => {
    //       let re = res.data
    //       const obj = state
    //       obj.carList = re.data
    //     })
    // },
    addTocart: (state, goods) => {
      const obj = state
      obj.carList.push(goods)
    },
    deleteGoods: (state, index) => {
      state.carList.splice(index, 1)
    },
    updateGoods: (state, goods) => {
      const {index, key, value} = goods
      state.carList[index][key] = value
    }
  },
  getters: {
    goodsLen: (state) => {
      return state.carList.length
    },
    goodsList: (state) => {
      return state.carList
    },
    sumMoney: state => {
      let total = 0
      state.carList.forEach((item) => {
        if (item.select) {
          total += item.price * item.num
        }
      })
      return total
    }
  }
})

export default store2
