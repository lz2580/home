/**
 * Created by Jill on 16/12/10.
 */
var weater = new Vue({
    //作为 Vue 实例的挂载目标的DOM 元素可以是 CSS 选择器，也可以是一个 HTMLElement 实例，但是不可以是body不可以是body不可以是body
    el: '#weather',
    data: {
        //定义当前城市
        curCity: '',
        //定义省级数据
        provinceList: [],
        //定义市级数据
        cityList: [],
        //定义当天时间
        curWeather_data: null,
        //定义天气图片
        curDayPictureUrl: null,
        //定义当天温度
        curTemperature: null,
        //定义当天天气
        curWeather: null,
        //定义当天风的强度
        curWind: null,
        //定义当天实时空气质量
        curPm25: null,
        //定义未来几天天气数据
        weatherList: [],
        //定义各项建议数据
        suggestList: []
    },
    created: function () {
        //获取当前位置数据
        var data = "ak=IGRqnr7eERqnOV5YmQgHxUEj1kY1cw6P&coor=bd09ll";
        //初始化函数
        this.getLocation(data);
    },
    methods: {
        //获取当前位置
        getLocation: function (data) {
            //存储this，保证this指向正确
            var self = this;
            $.ajax({
                url: 'http://api.map.baidu.com/location/ip',
                //处理跨域
                dataType: "jsonp",
                jsonp: 'callback',
                data: data,
                jsonpCallback: "success_jsonpCallback",
                success: function (result) {
                    //数据加载完，显示页面，防止页面出现未请求好的渲染数据，如｛｛curCity｝｝
                    $('#weather').show();
                    //拿到当前位置－城市
                    var city = result.content.address_detail.city;
                    self.curCity = city;
                    //调用对应的数据
                    self.getListByKeyWord();
                },
                error: function () {
                    //数据未加载完，隐藏页面
                    $('#weather').hide();
                    alert("当前位置请求出错！");
                }
            });
        },
        //点击当前城市
        sortAddress: function () {
            var self = this;
            //清空数据
            self.provinceList = [];

            //拿到对应动画的DOM元素
            var $sortPop = $(".sorting-address");
            //弹出下拉框，并加载省
            //判断弹出框是否已经弹出，若已经弹出，点击则弹入
            if ($sortPop.hasClass("fixed-top")) {
                $sortPop.removeClass("fixed-top");
            }
            //弹出
            else {
                $sortPop.addClass("fixed-top");
                //渲染省级数据
                var lenpro = data.province.length;
                for (var i = 0; i < lenpro; i++) {
                    self.provinceList.push({
                        province: [data.province[i], i]
                    });
                }
            }
        },
        //点击选择省
        sortProvince: function (index) {
            var self = this;
            self.cityList = [];
            //判断点击的省级是否已选
            if ($(this).hasClass("current")) {
                $(this).removeClass("current");
                $("#city").css("left", "100%");
            }
            //否则选中该省级并加载对应市的数据
            else {
                $("#province li").removeClass("current");
                $(this).addClass("current");
                //渲染市级数据
                var lenCity = data.city[index].length;
                for (var i = 0; i < lenCity; i++) {
                    self.cityList.push({
                        city: data.city[index][i]
                    });
                }
                $("#city").css("left", "50%");
            }
        },
        //点击选择市
        sortCity: function (city) {
            $("#city").css("left", "100%");
            var self = this;
            self.curCity = city;
            $(".sorting-address").removeClass("fixed-top");
            $(this).removeClass("current");
            self.getListByKeyWord();
        },
        //渲染对应城市的数据
        getListByKeyWord: function () {
            var self = this;
            $.ajax({
                url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + self.curCity + '&output=json&ak=FK9mkfdQsloEngodbFl4FeY3',
                type: "POST",
                dataType: "jsonp",
                jsonp: 'callback',
                jsonpCallback: "success_jsonpCallback",
                success: function (result, status) {
                    if (status == 'success') {
                        $('#weather').show();
                        //获取当前时间
                        var curDate = new Date();
                        //获取当前时间小时，进行判断白天黑夜
                        var curHours = curDate.getHours();
                        //获取weather_data长度
                        var len = result.results[0].weather_data.length;
                        //获取index长度
                        var lenIndex = result.results[0].index.length;
                        //清空数据
                        self.weatherList = [];
                        self.suggestList = [];

                        //当天天气数据
                        //当天时间
                        self.curWeather_data = result.results[0].weather_data[0].date;
                        //当天温度
                        self.curTemperature = result.results[0].weather_data[0].temperature;
                        //当天天气
                        self.curWeather = result.results[0].weather_data[0].weather;
                        //当天风的强度
                        self.curWind = result.results[0].weather_data[0].wind;
                        //当天实时空气质量
                        self.curPm25 = result.results[0].pm25;
                        //白天
                        if (curHours >= 6 && curHours < 18) {
                            $('header').css('background', '#FF8000');
                            self.curDayPictureUrl = result.results[0].weather_data[0].dayPictureUrl;
                        }
                        //黑夜
                        else {
                            $('header').css('background', '#00015B');
                            self.curDayPictureUrl = result.results[0].weather_data[0].nightPictureUrl;
                        }


                        //渲染未来几天的天气
                        for (var i = 1; i < len; i++) {

                            //白天
                            if (curHours >= 6 && curHours < 18) {
                                self.weatherList.push({
                                    listWeather: [
                                        //时间
                                        result.results[0].weather_data[i].date,
                                        //天气图片（早）
                                        result.results[0].weather_data[i].dayPictureUrl,
                                        //温度
                                        result.results[0].weather_data[i].temperature,
                                        //天气
                                        result.results[0].weather_data[i].weather,
                                        //风
                                        result.results[0].weather_data[i].wind,
                                    ]
                                })
                            }
                            //黑夜
                            else {
                                self.weatherList.push({
                                    listWeather: [
                                        //时间
                                        result.results[0].weather_data[i].date,
                                        //天气图片（晚）
                                        result.results[0].weather_data[i].nightPictureUrl,
                                        //温度
                                        result.results[0].weather_data[i].temperature,
                                        //天气
                                        result.results[0].weather_data[i].weather,
                                        //风
                                        result.results[0].weather_data[i].wind,
                                    ]
                                })
                            }

                        }

                        //渲染各项建议数据
                        for (var i = 0; i < lenIndex; i++) {
                            self.suggestList.push({
                                listSuggest: [
                                    //标题
                                    result.results[0].index[i].title,
                                    //指数
                                    result.results[0].index[i].zs,
                                    //建议
                                    result.results[0].index[i].tipt,
                                    //描述
                                    result.results[0].index[i].des,
                                ]
                            })
                        }

                    } else {
                        $('#weather').hide();
                        alert('数据获取失败');
                    }

                },
                error: function () {
                    alert("请求出错！");
                }
            });
        },
    }
})