(function($){
  $(function(){

    //Functioning for side nav and parallax effect
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // Effect for Hamburger
    $('.button-collapse').click(function(){
      $(this).fadeOut(1000);
    })

    $(document).click(function(){
      $('.button-collapse').fadeIn(1500);
    })


// Functions for typed.js library working
$(function(){
	$(".typed").typed({
		strings: ["Coder.", "Programmer.", "Web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 3000,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 200,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: " ",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

//Animation
$(document).on('scroll',function(){
  $('.project-card').addClass('animated fadeInLeft');
})


//Cool Hiding Stuff Starts Here
//Hide some projects card of projects container

// At Initially The Container and Show Container Button Hides
$('#hideConatiner').fadeOut();
$('#hide-container').fadeOut();

//When Click on Show More Projects Button...
//1 - More Project Container shows
//2 - Show More Projects Button Hides
//3 - Hide Conatiner Button Shows
$('#show-container').click(function(){
  $('#hideConatiner').fadeIn(1000);
  $(this).fadeOut(1000);
  $('#hide-container').fadeIn(1000);
});

// When Click on hide container Button
//1 - More Project Container hides
//2 - Hide More Projects Button Hides
//3 - Show  more Project Button Shows
$('#hide-container').click(function(){
  $('#hideConatiner').fadeOut(1000);
  $(this).fadeOut();
  $('#show-container').fadeIn(1000);
});

//Cool Hiding Stuff Ends Here

}); // end of document ready
})(jQuery); // end of jQuery name space

//Smooth Scrolling on Targets Starts
$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});
