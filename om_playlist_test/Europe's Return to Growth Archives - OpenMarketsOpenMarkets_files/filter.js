var config = {    
     over: toggleFilterDrop, // function = onMouseOver callback (REQUIRED)    
     timeout: 250, // number = milliseconds delay before onMouseOut    
     out: toggleFilterDrop // function = onMouseOut callback (REQUIRED)    
};

$(function documentReady() {
	$('nav.filter .filtermenu').css('top', $('nav.filter').css('height'));
	$('nav.filter').hoverIntent( config );
});

jQuery(".site-header nav.filter").click(function() {
	$(this).toggleClass('hover');
	$('.filtermenu', this).toggleClass('hover');
});

function toggleFilterDrop () {
	$(this).toggleClass('hover');
	$('.filtermenu', this).toggleClass('hover');

	// Image swaps for IE corners ================================================
	/*
		if ($.browser.msie) {
			$('.filterbox a', this).children('img').each(function() {
				if($(this).attr("src").indexOf('blue') == -1) {
					// var src = $(this).attr("src").match(/[^\.]+/) + "-blue.png";
					var src = $(this).attr("src").replace(".png", "-blue.png");
					$(this).attr("src", src);
				} else {
					var src = $(this).attr("src").replace("-blue", "");
		           	$(this).attr("src", src);
				}
			});
		}
		*/
	// END ============ Image swaps for IE corners ===============================
} // toggleFilterDrop
