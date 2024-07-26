$( document ).ready(function() {
	
	$(document).on('click touchstart', function(event){
		 var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass(
				"navbar-collapse collapse in");
		if (_opened === true) {
			setTimeout(function(){
				$("button.navbar-toggle").click();
			}, 200);
		}
	});
	
	$(document).on('click touchstart', 'a:not(.islink)', function(event){
		 event.preventDefault();
		$('html, body').animate({
			scrollTop: $( '[name="' +$.attr(this, 'href').substr(1) + '"]' ).offset().top - ($('.img-logo').height() + $('.intro-divider').height())
		}, 500);
	});
	
});
