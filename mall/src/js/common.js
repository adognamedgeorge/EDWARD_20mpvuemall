exports.install = function (Vue, options) {
  Vue.prototype.$bindCart = () => {
    const url = 'pages/cart/cart'
    if (mpvuePlatform === 'wx') {
      mpvue.switchTab({ url })
    } else {
      mpvue.navigateTo({ url })
    }
  }
}
