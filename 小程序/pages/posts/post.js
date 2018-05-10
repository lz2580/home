var postsData=require("../../data/posts-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   this.setData({ post_key: postsData.postList})
  //  this.data.postList = postsData.postList
  },

  onPostTop:function(event){
    var postId = event.currentTarget.dataset.postid  //获取点击的postid数值
    // console.log(postId)
    wx.navigateTo({
      url: 'post-detail/posts-detail?id='+postId,
    })
  },
  onSwiperTop:function(event){
    //target 指的是当前点击的组件 currentTarget 指的是事件捕获的组件
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/posts-detail?id=' + postId,
    })
  }
})