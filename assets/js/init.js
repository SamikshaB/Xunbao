(function($){
	$(function(){
		$('.parallax').parallax();
		$(".button-collapse").sideNav();
		 $('.modal-trigger').leanModal();
		 $('select').material_select();
		  $('.carousel').carousel();
  }); // end of document ready
})(jQuery); // end of jQuery name space


var clock;

$(document).ready(function() {

				// Grab the current date
				var currentDate = new Date();

				// Set some date in the future. In this case, it's always Jan 1
				var futureDate  = new Date(2016, 2, 3);

				// Calculate the difference in seconds between the future and current date
				var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter',
					countdown: true,
					showSeconds: true
				});


			






});
