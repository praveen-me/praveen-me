//Smooth Scrolling on Targets Starts
$(document).ready(function () {
	$('a[href*=#]').bind('click', function (e) {
		e.preventDefault(); // prevent hard jump, the default behavior

		var target = $(this).attr("href"); // Set the target as variable

		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function () {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});

		return false;
	});
});

$(document).ready(function () {

	$(".cross").hide();
	$(".menu").hide();
	$(".hamburger").click(function () {
		$(".menu").slideToggle("slow", function () {
			$(".hamburger").hide();
			$(".cross").show();
		});
	});

	$(".cross").click(function () {
		$(".menu").slideToggle("slow", function () {
			$(".cross").hide();
			$(".hamburger").show();
		});
	});

});

function hide() {
	$(".menu").slideToggle("slow", function () {
		$(".cross").hide();
		$(".hamburger").show();
	});
}