//homepage rotator
$(function documentReady() {
	
	function fadeShow($div) { //turn off fades for IE6-7 - requires Modernizr
		if ($('.no-opacity').length) {
			$div.show();
		} else {
			$div.fadeIn();
		}
	}
	function fadeHide($div) { //turn off fades for IE6-7 - requires Modernizr
		if ($('.no-opacity').length) {
			$div.hide();
		} else {
			$div.fadeOut();
		}
	}
		
	function nextPanel() {
		var $currentpanel = $('#featured-slideshow .panel:visible'),
			$nextpanel = $currentpanel.next('.panel');
		if ($nextpanel.length) {
			fadeHide($currentpanel);
			fadeShow($nextpanel);
		} else {
			fadeHide($currentpanel);
			fadeShow($('#featured-slideshow .panel:first'));
		}
		return false;
	}
	function prevPanel() {
		var $currentpanel = $('#featured-slideshow .panel:visible'),
			$nextpanel = $currentpanel.prev('.panel');
		if ($nextpanel.length) {
			fadeHide($currentpanel);
			fadeShow($nextpanel);
		} else {
			fadeHide($currentpanel);
			fadeShow($('#featured-slideshow .panel:last'));
		}
		return false;
	}

	$('#featured-slideshow .controls .next').click(nextPanel);
	$('#featured-slideshow .controls .previous').click(prevPanel);

});
