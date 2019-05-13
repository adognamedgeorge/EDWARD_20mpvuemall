exports.install = function (Vue, options) {
  Vue.prototype.bindToCart = () => {
    const url = '../cart/cart'
    if (mpvuePlatform === 'wx') {
      mpvue.switchTab({ url })
    } else {
      mpvue.navigateTo({ url })
    }
  }
}
