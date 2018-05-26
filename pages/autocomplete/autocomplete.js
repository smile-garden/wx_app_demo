// pages/autocomplete/autocomplete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    adapterSource: ["123", "321", "666", "weixin", "WeiXin", "wechat", "android", "Android", "ios", "iOS", "java", "javascript", "微信小程序", "微信公众号", "微信开发者",
      "微信开发者工具"],//本地匹配源
    bindSource: [] // 根据用户输入显示匹配
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindinput: function (event) {
    var curinput = event.detail.value;
    var newSource = []; //匹配结果
    if (curinput != '') {
      this.data.adapterSource.forEach(function (v, i) {
        if (v.indexOf(curinput) != -1) {
          newSource.push(v);
        };
      })
    };
    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource
      })
    } else {
      this.setData({
        bindSource: []
      })
    }
  },
  itemtap: function (e) {
    this.setData({
      inputValue: e.target.id,
      bindSource: []
    })
  }
})