
$(document).ready(function() {
 
 	$(window).scrollTop(0);
  	
	
	(resize = function() {
		
		var height = $(window).height();

		
	})();
	
	$(window).resize(resize);
	
	x = false;

	Hammer(document).on("swipeleft", function(event) {
				
		if(x === false) {
			x = true;
		
			$('#checkmenu').prop('checked', false);
	
			setTimeout(function() {
				x = false;
			}, 200)
		}
		
	});	
	
	Hammer(document).on("swiperight", function(event) {
		
		if(x === false) {
			x = true;

				$('#checkmenu').prop('checked', true);
						
			setTimeout(function() {
				x = false;
				
			}, 200);
		}
	});

});
