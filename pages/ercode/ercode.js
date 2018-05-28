// pages/ercode/ercode.js
var qr = require('../../utils/qrcode.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskHidden: true,
    imagePath: '',
    placeholder: "https://www.zdjr98.com"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var size = this.setCanvasSize();
    var initUrl = this.data.placeholder;
    this.createQrcode(initUrl, "mycanvas", size.w, size.h);
  },

  // 适配不同屏幕大小的canvas
  setCanvasSize: function () {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750/686;
      var width = res.windowWidth/scale;
      var height = width;
      size.w = width;
      size.h = height;
    } catch (e) {
      console.log("获取信息失败" + e);
    }
    return size;
  },
  createQrcode: function (url, canvasId, canW, canH) {
    qr.api.draw(url, canvasId, canW, canH);
    setTimeout(() => { this.canvasToTempImage(); }, 1000);
  },
  // 获取临时缓存照片路径， 存入data
  canvasToTempImage: function () {
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath
        })
      }
    })
  },
  previewImg: function (e) {
    var img = this.data.imagePath;
    wx.previewImg({
      current: img,
      urls: [img]
    })
  },
  formSubmit: function (e) {
    var that = this;
    var url = e.detail.value.url;
    that.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 2000
    });
    var st = setTimeout(function () {
      wx.hideToast();
      var size = that.setCanvasSize();
      that.createQrcode(url,"mycanvas",size.w, size.h);
      that.setData({
        maskHidden: true
      });
      clearTimeout(st);
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})