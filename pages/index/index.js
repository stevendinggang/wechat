//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    clickNoNumber: 0,
    tips:" 答应我吧~~小姐姐",
    hiddenBtn: false,
    tipsArray: ["工资上交", "家务全包", "房产证写你名儿", "保大", "我妈会游泳", "不吵架,会撒娇,能卖萌", "答应我吧~~小姐姐", "答应我吧~~小姐姐","答应我吧~~小姐姐"]
  },

  onLoad: function () {

    
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#353538',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

  },
  
  leftClick: function () {
    
    wx.showModal({
      title: '小姐姐',
      content: '真的吗? 你答应了吗?',
      confirmText: 'OK',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
           
          wx.showModal({
            title: '小姐姐',
            content: '给我回消息吧~爱你哦~么么哒~',
            confirmText: 'OK',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                 
                wx.navigateTo({
                  url: '../nextPage/nextPage'
                })

              } else if (res.cancel) {

              }
            }
          })

        } else if (res.cancel) {

        }
      }
    })
    

  },

  rightClick: function () {
    
    console.log(this.data.clickNoNumber)
    //判断点击效果
    if (this.data.clickNoNumber <= this.data.tipsArray.length-1 ? true : false) {
      this.setData({
        tips: this.data.tipsArray[this.data.clickNoNumber]
      })
      // console.log(tips)
      this.showTips()
    } else {
      //当9次时候 隐藏按钮
      // if (this.clickNoNumber>=9) {
      //   console.log("9----")
        this.setData({
          hiddenBtn: true
        })  
      // } else {
      //   console.log("9+++++")

      //   this.setData({
      //     tips: this.data.tipsArray[(this.data.tipsArray.length - 1)]
      //   })
      //   this.showTips()
      // }
      
    }  

    this.data.clickNoNumber++;

  },

  showTips: function () {

    wx.showModal({
      title: '小姐姐',
      content: this.data.tips,
      confirmText: 'OK',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {

        } else if (res.cancel) {

        }
      }
    })
  }





})

















