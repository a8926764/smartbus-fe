// pages/busdetails/busdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //线路名称
    name: '',
    //运行时间
    time: '',
    //上行个数
    s_num: '',
    //上行站牌
    s_sign: '',
    //下行个数
    x_num: '',
    //下行站牌
    x_sign: '',
    xinxi:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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
    var that = this
    //请求接口数据
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c3ee1463093412ec11e4525/businfo/zzbus',
      data: {
        bus_name: '',
        bus_time: ""
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        //存储请求成功的数据
        that.setData({
          businfo: res.data.data.businfo
        })

        //console.log(res.data)

      },
      complete: function () {
        console.log('无论成功失败都会执行')
      }

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