$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(document).on('click', 'a.menu-link', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});
