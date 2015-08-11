app.controller('recipeController', function($scope, $rootScope, $interval) {
	initApp();
	$rootScope.pageClass= 'home';
	$rootScope.head =$rootScope.dish? $rootScope.dish.name : 'Create Recipe Page';
	
	

	
});