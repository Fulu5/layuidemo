layui.define('layer', function (exports) { 
    var layer = layui.layer;
    var obj = {
        hello: function (str) { 
            layer.msg('Hello ' + str);
         }
    };
    exports('mymod', obj);
 });