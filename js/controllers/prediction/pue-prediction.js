app.controller('PuePredictionController', ['$scope', 'Restangular' ,'ngTableParams', 'dialogs', 'toaster', 
	function($scope, Restangular, NgTableParams, dialogs, toaster) {

    $scope.chartConfig = {
        grid: {show:false, left:40, top:30, right:60, bottom:30},
    };

	$scope.pueTrends = [
		{name:'实际', datapoints:[
			{x:'2016-01',y:1.34},
			{x:'2016-02',y:1.39},
			{x:'2016-03',y:1.44},
			{x:'2016-04',y:1.33},
			{x:'2016-05',y:1.41},
			{x:'2016-06',y:1.44},
			{x:'2016-07',y:1.49},
			{x:'2016-08',y:1.51},
			{x:'2016-09',y:1.46},
			{x:'2016-10',y:1.44},
			{x:'2016-11',y:1.34},
			{x:'2016-12',y:1.39}
		]},
		{name:'预测', datapoints:[
			{x:'2016-01',y:1.35},
			{x:'2016-02',y:1.40},
			{x:'2016-03',y:1.43},
			{x:'2016-04',y:1.32},
			{x:'2016-05',y:1.39},
			{x:'2016-06',y:1.45},
			{x:'2016-07',y:1.51},
			{x:'2016-08',y:1.52},
			{x:'2016-09',y:1.45},
			{x:'2016-10',y:1.45},
			{x:'2016-11',y:1.36},
			{x:'2016-12',y:1.39},
			{x:'2017-01',y:1.42},
			{x:'2017-02',y:1.45},
			{x:'2017-03',y:1.41},
		]},
    ];

}]);


