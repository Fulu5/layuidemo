layui.define(['layer', 'table'], function (exports) {
    var layer = layui.layer,
        table = layui.table;
    table.render({
        elem: '#table_container',
        defaultToolbar: [],
        height: 312,
        url: 'table.json',
        page: true,
        limit: 30,
        cols: [
            [{
                    field: '',
                    type: 'checkbox',
                    fixed: true
                }, {
                    field: 'id',
                    title: 'ID',
                    width: 80,
                    sort: true,
                    fixed: 'left',
                    totalRow: true,
                    totalRowText: '合计哈哈哈'
                },
                {
                    field: 'username',
                    title: '用户名',
                    width: 80
                },
                {
                    field: 'sex',
                    title: '性别',
                    width: 80,
                    sort: true
                },
                {
                    field: 'city',
                    title: '城市',
                    width: 80
                },
                {
                    field: 'sign',
                    title: '签名',
                    width: 177
                },
                {
                    field: 'experience',
                    title: '积分',
                    width: 80,
                    sort: true
                },
                {
                    field: 'score',
                    title: '评分',
                    width: 80,
                    sort: true
                },
                {
                    field: 'classify',
                    title: '职业',
                    width: 80
                },
                {
                    field: 'wealth',
                    title: '财富',
                    width: 135,
                    sort: true
                },
                 {
                     fixed: 'right',
                     width: 300,
                     align: 'center',
                     toolbar: '#bardemo_templet'
                 }
            ]
        ]
    });
    // bardemo
    var bardemoData = {
        username: 'bardemo',
        title: 'sometitle',
        auth: 2
    }
    table.on('toolbar(table_container_filter)', function (obj) {
        //获得当前行数据
        var data = obj.data;
        //获得 lay-event 对应的值
        var layEvent = obj.event;
        //获得当前行 tr 的DOM对象
        var tr = obj.tr;

        if (layEvent === 'detail') { //查看
            //do somehing
        } else if (layEvent === 'del') {
            layer.confirm('真的删除行么', function (index) {
                obj.del(index);
                layer.close(index);
            });
        } else if (layEvent === 'edit') { //编辑
            //do something
        }
        layer.msg(layEvent);
    });
    exports('bardemo');
});