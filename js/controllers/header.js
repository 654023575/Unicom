app.controller('HeaderController', [ '$scope', '$interval', 'Restangular', 'dialogs', 'toaster',
		function($scope, $interval, Restangular, dialogs, toaster) {

			$scope.site = "北京";
			$scope.temperature = "-6";
			$scope.weather = "wi-night-fog";

			var sites = ['北京','廊坊','呼和浩特','哈尔滨','贵安',];
			//TODO get real dada from service
			var temps = ['-6','-2','-9','-18','3'];
			var weathers = [' wi-night-fog',' wi-day-cloudy-windy','wi-day-lightning','wi-day-storm-showers',' wi-day-sunny-overcast',];
			var idx = 0;

			$interval(function(){
				$scope.site = sites[idx];
				$scope.temperature = temps[idx];
				$scope.weather = weathers[idx];
				idx++;
				if (idx>=5) idx=0;

			}, 2000);

		} ]);
