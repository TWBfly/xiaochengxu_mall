const util = require('./util')
const db = wx.cloud.database()

module.exports = {
  //home.js
  getProductList() {
    return db.collection('product').get()
  },

  getProductDetail(id) {
    return wx.cloud.callFunction({
      name: 'productDetail',
      data: {
        id: id
      },
    })
  },

  addToOrder(data) {
    return util.isAuthenticated().then(res=>{
     return wx.cloud.callFunction({
        name: 'addToOrder',
        data
      })
    }).catch(err=>{
      util.loginModal()
      return {}
    })
  },

  getOrderList(){
    return util.isAuthenticated().then(()=>{
        return wx.cloud.callFunction({
          name:'getOrderList'
        })
    }).catch(()=>{
      util.loginModal()
      return {}
    })
  }


}