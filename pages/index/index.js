//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    req: [{
      "content": "0.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '0',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": 'zan',
      "zan": 1,
      "cai": 0,
      "collection": false
    },{
      "content": "1.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '1',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": 'cai',
      "zan": 0,
      "cai": 1,
      "collection": true
    },{
      "content": "2.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '2',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "3.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '3',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "4.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '4',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "3.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '5',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "4.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '6',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "3.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '7',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    },{
      "content": "4.女生分手的原因有两个，一个是：闺蜜看不上。另一个是：闺蜜看上了。",
      "hashId": '8',
      "unixtime": 1418815439,
      "updatetime": '2014-12-17 19:23:59',
      "action": '',
      "zan": 0,
      "cai": 0,
      "collection": false
    }]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    console.log('onLoad')
  },

  // 赞
  zan: function(e){
    let id = e.target.dataset.id;
    this.setFava(id, 'zan');
  },

  // 踩
  cai: function(e){
    let id = e.target.dataset.id;
    this.setFava(id, 'cai');
  },

  // 赞 或 踩
  setFava: function(id, type){
    let list = this.data.req;
    for(let i = 0; i < list.length; i++){
      // 对应数据
      if(list[i].hashId == id){
        if(list[i].action === type){
          // 之前相同操作
          list[i][type] > 0 ? list[i][type]-- : null;
          list[i].action = '';
        }else if(list[i].action && list[i].action !== type){
          // 之前相反操作
          list[i][type === 'cai' ? 'zan' : 'cai']--;
          list[i].action = type;
          list[i][type] ++;
        }else{
          // 之前没有操作
          list[i].action = type;
          list[i][type] ++;
        }
        this.setData({req: list});
        break;
      }
    }
  },

  // 分享
  share: function(){

  },

  // 收藏
  collection: function(e){
    let id = e.target.dataset.id;
    let list = this.data.req;
    for(let i = 0; i < list.length; i++){
      let item = list[i];
      if(item.hashId === id){
        item.collection = !item.collection;
        if(item.collection){
          // 收藏
          app.setCollection(item);
        }else{
          // 取消收藏
          // let req = wx.getStorageSync('wx_req');
          // console.log(req);
          // wx.clearStorageSync('wx_req');
        }
        this.setData({req: list});
        break;
      }
    }
  }
})
