// pages/detail/detail.js
const db = require('../../utils/db.js')
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: 'Loading...',
    })

    db.getProductDetail(options.id).then(res => {
      wx.hideLoading()
      const data = res.result
      data.price = util.setPrice(data.price)
      if (data) {
        this.setData({
          product: data
        })
      } else {
        goback()
      }

    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      goback()
    })

  },
  //Buy it now
  buy() {
    wx.showLoading({
      title: 'buying...',
    })

    const productToBuy = Object.assign({
      count: 1
    }, this.data.product)

    productToBuy.productId = productToBuy._id

    //为什么要加入订单？？db.addToOrder是云函数
    db.addToOrder({
      list: [productToBuy]
    }).then(res => {
      wx.hideLoading()
      console.log("success==",res)
      const data = res.result
      if(data){
        wx.showToast({
          title: 'Success',
        })
      }
    }).catch(err => {
      wx.hideLoading()
      console.log("fail==",err)
      wx.showToast({
        icon:'none',
        title: "Fail",
      })
    })

  },

  goback() {
    setTimeout(() => {
      wx.navigateBack()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})