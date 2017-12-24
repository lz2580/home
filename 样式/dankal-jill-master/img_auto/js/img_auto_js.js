/**
 * Created by eatin on 2016/11/9.
 */
//=====================图片缩放自适应======================
    //设置该图片和其父元素的基本样式
    function img_auto_js(class_name) {
        var elm = $("." + class_name);
        elm.parent().css({"overflow": "hidden"});
        elm.each(function () {
            $(this).load(function () {
                var w =$(this).width();
                var h =$(this).height();
                var val = w / h;
                //获取图片的宽高和其比例
                var w_out = $(this).parent().width();
                var h_out = $(this).parent().height();
                var val_out = w_out / h_out;
                //判断
                if (val > val_out) {
                    //重新设置宽高度
                    $(this).css("width", "auto");
                    $(this).css("height", "100%");
                    //获取重新设置宽高度
                    var hn = h_out;
                    var wn = (hn * w) / h;
                    //设置图片的位置
                    var w_left=(w_out-wn)/2;
                    $(this).css({ "margin-left": w_left });
                } else {
                    //重新设置宽高度
                    $(this).css("width", "100%");
                    $(this).css("height", "auto");
                    //获取重新设置宽高度
                    var wn = w_out;
                    var hn = (wn * h) / w;
                    //设置图片的位置
                    var h_top=(h_out-hn)/2;
                    $(this).css({"margin-top": h_top });
                }
            });
        });
    }


