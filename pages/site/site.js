// pages/site/site.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   visible:true,
   info:''

   
  },

  //info为用户输入的查询字段
  search: function(info) {
    //console.log(info.detail.value)//打印输入的值
   
    var that = this
    wx.getStorage({
      key: 'businfo',
      success: function(res) { //从storage中取出存储的数据
        var value1 = info.detail.value //将输入框的值赋予变量value
        var businfo = []
        businfo = res.data.data.businfo
        for (let i = 0; i < businfo.length; i++) {
          if ((value1!=='')&&(businfo[i].bname.indexOf(value1)>= 0) ){
            console.log('qizuoyongle')
            that.setData({
              visible:false,
            
            
            })
             console.log(businfo[i].bname) //打印出来bus_name
             console.log(businfo[i].btime)
            
          }else if(value1==''){//当输入框内未输入任何值时，执行该事件
            that.setData({
              visible:true,
              // businfo: res.data.data.businfo
            })
           
          }
        
        }
      },

    })

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
      url:'https://www.easy-mock.com/mock/5c3ee1463093412ec11e4525/businfo/zzbus',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        //将请求到数据存储起来
        wx.setStorage({
          key: 'businfo',
          data: res.data,
        })
        // that.setData({
        //   businfo: res.data.data.businfo

        // })
        console.log('这段代码没问题')

      },
      complete: function() {
        console.log('无论成功失败都会执行')
      },
      fail:function(){
        console.log("请求失败")
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