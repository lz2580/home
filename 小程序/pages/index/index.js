Page({
  onTop: function () {
    //  wx.navigateTo({
    //    url: '../posts/post', //子级跳转
    //  });
    wx.switchTab({
      url: '../posts/post',   //跳转Tab页面
    })
    //     wx.navigateTo({
    //       url:'', //页面地址
    //       success:function(){
    // //跳转成功
    //       },
    //       fail:function(){
    // //跳转失败
    //       },
    //       complete:function(){
    // //无论是否成功
    //       },
    //     })
  }
  //  onUnload:function(){
  //     console.log("Welcome page is unload")
  //  },
  //  onHide:function(){
  //    console.log("Welcome page is unhide")
  //  }
})