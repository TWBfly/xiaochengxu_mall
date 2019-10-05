// pages/category/category.js
const util = require('../../utils/util.js');
const db = require('../../utils/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    orderList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.orderList.forEach(order => {
      order.productList.forEach(product => product.price = util.setPrice(product.price))
    })
    this.setData({
      orderList: this.data.orderList
    })
  },

  //跳到我的
  gotologin() {
    wx.switchTab({
      url: '../profile/profile',
    })
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
    util.getUserInfo().then(userInfo => {
      this.setData({
        userInfo
      })

      this.getOrderList()

    }).catch(err => {
      console.log("err=", err)
    })
  },

  getOrderList(){
    wx.showLoading({
      title: 'Loading...',
    })
    db.getOrderList().then(res=>{
      wx.hideLoading()
      const data = res.result
      if(data){
        this.setData({
          orderList:data
        })
      }
    }).catch(err=>{
      wx.hideLoading()
    })
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