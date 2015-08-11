app.controller('mainController', function($scope, $rootScope, $anchorScroll, $window, $location) {
	$rootScope.head = 'Josh Chorlton\'s Website';

	$scope.actions = [
	{
		title: 'Create Recipe Code',
		state: 'createCode'
	},
	{
		title: 'Projects',
		state: 'projects'
	},
	{
		title: 'Resume',
		state: 'resume'
	},
	{
		title: 'Music',
		state: 'music'
	},
	{
		title: 'About Me',
		state: 'about'
	}
	];
	$scope.doAction=function(state){
		var action={};
		$scope.actions["filter"](function(o){
			if(o.state==state)
				action=o; 
		});
		return action;
	};
	
});