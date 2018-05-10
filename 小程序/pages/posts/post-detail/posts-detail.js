// pages/posts/posts-detail/posts-detail.js
var postsData = require("../../../data/posts-data.js");
var app = getApp();
Page({
  data: {
    isPlayMusic: false
  },
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({ post_key: postData });
    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }
    if (app.globalData.g_isPlayMusic && app.globalData.g_currentMsusicPosiId===postId) {
      // this.data.isPlayMusic = true;
      this.setData({
        isPlayMusic:true
      })
    }
    this.setMusicMonitor();
  },
  setMusicMonitor: function () {
    var that = this
    wx.onBackgroundAudioPlay(function () { //音乐播放
      that.setData({
        isPlayMusic: true
      })
      app.globalData.g_isPlayMusic = true;
      app.globalData.g_currentMsusicPosiId = that.data.currentPostId
    });
    wx.onBackgroundAudioPause(function(){  //暂停音乐
      that.setData({
        isPlayMusic: false
      })
      app.globalData.g_isPlayMusic = false;
      app.globalData.g_currentMsusicPosiId = null
    });
    wx.onBackgroundAudioStop(function () { //监听音乐结束
      that.setData({
        isPlayMusic: false
      })
      app.globalData.g_isPlayMusic = false;
      app.globalData.g_currentMsusicPosiId=null
    })
  },
  onCollectionTop: function (event) {
    // this.getPostsCollectedAsy()
    this.getPostsCollectedSyc()
  },
  getPostsCollectedAsy: function () { //异步
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function (res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        postCollected = !postCollected; //取反 收藏变成未收藏  未收藏变成收藏
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postsCollected, postCollected);
      },
    })
  },
  getPostsCollectedSyc: function () { //同步
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected; //取反 收藏变成未收藏  未收藏变成收藏
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },
  showModal: function (postsCollected, postCollected) {
    var that = this
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏这篇文章' : "取消收藏该文章",
      showCancel: 'true',
      cancelText: "取消",
      cancelColor: '#333',
      confirmText: '确认',
      confirmColor: '#405f80',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync('posts_collected', postsCollected);//更新文章是否收藏的缓存值
          that.setData({
            collected: postCollected
          })
        }
      }
    })
  },
  showToast: function (postsCollected, postCollected) {
    wx.setStorageSync('posts_collected', postsCollected) //更新文章是否收藏的缓存值
    this.setData({
      collected: postCollected
    });
    wx.showToast({ //提示框
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 1000,
      icon: 'success'
    });
  },
  // onCollectionTop: function (event) {
  //   var game = wx.getStorageSync('key');//获取缓存
  //   console.log(game)
  // },
  // onsharetop:function(event){
  //   // wx.removeStorageSync("key") // 清除指定的缓存
  //   wx.clearStorageSync();//清除所有缓存
  // }
  onShareTap: function (event) { //显示操作菜单
    var itemList = [
      "分享到微信",
      "分享到朋友圈",
      "分享到微博",
      "分享到QQ"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#405f80',
      success: function (res) {
        // res.tapIndex 用户点击了数组中的哪一个 从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '现在还不能支持',
        })
      }
    })
  },
  onMusicTop: function (event) { //音乐播放
    var currentPostId = this.data.currentPostId;
    var postData = postsData.postList[currentPostId];
    var isPlayMusic = this.data.isPlayMusic;
    if (isPlayMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg
      })
      this.setData({
        isPlayMusic: true
      })
    }
  }
})