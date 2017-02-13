'use strict';

$(function () {
	var $window = $(window);

	$('div[data-type="background"]').each(function () {
		var $bgobj = $(this);

		$window.scroll(function () {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = yPos + 'px';
			$bgobj.css("background-position", "" + coords + " 0");
		});
	});

	$('div[data-type="background-para"]').each(function () {
		var $bgobj = $(this);

		$window.scroll(function () {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = yPos + 'px';
			$bgobj.css("background-position", "0 " + coords);
		});
	});

	$window.scroll(function () {
		if ($window.scrollTop() > 0) {
			$('.nav').addClass('scrolled');
			$('#logo').attr('src', './images/new-logo-black.png');
		} else {
			$('.nav').removeClass('scrolled');
			$('#logo').attr('src', './images/new-logo.png');
		}
	});
});