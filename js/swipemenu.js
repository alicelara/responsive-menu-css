
$(document).ready(function() {
 
 	$(window).scrollTop(0);

	function ignore(e) {
		if($(e.target).closest('.scrollable').length !== 0) { e.preventDefault(); } 
		$(window).scrollTop(0);
	}

	$(document).on('touchmove touchstart', ignore);
	
	(resize = function() {
		var height = $(window).height();
		$('#main').css({'height' : height+'px'});
		$('.container').css({'height' : (height-75)+'px'});
	})();
	
	$(window).resize(resize);
	
	x = false;

	Hammer(document).on("swipeleft", function(event) {
		ignore;
		if(x === false) {
			x = true;
			
			$('#checkmenu').prop('checked', false);
			$('#main').removeClass('scrollable');
	
			setTimeout(function() {
				x = false;
			}, 200)
		}
		
	});	
	
	Hammer(document).on("swiperight", function(event) {
		ignore;
		if(x === false) {
			x = true;
			$('#checkmenu').prop('checked', true);
			$('#main').addClass('scrollable');
			if($('#checkmenu').checked == true) {
				$('#main').removeClass('scrollable');
			}
						
			setTimeout(function() {
				x = false;
				
			}, 200);
		}
	});
});
