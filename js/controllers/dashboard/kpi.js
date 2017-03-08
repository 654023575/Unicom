app.controller('KPIController', [ '$scope', '$interval', 'Restangular', 'ngTableParams', 'dialogs', 'toaster',
		function($scope, $interval, Restangular, NgTableParams, dialogs, toaster) {

			$scope.percentage = 20;
			$scope.value = 1.35;
			$interval(function(){
				$scope.percentage += 1;
				if($scope.percentage >=100) $scope.percentage = 15;
				//$scope.value += Math.random()/10;
				//if ($scope.value >= 2) $scope.value = 1.3;
			}, 10000);

			var geoCoordMap = {
				"廊坊" : [ 116.7, 39.53 ],
				"哈尔滨" : [ 126.63, 45.75 ],
				"呼和浩特" : [ 111.65, 40.82 ],
				"贵安" : [ 106.71, 26.57 ], // to be confirm
			};

			var convertData = function(data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
							name : data[i].name,
							symbol : data[i].symbol,
							value : geoCoord.concat(data[i].value)
						});
					}
				}
				return {
					points : res
				};
			};

			var strT = "";
			strT += "总用电量(万度): " + 4000 + "\n";
			strT += "总告警量(次): " + 8000 + "\n";
			strT += "总流量(T): " + 12000 + "\n";
			strT += "总碳排放(吨): " + 16000;		

			$scope.mapConfig = {
				// "bgColor": "#404a59",
		        title : {
		        	show: true,
		        	borderWidth :1,
					textStyle: {
						fontSize:14,
						fontFamily:'Microsoft Yahei',
						//color:'9b9b9b'
					},
					top : '210',
					text : strT
				},
				"tooltip" : {
					"formatter": function(param) {
						var tip = "";
						tip += param.name + "<br/>";
						tip += "用电量: " + 1000 + "<br/>";
						tip += "告警量: " + 2000 + "<br/>";
						tip += "总流量: " + 3000 + "<br/>";
						tip += "碳排放: " + 4000 + "<br/>";
						return tip;
					}
				},
				"geo" : {
					"map" : "china",
					"label" : {
						"emphasis" : {
							"show" : false
						}
					},	
					"itemStyle": { 
						"normal": { 
							//"areaColor": "#F6A623", 
							"borderColor": "#9B9B9B" 
						}, 
	/*					"emphasis": { 
							"areaColor": "#F6A623" 
						} */
					},
					top : 0,
					bottom : 0,
					left : 0,
				},
				"mapEffect": {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        scale:20,
                        period:5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            formatter: '{b}',
                            textStyle: {color:'#000'}
                       }
                    },
                    symbolSize: function(val) {
                        return val[2];
                    },
                    itemStyle: {
                        normal: {
                            //color: '#CC9933',
                            color: '#F6A623',
                            borderWidth: 5
                        }
                    },
                    title : {
                    	show: true,
/*						textStyle: {
							fontSize:15,
							fontFamily:'Microsoft Yahei',
							color:'9b9b9b'
						},
						left : '48%',
						top : '37%',*/
						text : 'hello world'
					}
                }
			};

			$scope.mapData = convertData([ {
				name : "廊坊",
				value : 5
			}, {
				name : "哈尔滨",
				value : 5
			}, {
				name : "呼和浩特",
				value : 5
			}, {
				name : "贵安",
				value : 5
			} ]),

			$scope.chartConfig = {
				color: ['#5378AD', '#FF8900', '#98BE3B', '#D15B3B'],
				grid : {
					show : false,
					left : 40,
					top : 30,
					right : 60,
					bottom : 30
				},
			};

			var donutConfig = {
				color: ['#A5C067','#3194C6','#CD4E37','#4E5663'],
				grid : {
					show : false,
					left : 10,
					top : 10,
					right : 10,
					bottom : 10
				},
				legend : {
					show : false
				},
				title : {
					textStyle: {
						fontSize:15,
						fontFamily:'Microsoft Yahei',
						//color:'#9b9b9b'
					},
					textAlign: 'center',
					textBaseline: 'middle',
					left : '48%',
					top : '45%'
				}
			};

			$scope.donutConfig1 = _.cloneDeep(donutConfig);
			$scope.donutConfig2 = _.cloneDeep(donutConfig);
			$scope.donutConfig3 = _.cloneDeep(donutConfig);
			$scope.donutConfig4 = _.cloneDeep(donutConfig);

			$scope.donutConfig1.title.text = '用电量';
			$scope.donutConfig2.title.text = '告警量';
			$scope.donutConfig3.title.text = '总流量';
			$scope.donutConfig4.title.text = '碳排放';

			$scope.donutConfig0 = {
				color: ['#A5C067','#3194C6','#CD4E37','#4E5663'],
				legend: {selectedMode:false},
				grid : {
					show : false,
					left : 0,
					top : 30,
					right : 0,
					bottom : 10
				},
				showXAxis : false,
				showYAxis : false

			};

			$scope.donutData0 = [ {
				name : '呼和浩特',
				datapoints : [ {
					x : '呼和浩特',
					y : 0
				}, ]
			}, {
				name : '哈尔滨',
				datapoints : [ {
					x : '哈尔滨',
					y : 0
				}, ]
			}, {
				name : '廊坊',
				datapoints : [ {
					x : '廊坊',
					y : 0
				}, ]
			}, {
				name : '贵安',
				datapoints : [ {
					x : '贵安',
					y : 0
				}, ]
			}, ];
			$scope.donutData1 = [ {
				name : '',
				datapoints : [ {
					x : '廊坊',
					y : 34
				}, {
					x : '哈尔滨',
					y : 18
				}, {
					x : '呼和浩特',
					y : 25
				}, {
					x : '贵安',
					y : 13
				}, ]
			}, ];
			$scope.donutData2 = [ {
				name : '',
				datapoints : [ {
					x : '廊坊',
					y : 34
				}, {
					x : '哈尔滨',
					y : 28
				}, {
					x : '呼和浩特',
					y : 25
				}, {
					x : '贵安',
					y : 23
				}, ]
			}, ];
			$scope.donutData3 = [ {
				name : '',
				datapoints : [ {
					x : '廊坊',
					y : 34
				}, {
					x : '哈尔滨',
					y : 38
				}, {
					x : '呼和浩特',
					y : 35
				}, {
					x : '贵安',
					y : 13
				}, ]
			}, ];
			$scope.donutData4 = [ {
				name : '',
				datapoints : [ {
					x : '廊坊',
					y : 44
				}, {
					x : '哈尔滨',
					y : 28
				}, {
					x : '呼和浩特',
					y : 25
				}, {
					x : '贵安',
					y : 23
				}, ]
			}, ];
			/*
			 * $scope.gaugeConfig = { grid: {show:false, left:20, top:30, right:20, bottom:30}, };
			 * 
			 * $scope.kpi1 = {name:'11', datapoints:[{x:'11', y:1}]};
			 */

			$scope.pueTrends = [ {
				name : '廊坊',
				datapoints : [ {
					x : '2016-01',
					y : 1.34
				}, {
					x : '2016-02',
					y : 1.39
				}, {
					x : '2016-03',
					y : 1.44
				}, {
					x : '2016-04',
					y : 1.33
				}, {
					x : '2016-05',
					y : 1.41
				}, {
					x : '2016-06',
					y : 1.44
				}, {
					x : '2016-07',
					y : 1.49
				}, {
					x : '2016-08',
					y : 1.51
				}, {
					x : '2016-09',
					y : 1.46
				}, {
					x : '2016-10',
					y : 1.44
				}, {
					x : '2016-11',
					y : 1.34
				}, {
					x : '2016-12',
					y : 1.39
				} ]
			}, {
				name : '呼和浩特',
				datapoints : [ {
					x : '2016-01',
					y : 1.44
				}, {
					x : '2016-02',
					y : 1.39
				}, {
					x : '2016-03',
					y : 1.34
				}, {
					x : '2016-04',
					y : 1.43
				}, {
					x : '2016-05',
					y : 1.31
				}, {
					x : '2016-06',
					y : 1.34
				}, {
					x : '2016-07',
					y : 1.49
				}, {
					x : '2016-08',
					y : 1.55
				}, {
					x : '2016-09',
					y : 1.36
				}, {
					x : '2016-10',
					y : 1.34
				}, {
					x : '2016-11',
					y : 1.44
				}, {
					x : '2016-12',
					y : 1.39
				} ]
			}, {
				name : '哈尔滨',
				datapoints : [ {
					x : '2016-01',
					y : 1.30
				}, {
					x : '2016-02',
					y : 1.41
				}, {
					x : '2016-03',
					y : 1.42
				}, {
					x : '2016-04',
					y : 1.43
				}, {
					x : '2016-05',
					y : 1.51
				}, {
					x : '2016-06',
					y : 1.34
				}, {
					x : '2016-07',
					y : 1.39
				}, {
					x : '2016-08',
					y : 1.44
				}, {
					x : '2016-09',
					y : 1.45
				}, {
					x : '2016-10',
					y : 1.41
				}, {
					x : '2016-11',
					y : 1.44
				}, {
					x : '2016-12',
					y : 1.49
				} ]
			}, {
				name : '贵安',
				datapoints : [ {
					x : '2016-01',
					y : 1.54
				}, {
					x : '2016-02',
					y : 1.51
				}, {
					x : '2016-03',
					y : 1.49
				}, {
					x : '2016-04',
					y : 1.53
				}, {
					x : '2016-05',
					y : 1.41
				}, {
					x : '2016-06',
					y : 1.54
				}, {
					x : '2016-07',
					y : 1.49
				}, {
					x : '2016-08',
					y : 1.51
				}, {
					x : '2016-09',
					y : 1.46
				}, {
					x : '2016-10',
					y : 1.54
				}, {
					x : '2016-11',
					y : 1.64
				}, {
					x : '2016-12',
					y : 1.59
				} ]
			}, ];

			$scope.powerTrends = [ {
				name : '廊坊',
				datapoints : [
				/*
				 * {x:'2016-01',y:1277282}, {x:'2016-02',y:1367282}, {x:'2016-03',y:1292822}, {x:'2016-04',y:1397282}, {x:'2016-05',y:1317282},
				 * {x:'2016-06',y:1290222},
				 */
				{
					x : '2016-07',
					y : 1372882
				}, {
					x : '2016-08',
					y : 1411829
				}, {
					x : '2016-09',
					y : 1300292
				}, {
					x : '2016-10',
					y : 1418822
				}, {
					x : '2016-11',
					y : 1299202
				}, {
					x : '2016-12',
					y : 1310011
				} ]
			}, {
				name : '呼和浩特',
				datapoints : [
				/*
				 * {x:'2016-01',y:1277282}, {x:'2016-02',y:1367282}, {x:'2016-03',y:1292822}, {x:'2016-04',y:1397282}, {x:'2016-05',y:1317282},
				 * {x:'2016-06',y:1290222},
				 */
				{
					x : '2016-07',
					y : 1772882
				}, {
					x : '2016-08',
					y : 1811829
				}, {
					x : '2016-09',
					y : 1900292
				}, {
					x : '2016-10',
					y : 1818822
				}, {
					x : '2016-11',
					y : 1599202
				}, {
					x : '2016-12',
					y : 1710011
				} ]
			}, {
				name : '哈尔滨',
				datapoints : [
				/*
				 * {x:'2016-01',y:1277282}, {x:'2016-02',y:1367282}, {x:'2016-03',y:1329282}, {x:'2016-04',y:1397282}, {x:'2016-05',y:1317282},
				 * {x:'2016-06',y:1290222},
				 */
				{
					x : '2016-07',
					y : 1372882
				}, {
					x : '2016-08',
					y : 1411829
				}, {
					x : '2016-09',
					y : 1300292
				}, {
					x : '2016-10',
					y : 1418822
				}, {
					x : '2016-11',
					y : 1299202
				}, {
					x : '2016-12',
					y : 1310011
				} ]
			}, {
				name : '贵安',
				datapoints : [
				/*
				 * {x:'2016-01',y:1377282}, {x:'2016-02',y:1467282}, {x:'2016-03',y:1499282}, {x:'2016-04',y:1247282}, {x:'2016-05',y:1297282},
				 * {x:'2016-06',y:1290222},
				 */
				{
					x : '2016-07',
					y : 982882
				}, {
					x : '2016-08',
					y : 891829
				}, {
					x : '2016-09',
					y : 880292
				}, {
					x : '2016-10',
					y : 788822
				}, {
					x : '2016-11',
					y : 749202
				}, {
					x : '2016-12',
					y : 610011
				} ]
			}, ];

			$scope.warningTrends = [ {
				name : '一号楼',
				datapoints : [ {
					x : '2016-07',
					y : 137
				}, {
					x : '2016-08',
					y : 151
				}, {
					x : '2016-09',
					y : 130
				}, {
					x : '2016-10',
					y : 141
				}, {
					x : '2016-11',
					y : 129
				}, {
					x : '2016-12',
					y : 111
				} ]
			}, {
				name : '二号楼',
				datapoints : [ {
					x : '2016-07',
					y : 97
				}, {
					x : '2016-08',
					y : 91
				}, {
					x : '2016-09',
					y : 110
				}, {
					x : '2016-10',
					y : 121
				}, {
					x : '2016-11',
					y : 83
				}, {
					x : '2016-12',
					y : 109
				} ]
			}, {
				name : '三号楼',
				datapoints : [ {
					x : '2016-07',
					y : 177
				}, {
					x : '2016-08',
					y : 161
				}, {
					x : '2016-09',
					y : 150
				}, {
					x : '2016-10',
					y : 181
				}, {
					x : '2016-11',
					y : 179
				}, {
					x : '2016-12',
					y : 131
				} ]
			}, {
				name : '四号楼',
				datapoints : [ {
					x : '2016-07',
					y : 117
				}, {
					x : '2016-08',
					y : 111
				}, {
					x : '2016-09',
					y : 120
				}, {
					x : '2016-10',
					y : 119
				}, {
					x : '2016-11',
					y : 139
				}, {
					x : '2016-12',
					y : 121
				} ]
			}, ];

		} ]);
