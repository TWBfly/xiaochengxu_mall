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

const setPrice = price =>{
  return parseFloat(Math.round(price * 100) / 100).toFixed(2)
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] === false) {
          // 已拒绝授权
          reject()
        } else {
          wx.getUserInfo({
            success(res) {
              const userInfo = res.userInfo
              resolve(userInfo)
            }
          })
        }
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  setPrice: setPrice,
  getUserInfo: getUserInfo
}
