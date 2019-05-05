const app = getApp()

Page({
  data: {
    worlding: "girl"
  },
  onLoad: function () {
    
  },
  onClick: function () {
    this.setData({
      worlding: "boy",
    })
  }
})
