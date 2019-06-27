import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // car () {
  //   let Flyio = require('flyio')
  //   let fly = new Flyio()
  //   fly.post('https://easy-mock.com/mock/5ca466b55eeed03805bf4949/edward/getCartDetailByUserId', {
  //     userId: 101
  //   })
  //     .then((res) => {
  //       let re = res.data
  //       let car = re.data
  //       return car
  //     })
  // }
  car: [
    {
      cid: 1001,
      title: '1001',
      price: 1001
    },
    {
      cid: 2002,
      title: '2002',
      price: 2002
    }
  ]
}
const getters = {
  money (state) {
    let money = 0
    state.car.forEach(item => {
      money += item.price
    })
    return money
  }
}
const store = new Vuex.Store({
  state,
  getters
})

export default store
