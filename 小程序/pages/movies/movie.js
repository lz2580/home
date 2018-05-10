var util=require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:{},
    comingSoonUrl:{},
    top250:{},
    searchResult: {},
    containerShow:true,
    searchPanelShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * TOP 250
   */
  onLoad: function (options) {
    var inTheatersUrl = app.globalData.doubanBase + '/v2/movie/in_theaters'+'?start=0&count=3',
      comingSoonUrl = app.globalData.doubanBase + '/v2/movie/coming_soon' + '?start=0&count=3',
      top250Url = app.globalData.doubanBase + '/v2/movie/top250' + '?start=0&count=3';
    this.getMovieListData(inTheatersUrl,"inTheaters","正在热映");
    this.getMovieListData(comingSoonUrl,"comingSoonUrl","即将上映"); 
    this.getMovieListData(top250Url,"top250","Top 250");
  },
  onMoreTap:function(event){
    var category=event.currentTarget.dataset.category //捕获category
    wx.navigateTo({
      url:'more-movie/more-movie?category='+category
    }) 
  },
  onMovieTap:function(event){
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: 'movie-detail/movie-detail?Id=' + movieId
    }) 
  },
  getMovieListData: function (url, settedKey, categoryTitle) {
    var that=this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        that.processDoubanData(res.data, settedKey, categoryTitle)
      },
      fail: function () {
        console.log('调用失败')
      }
    })
  },
  onCancelImgTap:function(event){
     this.setData({
       containerShow:true,
       searchPanelShow:false   
     })
  },
  onBindFocus:function(event){
       this.setData({
         containerShow:false,
         searchPanelShow:true
       })
  },
  onBindChange:function(event){
      var text = event.detail.value;
      var searchUrl = app.globalData.doubanBase +"/v2/movie/search?q="+text;
      this.getMovieListData(searchUrl,"searchResult","");
  },
  processDoubanData: function (moviesDouban, settedKey, categoryTitle){
    var movies=[];
    for(var idx in moviesDouban.subjects){
         var subject=moviesDouban.subjects[idx];
         var title=subject.title;
         if(title.length>6){
           title=title.substring(0,6)+"....";
         }
         var temp={
           stars: util.convertToStarsArray(subject.rating.stars),
           title:title,
           average: subject.rating.average,
           coverageUrl:subject.images.large,
           movieId:subject.id 
         }
         movies.push(temp)
    }
    var readyData={};
    readyData[settedKey]={
      movies: movies,
      categoryTitle: categoryTitle
      }
    this.setData(readyData)
  }
})