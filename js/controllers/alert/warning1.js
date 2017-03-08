app.controller('Warning1Controller', ['$scope', 'Restangular', 'ngTableParams', 'dialogs', 'toaster',
    function ($scope, Restangular, NgTableParams, dialogs, toaster ) {

        $('.input-group.date').datepicker({
            format: "yyyy/mm/dd",
            language: "zh-CN",
            autoclose: true,
            todayHighlight: true
        });

        $scope.myVar = true;
        $scope.toggle = function(){ 
            $scope.myVar = !$scope.myVar;
        }

        $("#report").parent().css("width", $("#report").parent().width() + "px").css("overflow-x", "auto");

        $("#report").DataTable({
            dom: "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            language: {
                "url": "views/vendor/jquery/datatables/zh_CN.conf"
            },
            buttons: [{
                "text": "导出",
                "action": function () {
                }
            }, {
                    "extend": "print",
                    "text": "打印",
                    "message": "<报表名称>"
                }],
            autoWidth: false
        });
        
            $scope.alerts = [
                { type: 'primary', msg: '监控中心' },
                { type: 'primary', msg: '告警编号' },
                { type: 'primary', msg: '区域' },
                { type: 'primary', msg: '局站' },
                { type: 'primary', msg: '局站类型' },
                //{ type: 'primary', msg: '设备' },
                //{ type: 'primary', msg: '设备型号' },
                // { type: 'primary', msg: '厂家' },
                // { type: 'primary', msg: '告警量' },
                // { type: 'primary', msg: '告警级别' },
                // { type: 'primary', msg: '发生时间' },
                // { type: 'primary', msg: '告警值' },
                // { type: 'primary', msg: '告警备注' },
                // { type: 'primary', msg: '相关量' }
            ];
            $scope.addAlert = function () {
                $scope.alerts.push({ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' });
            };
            $scope.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };


    }]);
