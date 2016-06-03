(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Slider
 $(document).ready(function(){
      $('.slider').slider({full_width: true});
});

// Counter
$('.counter').counterUp({
  delay: 10,
  time: 2000
});

// Box Vote
 $(document).ready(function(){
    $('.materialboxed').materialbox();
});

 // ScrollTo
 $(document).ready(function() {
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 2000; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
	});
});

 // Dropdown
$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
});