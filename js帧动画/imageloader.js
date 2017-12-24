'use strict';

/**
 * 预加载图片函数
 * @param imges 加载图片的数组或者对象
 * @param callback 全部图片加载完毕后的回调函数
 * @param timeout 加载超时的时长
 */
function loadImage(imges,callback,timeout) {
    var count=0,//加载完成图片的计数器
        success=true,//全部图片加载成功的标志位
        timeoutId=0,//超过timer的Id；
        isTimeout=false;//是否加载超时的标志位
    for(var key in imges){ //对图片数组进行遍历
        if (!imges.hasOwnProperty(key)){ //过滤prototype上的属性
            continue;
        }
        //获得每个图片元素
        var item=imges[key];//期望格式为object:{src:xxx}
        if (typeof item==='string'){
            item=imges[key]={
                src:item
            }
        }
        if (!item||!item.src){ //如果格式不满足期望，则丢弃此条数据进行下一次遍历
            continue;
        }
        //计数加一
        count++;
        //设置图片元素的id
        item.id='__img__'+key+getId();
        //设置图片元素的img，它是一个Image对象
        item.img=window[item.id]=new Image();
        doLoad(item);
    }
    //遍历完成如果计数为0，直接调用callback;
     if (!count){
        callback(success)
     }else if (timeout){
         timeoutId=setTimeout(onTimeout,timeout);
     }
    /**
     * 进行图片加载的函数
     * @param item 图片元素对象
     */
    function doLoad(item) {
        item.status='loading';

        var img=item.img;
        //定义图片加载成功的回调函数
        img.onload=function () {
            success=success & true;
            item.status='loaded';
            done()
        };
        //发起http(s)的请求
        img.src = item.src;
        //定义图片加载失败的回调函数
        img.onerror=function () {
          success=false;
            item.status='error';
        };
        /**
         * 每张图片加载完成的回调函数
         */
        function done() {
            img.onload=img.onerror=null;

            try{
                delete window[item.id];
            } catch (e){

            }
            //每张图片加载完成，计数器减一，当所有图片加载完成且没有超时的情况下，清楚超时计数器，执行回调函数
            if (!--count && !isTimeout) {
                clearTimeout(timeoutId);
                callback(success);
            }
        }
    }
    //超时函数
    function onTimeout() {
        isTimeout=true;
        callback(false)
    }
}
var __id=0;
function getId() {
    return ++__id;
}

module.exports=loadImage;