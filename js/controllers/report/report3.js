app.controller('Report3Controller', [ '$scope', 'Restangular', function($scope, Restangular) {
	$('.input-group.date').datepicker({
		format : "yyyy/mm/dd",
		language : "zh-CN",
		autoclose : true,
		todayHighlight : true
	});
    
    $scope.myVar = true;
    $scope.toggle3 = function(){ 
       $scope.myVar = !$scope.myVar;
    }


	$("#report").DataTable({
		dom : "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
		language : {
			"url" : "views/vendor/jquery/datatables/zh_CN.conf"
		},
		buttons : [ {
			"text" : "导出",
			"action" : function() {
			}
		}, {
			"extend" : "print",
			"text" : "打印",
			"message" : "<报表名称>"
		} ],
		autoWidth : false
	});
} ]);
