app.controller('recipeController', function($scope, $rootScope, $interval) {
	initApp();
	$rootScope.pageClass= 'home';
	$rootScope.head =$rootScope.dish? $rootScope.dish.name : 'Create Recipe Page';
	
	
	//var arrButton = ["取消","确定"];
	//var msg="";
	$scope.setHeater=function(){
		openDialog('html',"heater.html", null, 3,
			function (r) {
				if (r) {
					
				}
		});
	};
	
	$scope.setBox=function(){
		openDialog('html',"box.html", null, 3,
			function (r) {
				if (r) {
					
				}
		});
	};
	
	$scope.setStirrer=function(){
		openDialog('html',"stirrer.html", null, 3,
			function (r) {
				if (r) {
					
				}
		});
	};
	
	$scope.setRepeater=function(){
		openDialog('html',"repeater.html", null, 3,
			function (r) {
				if (r) {
					
				}
		});
	};
	
	$scope.setTimer=function(){
		openDialog('html',"timer.html", null, 3,
			function (r) {
				if (r) {
					
				}
		});
	};
	
	

	
});