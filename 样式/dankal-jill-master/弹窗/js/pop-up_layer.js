/**
 * Created by Jill on 16/11/22.
 */

    //居中定位(公用)
    function positionPopUp(elem){
        var $elem = $("."+elem);
        var w_out = $elem.outerWidth();//水平居中
        var w = $elem.find(".layer_main").outerWidth();
        $elem.find(".layer_main").css("left",0.5*(w_out-w));
        var h_out = $elem.outerHeight();//垂直居中
        var h = $elem.find(".layer_main").outerHeight();//上移隐藏
        $elem.find(".layer_main").css("top",0.5*(h_out-h));
    }
    //参数：触发事件按钮的class，弹窗外框class，弹窗弹出方式(普通：popUp-common,淡入：popUp-fade,下移：popUp-up)
    function popUp(btnClass,elem,func){
        var $btn = $("."+btnClass);
        var $elem = $("."+elem);
        var $func = func;
        //获取索引
        var $popUpIndex = $btn.attr("data-popUp");
        //获取类名索引
        var $popUpClassIndex = $elem.attr("data-popUp");
        if($popUpIndex === $popUpClassIndex){
            $elem.show();
            if($func == "popUp-common"){
                positionPopUp(elem);
                return;
            }else if($func == "popUp-fade"){
                $elem.fadeIn();
                positionPopUp(elem);
                return;

            }else if($func == "popUp-up"){
                positionPopUp(elem);
                var $h_out = $elem.outerHeight();//垂直居中
                var $h = $elem.find(".layer_main").outerHeight();
                $elem.find(".layer_main").css("top",-(0.5*($h_out-$h)+$h));
                var top_=0.5*($h_out-$h);
                $elem.find(".layer_main").animate({top:top_},1000);
                return;
            }else{
                alert("请输入正确的弹出方式普通：popUp-common,淡入：popUp-fade,下移：popUp-up");
            }

        }else if(btnClass === "popUpAuto"){
            $elem.show();
            positionPopUp(elem);
        }else{
            alert("匹配错误");
        }

    }

