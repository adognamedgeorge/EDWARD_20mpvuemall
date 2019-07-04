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
    }
  },
  getters: {
    goodsLen: (state) => {
      return state.carList.length
    },
    goodsList: (state) => {
      return state.carList
    }
  }
})

export default store2
