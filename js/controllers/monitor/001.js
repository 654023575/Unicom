app.controller('Monitor1Controller', ['$scope', 'Restangular', 'ngTableParams', 'dialogs', 'toaster',
    function ($scope, Restangular, NgTableParams, dialogs, toaster) {

        $scope.charConfig = {
            grid: { show: false, left: 10, top: 30, right: 30, bottom: 30 },
            color: ['#5378AD', '#FF8900', '#98BE3B', '#D15B3B'],
        }
  
        $scope.temTrends = [
            {
               name: "温度",
               datapoints:[
                   {x: '13:00',
                    y: 25.7
                   },{
                       x: '14:00',
                       y: 26.8
                   },{
                       x:'15:00',
                       y: 29.1
                   },{
                       x: '16:00',
                       y:27.9
                   },{
                       x:'17:00',
                       y: 25.6
                   }
               ]
            }
        ]
        
        $scope.humTrends = [
            {
               name: "湿度",
               datapoints:[
                   {x: '13:00',
                    y: 25.7
                   },{
                       x: '14:00',
                       y: 26.8
                   },{
                       x:'15:00',
                       y: 29.1
                   },{
                       x: '16:00',
                       y:27.9
                   },{
                       x:'17:00',
                       y: 25.6
                   }
               ]
            }
        ]
  
      

    }]);
