// pages/nextPage.js

const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: ["http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3wdo1ag308c08cwfh.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3wdo1ag308c08cwfh.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3yhn2yg308c08cmy3.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3z0lpbg308c08c75r.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3zh1w2g308c08ctbb.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm3zvoazg308c08ct9q.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm40c5nag308c08ctbt.gif",
      "http://wx4.sinaimg.cn/mw690/006HJgYYgy1frzm40st76g308c08ctbb.gif",
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    backgroundAudioManager.title = 'dura'
    backgroundAudioManager.epname = 'dura'
    backgroundAudioManager.singer = 'dura'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'


    backgroundAudioManager.src = 'http://other.web.nf01.sycdn.kuwo.cn/6c098983e0aeff36fda8cff21b8f9573/5b44ac2d/resource/n3/25/72/1080960141.mp3' // 设置了 src 之后会自动播放
    
    backgroundAudioManager.onTimeUpdate

    backgroundAudioManager.seek(30) //30s开始播放

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})