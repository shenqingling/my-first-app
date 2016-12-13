//app.js
App({
  globalData:{
    userInfo:null,
    collectionMsg: []
  },
  // 应用程序启动时触发一次
  onLaunch: function () {
    console.log('App Launch');
  },
  // 应用程序进入 前台显示 状态时触发
  onShow: function(){
    console.log('App Show');
  },
  // 应用程序进入 后台 状态时触发
  onShow: function(){
    console.log('App Hide');
  },

  // 点击收藏
  setCollection: function(cb){
    // let that = this;
    let list = this.globalData.collectionMsg;
    list.push(cb);
    this.globalData.collectionMsg = list;
  },

  // 获取收藏数据
  getCollection: function(fn){
    typeof fn === 'function' && fn(this.globalData.collectionMsg);
  }
})