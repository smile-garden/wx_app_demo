// pages/leftSliderDel/leftSliderDel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delBtnWidth: 180 //删除按钮宽度  rpx
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tempData();
  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX  // 触摸起始点水平方向位置
      })
    };
  },
  touchM: function (e) {
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX; // 手指移动时水平方向位置
      var disX = this.data.startX - moveX; // 手指起始点位置与移动期间的差值
      var delBtnWidth = this.data.delBtnWidth;
      // 如果距离小于删除按钮的1/2，不显示
      var txtStyle;
      // 获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      if (disX <= 0) {
        txtStyle =0;
      } else if (disX > 0 && disX <= delBtnWidth) {
        txtStyle = disX;
      } else {
        txtStyle = delBtnWidth;
      };

      if (index >= 0) {
        list[index].txtStyle = txtStyle;
        this.setData({
          list: list
        })
      };
    };
  },
  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;  // 手指移动结束后水平位置
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = disX > delBtnWidth/3 ? delBtnWidth : 0;
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      if (index >= 0) {
        list[index].txtStyle = txtStyle;
        this.setData({
          list: list
        })
      };
    };
  },
  delItem: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    list.splice(index, 1);
    this.setData({
      list: list
    })
  },
  tempData:function(){
    var list = [
      {
        txtStyle: "",
        icon:"/images/icon1.png",
        txt:"向左滑动可以删除"
      },
      {
        txtStyle: "",
        icon:"/images/icon6.png",
        txt:"微信小程序|联盟（wxapp-union.com）"
      },
      {
        txtStyle: "",
        icon:"/images/icon1.png",
        txt:"圣诞老人是爸爸，顺着烟囱往下爬，礼物塞满圣诞袜，平安糖果一大把"
      },
      {
        txtStyle: "",
        icon:"/images/icon2.png",
        txt:"圣诞到来，元旦还会远吗？在圣诞这个日子里"
      },
      {
        txtStyle: "",
        icon:"/images/icon3.png",
        txt:"圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon:"/images/icon4.png",
        txt:"一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon:"/images/icon5.png",
        txt:"圣诞节(Christmas或Cristo Messa ),译名为“基督弥撒”。"
      },
      {
        txtStyle: "",
        icon:"/images/icon2.png",
        txt:"你的圣诞节礼物准备好了吗?"
      },
      {
        txtStyle: "",
        icon:"/images/icon3.png",
        txt:"一年一度的圣诞节即将到来,姑娘们也纷纷开始跑趴了吧!"
      },
      {
        txtStyle: "",
        icon:"/images/icon4.png",
        txt:"圣诞到来，元旦还会远吗？"
      },
      {
        txtStyle: "",
        icon:"/images/icon5.png",
        txt:"记下这一刻的心情"
      },

    ];
    
    this.setData({
      list:list
    });
  }
})