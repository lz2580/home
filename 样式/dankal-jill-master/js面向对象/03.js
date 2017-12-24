/**
 * Created by Jill on 16/11/23.
 */

//一个简单的面向对象程序
//var obj = {};

var obj = new Object();//创建了一个空的对象
obj.name = 'jill';//属性
obj.showName = function(){//方法
    alert(this.name);
}

obj.showName();