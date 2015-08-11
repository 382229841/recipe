app.config(
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/404");
		$stateProvider
		.state('startCreate', {
			url: '/',
			templateUrl: 'views/startCreate.html',
			controller: 'startCreateController'
		})
		.state('createCode', {
			url: '/recipe',
			templateUrl: 'views/recipe.html',
			controller: 'recipeController'
		})
		.state('projects', {
			url: '/Projects',
			templateUrl: 'views/projects.html',
			controller: 'projectsController'
		})
		.state('resume', {
			url: '/Resume',
			templateUrl: 'views/resume.html',
			controller: 'resumeController'
		})
		.state('music', {
			url: '/Music',
			templateUrl: 'views/music.html',
			controller: 'musicController'
		})
		.state('about', {
			url: '/About',
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})
		.state('howItsMade', {
			url: '/HowItsMade',
			templateUrl: 'views/howItsMade.html',
			controller: 'howItsMadeController'
		})
		.state('404', {
			url: '/404',
			templateUrl: 'views/404.html'
		});
		$locationProvider.html5Mode(true);//.hashPrefix('!');
	}
	);

