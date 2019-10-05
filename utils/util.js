const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const setPrice = price => {
  return parseFloat(Math.round(price * 100) / 100).toFixed(2)
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    this.isAuthenticated().then(()=>{
      wx.getUserInfo({
        success(res) {
          const userInfo = res.userInfo
          resolve(userInfo)
        }
      })
    }).catch(()=>{
      reject()
    })
  })
}

//判断是否授权
function isAuthenticated() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] === true) {
          resolve()
        } else {
          reject()
        }
      }
    })
  })
}

//跳到我的
function gotologin() {
  wx.switchTab({
    url: '../profile/profile',
  })
}

function loginModal() {
  wx.showModal({
    title: '提示',
    content: '您未登录',
    confirmText: '去登录',
    success(res) {
      if (res.confirm) {
        gotologin()
      }
    }
  })
}



module.exports = {
  formatTime: formatTime,
  setPrice: setPrice,
  getUserInfo: getUserInfo,
  isAuthenticated: isAuthenticated,
  gotologin: gotologin,
  loginModal: loginModal
}