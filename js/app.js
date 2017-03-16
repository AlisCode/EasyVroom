$(function() {

	window.setInterval(function() {
		//$(".anim-car").removeClass("animated-car").addClass("animated-car");
		$(".anim-car").replaceWith($(".anim-car").clone(true));
	}, 15000);

});