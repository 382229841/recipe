app.controller('homeController', function($scope, $rootScope, $interval) {
	$rootScope.pageClass= 'home';
	$rootScope.head = 'Start create recipe code';
	
	;(function($){
		/*touchstart the title and drag the con moving*/ 
		var moveX,moveY,startX,startY;
		$(document).on("touchstart","#title",function(event){
			if($(event.target).attr('id') == 'title'){ 
				var touchPros = event.touches[0]; 
				startX = touchPros.pageX - event.target.parentNode.offsetLeft;   
				startY = touchPros.pageY - event.target.parentNode.offsetTop; 
			} 
			return false;
		}).on("touchmove","#title",function(event){
			if($(event.target).attr('id') == 'title'){      
				var touchPros = event.touches[0]; 
				moveX = touchPros.pageX - startX;
				moveY = touchPros.pageY - startY;
				$('#con').css('left',moveX).css('top',moveY);
			}
		});
	})(Zepto); 

	
});