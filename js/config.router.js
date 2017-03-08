'use strict';

/**
 * Config for the router
 */
angular.module('app').constant('_', window._).run([ '$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$rootScope._ = window._; // Lodash
} ]).config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('app', {
		abstract : true,
		url : '',
		templateUrl : 'views/tpl/app.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ui.select' ]).then();
			} ]
		}
	}).state('app.s0', {
		url : '/index',
		templateUrl : 'views/tpl/dashboard/kpi.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load([
						'views/vendor/modules/d3/d3.v3.min.js',
						'views/vendor/modules/d3/burble.js',
						'views/js/controllers/dashboard/kpi.js'
						]);
				});
			} ]
		}
	})

	// 综合展示
	.state('app.s1', {
		abstract : true,
		url : '/dashboard',
		template : '<div ui-view class="fade-in-up"></div>'
	})
	.state('app.s1.theme-show', {
		url : '/theme-show',
		templateUrl : 'views/tpl/dashboard/theme-show.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load([
						'views/vendor/modules/d3/d3.v3.min.js',
						'views/vendor/modules/d3/burble.js',
						'views/js/controllers/dashboard/theme-show.js'
						]);
				});
			} ]
		}
	})
	.state('app.s1.warn-summary', {
		url : '/warn-summary',
		templateUrl : 'views/tpl/dashboard/warn-summary.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load('views/js/controllers/dashboard/warn-summary.js');
				});
			} ]
		}
	})
	
	// 集中告警
	.state('app.s2', {
		abstract : true,
		url : '/alert',
		template : '<div ui-view class="fade-in-up"></div>'
	})
	.state('app.s2.warning1',{
		url : '/warning1',
		templateUrl : 'views/tpl/alert/warning1.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load('views/js/controllers/alert/warning1.js');
				});
			} ]
		}
	})
	
	// 集中监控
	.state('app.s3', {
		abstract : true,
		url : '/monitor',
		template : '<div ui-view class="fade-in-up"></div>'
	}).state('app.s3.001', {
		url : '/001',
		templateUrl : 'views/tpl/monitor/001.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load('views/js/controllers/monitor/001.js');
				});
			} ]
		}
	}).state('app.s3.002', {
		url : '/002',
		templateUrl : 'views/tpl/monitor/002.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load('views/js/controllers/monitor/002.js');
				});
			} ]
		}
	}).state('app.s3.003', {
		url : '/003',
		templateUrl : 'views/tpl/monitor/003.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([ 'ngTable' ]).then(function() {
					return $ocLazyLoad.load('views/js/controllers/monitor/003.js');
				});
			} ]
		}
	})

	// 报表管理
	.state('app.s4', {
		abstract : true,
		url : '/report',
		template : '<div ui-view class="fade-in-up"></div>'
	}).state('app.s4.001', {
		url : '/001',
		templateUrl : 'views/tpl/report/001.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/general.js');
			} ]
		}
	}).state('app.s4.002', {
		url : '/002',
		templateUrl : 'views/tpl/report/002.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/report2.js');
			} ]
		}
	}).state('app.s4.003', {
		url : '/003',
		templateUrl : 'views/tpl/report/003.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/report3.js');
			} ]
		}
	}).state('app.s4.004', {
		url : '/004',
		templateUrl : 'views/tpl/report/004.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/report4.js');
			} ]
		}
	}).state('app.s4.005', {
		url : '/005',
		templateUrl : 'views/tpl/report/005.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/report5.js');
			} ]
		}
	}).state('app.s4.006', {
		url : '/006',
		templateUrl : 'views/tpl/report/006.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/report6.js');
			} ]
		}
	}).state('app.s4.007', {
		url : '/007',
		templateUrl : 'views/tpl/report/007.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('views/js/controllers/report/general.js');
			} ]
		}
	})

	// 综合分析
	.state('app.s5', {
		abstract : true,
		url : '/analyse',
		template : '<div ui-view class="fade-in-up"></div>'
	})

	// 系统管理
	.state('app.s6', {
		abstract : true,
		url : '/system',
		template : '<div ui-view class="fade-in-up"></div>'
	}).state('app.s6.right', {
		url : '/right',
		template : '<div ui-view class="fade-in-up"></div>'
	}).state('app.s6.log', {
		url : '/log',
		template : '<div ui-view class="fade-in-up"></div>'
	})

	// UI components below
	.state('app.ui', {
		url : '/uicomponent',
		template : '<div ui-view class="fade-in"></div>',
		resolve : {
			deps : [ 'uiLoad', function(uiLoad) {
				return uiLoad.load('views/js/controllers/form.js');
			} ]
		}
	}).state('app.ui.buttons', {
		url : '/buttons',
		templateUrl : 'views/tpl/uitem/ui_buttons.html'
	}).state('app.ui.icons', {
		url : '/icons',
		templateUrl : 'views/tpl/uitem/ui_icons.html'
	}).state('app.ui.bootstrap', {
		url : '/bootstrap',
		templateUrl : 'views/tpl/uitem/ui_bootstrap.html'
	}).state('app.ui.tree', {
		url : '/tree',
		templateUrl : 'views/tpl/uitem/ui_tree.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('angularBootstrapNavTree').then(function() {
					return $ocLazyLoad.load('views/js/controllers/tree.js');
				});
			} ]
		}
	}).state('app.ui.elements', {
		url : '/elements',
		templateUrl : 'views/tpl/uitem/form_elements.html'
	}).state('app.ui.validation', {
		url : '/validation',
		templateUrl : 'views/tpl/uitem/form_validation.html'
	}).state('app.ui.fileupload', {
		url : '/fileupload',
		templateUrl : 'views/tpl/uitem/form_fileupload.html',
		resolve : {
			deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('angularFileUpload').then(function() {
					return $ocLazyLoad.load('views/js/controllers/file-upload.js');
				});
			} ]
		}
	})
} ]);