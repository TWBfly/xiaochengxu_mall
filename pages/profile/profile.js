// pages/profile/profile.js
const util = require('../../utils/util.js');
const db = require('../../utils/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.getStorage({
    //   key: 'userinfo',
    //   success: (res => {
    //     console.log("userinfo==", res)
    //     this.setData({
    //       userInfo: res.data
    //     })
    //   }),
    // })
  },

  // 用户信息
  getuserinfo(event) {
    this.setData({
      userInfo: event.detail.userInfo
    })

    // wx.setStorage({
    //   key: 'userinfo',
    //   data: event.detail.userInfo,
    // })
  },

  //地址
  onTapAddress() {

  },
  //收货地址
  onTapService() {

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
    util.getUserInfo().then(userInfo =>{
      this.setData({
        userInfo
      })
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