// pages/collection/collection.js
var app = getApp()
Page({
  data:{
    req: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // this.getCollection();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.getCollection();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  // 获取收集数据
  getCollection(){
    let that = this;
    app.getCollection(function(collectionMsg){
      if(collectionMsg.length){
        that.setData({req: collectionMsg})
      }
    })
  }
})