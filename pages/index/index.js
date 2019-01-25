//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //是否显示   true隐藏  false显示
  visible:true,
  value_num:'' //设置input初始值为空
  },
  //事件处理函数
// onClick:function(){
// this.setData({
//   visible:false
// })
// },
//获取输入的文字
bindkeyinput:function(e){
  this.setData({
   visible:false
  })
},
//点击清除输入框内容，同时隐藏清除按钮
clear_input:function(){
  this.setData({
    visible:true,
   value_num:'' //清空input内容
  })
}

})
