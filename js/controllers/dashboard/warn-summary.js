app.controller('WarnSummaryController', ['$scope', 'Restangular' ,'ngTableParams', 'dialogs', 'toaster', 
	function($scope, Restangular, NgTableParams, dialogs, toaster) {
        
    $('.input-group.date').datepicker({
            format: "yyyy/mm/dd",
            language: "zh-CN",
            autoclose: true,
            todayHighlight: true
        });    

    $scope.chartConfig = {
        grid: {show:false, left:40, top:30, right:60, bottom:30},
		color: ['#5378AD', '#FF8900', '#98BE3B', '#D15B3B'],
    };

		$scope.warnSummary1 = [
		{name:'', datapoints:[
			{x:'高低压告警',y:56},
			{x:'UPS告警',y:18},
			{x:'蓄电池告警',y:65},
			{x:'油压告警',y:213},
			{x:'温度告警',y:77},
			{x:'空调告警',y:77},
		]},
		];
		$scope.warnSummary2 = [
			{name:'',datapoints:[
				{x:'一级告警',y:134},
				{x:'二级告警',y:18},
				{x:'三级告警',y:65},
				{x:'四级告警',y:213},
			]},
		];
		$scope.warnTrends=[ {
			name : '一级告警',
			datapoints : [ {
				x : '0',
				y : 3
			}, {
				x : '9.12',
				y :10
			},{
				x : '9.13',
				y : 8
			}, {
				x : '9.14',
				y : 12
			}, {
				x : '9.15',
				y : 23
			}, {
				x : '9.16',
				y : 15
			}, {
				x : '9.17',
				y : 16
			}, {
				x : '9.18',
				y : 17
			}, {
				x : '9.19',
				y : 23
			}, {
				x : '9.20',
				y : 27
			}, {
				x : '9.21',
				y : 29
			}, {
				x : '9.22',
				y : 16
			}, {
				x : '9.23',
				y : 17
			},{
				x : '9.24',
				y : 10
			},{
				x : '9.25',
				y : 2
			},{
				x : '9.26',
				y : 12
			},{
				x : '9.27',
				y : 6
			} ]
		}, {
			name : '二级告警',
			datapoints : [ {
				x : '0',
				y : 5
			}, {
				x : '9.12',
				y : 12
			},{
				x : '9.13',
				y : 39
			}, {
				x : '9.14',
				y : 44
			}, {
				x : '9.15',
				y : 33
			}, {
				x : '9.16',
				y : 41
			}, {
				x : '9.17',
				y :.44
			}, {
				x : '9.18',
				y : 49
			}, {
				x : '9.19',
				y : 51
			}, {
				x : '9.20',
				y : 46
			}, {
				x : '9.21',
				y : 44
			}, {
				x : '9.22',
				y : 34
			}, {
				x : '9.23',
				y : 39
			},{
				x : '9.24',
				y : 39
			},{
				x : '9.25',
				y : 39
			},{
				x : '9.26',
				y :39
			},{
				x : '9.27',
				y : 13
			} ]
		}, {
			name : '三级告警',
			datapoints : [ {
				x : '0',
				y : 30
			}, {
				x : '9.12',
				y : 22
			},{
				x : '9.13',
				y : 39
			}, {
				x : '9.14',
				y : 14
			}, {
				x : '9.15',
				y : 13
			}, {
				x : '9.16',
				y : 41
			}, {
				x : '9.17',
				y : 45
			}, {
				x : '9.18',
				y : 23
			}, {
				x : '9.19',
				y : 51
			}, {
				x : '9.20',
				y : 1.46
			}, {
				x : '9.21',
				y : 44
			}, {
				x : '9.22',
				y : 34
			}, {
				x : '9.23',
				y : 39
			},{
				x : '9.24',
				y : 33
			},{
				x : '9.25',
				y : 12
			},{
				x : '9.26',
				y : 34
			},{
				x : '9.27',
				y : 39
			} ]
		}, {
			name : '四级告警',
			datapoints :  [ {
				x : '0',
				y : 23
			}, {
				x : '9.12',
				y : 45
			},{
				x : '9.13',
				y : 23
			}, {
				x : '9.14',
				y : 1.44
			}, {
				x : '9.15',
				y : 1.33
			}, {
				x : '9.16',
				y : 1.41
			}, {
				x : '9.17',
				y : 1.44
			}, {
				x : '9.18',
				y : 1.49
			}, {
				x : '9.19',
				y : 1.51
			}, {
				x : '9.20',
				y : 1.46
			}, {
				x : '9.21',
				y : 1.44
			}, {
				x : '9.22',
				y : 1.34
			}, {
				x : '9.23',
				y : 1.39
			},{
				x : '9.24',
				y : 1.39
			},{
				x : '9.25',
				y : 1.39
			},{
				x : '9.26',
				y : 1.39
			},{
				x : '9.27',
				y : 1.39
			} ]
		}, ];











    //$scope.warnSummary1 = [
		//{name:'', datapoints:[
		//	{x:'空调',y:134},
		//	{x:'油量',y:18},
		//	{x:'UPS',y:65},
		//	{x:'温度',y:213},
		//	{x:'其他',y:77},
		//]},
    //];
    //
    //$scope.warnSummary2 = [
		//{name:'', datapoints:[
		//	{x:'空调',y:114},
		//	{x:'油量',y:38},
		//	{x:'UPS',y:25},
		//	{x:'温度',y:113},
		//	{x:'其他',y:87},
		//]},
    //];

    //$scope.warnSummary3 = [
		//{name:'', datapoints:[
		//	{x:'空调',y:104},
		//	{x:'油量',y:28},
		//	{x:'UPS',y:35},
		//	{x:'温度',y:223},
		//	{x:'其他',y:27},
		//]},
    //];
    //
    //$scope.warnSummary4 = [
		//{name:'', datapoints:[
		//	{x:'空调',y:94},
		//	{x:'油量',y:22},
		//	{x:'UPS',y:69},
		//	{x:'温度',y:183},
		//	{x:'其他',y:27},
		//]},
    //];

}]);


