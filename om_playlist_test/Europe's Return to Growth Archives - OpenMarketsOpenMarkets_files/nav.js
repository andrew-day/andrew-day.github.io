/* Nav background swap for IE 

jQuery('.site-nav ul li.current_page_item a').children('img').each(function() {
	if (jQuery.browser.msie) {
		var src = jQuery(this).attr("src").replace("-off", "-current");
		jQuery(this).attr("src", src);
	}
});

jQuery('.site-nav ul li.page_item a').hover(function () {
	if (jQuery.browser.msie) {
		if(!jQuery(this).parent().hasClass('current_page_item')) {
			jQuery(this).children('img').each(function() {
				if(jQuery(this).attr("src").indexOf('-on') == -1) {
					var src = jQuery(this).attr("src").replace("-off", "-on");
					jQuery(this).attr("src", src);
				} else {
					var src = jQuery(this).attr("src").replace("-on", "-off");
					jQuery(this).attr("src", src);
				}
			});
		}
	}
});

*/

// get my handler to execute before the plugin
// http://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
$.fn.bindFirst = function(name, fn) {
    // bind as you normally would
    // don't want to miss out on any jQuery magic
    this.on(name, fn);

    this.each(function() {
        var handlers = $._data(this, 'events')[name.split('.')[0]];
        if ( window.console ) { console.log( handlers ); };
        // take out the handler we just inserted from the end
        var handler = handlers.pop();
        // move it at the beginning
        handlers.splice(0, 0, handler);
    });
};

$("#s").bindFirst('keydown', function(e) {
	if ($("#ac_submit").parent().hasClass('ac_over') && (e.keyCode == 13)) {	
		e.stopImmediatePropagation();
		e.preventDefault();
		document.getElementById("searchform").submit();
		return false;		
	}
	
});

//code to determine active page for styles, temporary
function viewAllResults(event) {
	event.stopPropagation(); 
	document.getElementById("searchform").submit();
}

$(document).ready(function(){
	if ($('body').hasClass('category-global-finance') || $('body').hasClass('global-finance')) {
		$('.page-item-1213').addClass('current_page_item');
	}
	
	if ($('body').hasClass('category-policy') || $('body').hasClass('policy')) {
		$('.page-item-1214').addClass('current_page_item');
	}
	
	if ($('body').hasClass('category-commodities') || $('body').hasClass('commodities')) {
		$('.page-item-1215').addClass('current_page_item');
	}
	
	if ($('body').hasClass('category-economics') || $('body').hasClass('economics')) {
		$('.page-item-1216').addClass('current_page_item');
	}
	
	if ($('body').hasClass('category-leaders') || $('body').hasClass('leaders')) {
		$('.page-item-1217').addClass('current_page_item');
	}
	
	// if ($('body').hasClass('category-market-updates')) {
	// 	$('.page-item-').addClass('current_page_item');
	// }

	if ($('body').attr('class').indexOf("storylines")>0) {
		$('.page-item-10394').addClass('current_page_item');
	}
});

// function closeAllSearch() {
// 		//
// 		if (document.getElementById("as_s")) {
// 	  	var autosearchbox = document.getElementById("as_s");
// 			autosearchbox.parentNode.removeChild(autosearchbox);
// 		}
		
// 		var input = document.getElementById("s");
// 		input.value = '';
// 		input.blur();
// 		var container = document.getElementById("search-container");
// 		container.className = container.className.replace( /(?:^|\s)search-container-open(?!\S)/g , '' );
  
  
// 	// do the container thing
//     //console.log('this shit werkin');
// }


/* Functions for collapsable menus on phones */

jQuery("#nav-collapse").click(function() {
  if(jQuery(".site-nav ul").is(":visible")) {
		$("#phone-nav .down-arr").removeClass("flip-y");
		$(".site-nav ul li a").addClass("phone-invisible");
		$(".site-nav ul").slideUp(200);
		// $(".site-nav ul").addClass("phone-hide");
		// $("#nav-collapse").delay(300).queue(function(next){
		// 	$(this).removeClass("tab-select");
		// 	next();
		// });
	}
	else{
		$(".site-nav ul").slideDown(200, function() {
			$(".site-nav ul li a").removeClass("phone-invisible");
		});
		$("#phone-nav .down-arr").addClass("flip-y");
		// $(".site-nav ul").removeClass("phone-hide");
		// $("#nav-collapse").delay(100).queue(function(next){
		// 	$(this).addClass("tab-select");
		// 	next();
		// });
		// $("#searchform").hide();
		// $(".site-header #popular").hide();		
		// $("#search-collapse").removeClass("tab-select");
	}  
});

// $(".ac_results").on('click', function() {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	console.log("click");
// });

// $(".ac_results").on('select', 'li:last-child', function() {
// 	console.log("hello");
// });
// $(".ac_results").on('click', 'li:last-child', function() {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	console.log("click");
// });
// $(".ac_results").on('keydown', 'li:last-child', function() {
// 	console.log("keydown");
// });

           
// jQuery("#search-collapse").click(function() {
// 	if(jQuery("#searchform").is(":visible")) {
// 		$("#searchform").slideUp(300);
// 		$("#search-collapse").delay(200).queue(function(next){
// 			$(this).removeClass("tab-select");
// 			next();
// 			});
// 	}else{
// 		$("#searchform").slideDown(300);
// 		$("#search-collapse").delay(100).queue(function(next){
// 			$(this).addClass("tab-select");
// 			next();
// 			});
// 		$(".site-nav ul").hide();
// 		$(".site-nav ul").addClass("phone-hide");
// 		$(".site-header #popular").show();		
// 		$("#nav-collapse").removeClass("tab-select");
// 	}

// });

// jQuery("#search-tablet").click(function() {
// 	if(jQuery("#searchform").is(":visible")) {
// 		$("#searchform").slideUp();
// 	}else{
// 		$("#searchform").slideDown();
// 	}
// });



jQuery("#footer-dept").click(function(){
	if(jQuery(".depts").is(":visible")) {
		$(".depts").slideUp();
		$(".depts").addClass("phone-hide");
		$("#footer-dept .open_accord").removeClass("close_accord");
	}else{
		$(".depts").slideDown();
		$(".depts").removeClass("phone-hide");
		$("#footer-dept .open_accord").addClass("close_accord");
	}
});

jQuery("#footer-voice").click(function(){
	if(jQuery(".voices").is(":visible")) {
		$(".voices").slideUp();
		$(".voices").addClass("phone-hide");
		$("#footer-voice .open_accord").removeClass("close_accord");
	}else{
		$(".voices").slideDown();
		$(".voices").removeClass("phone-hide");
		$("#footer-voice .open_accord").addClass("close_accord");
	}
});




jQuery("#about-om").click(function(){
	if(jQuery(".about-om").is(":visible")) {
		$(".about-om").slideUp();
		$(".about-om").addClass("phone-hide");

	}else{
		$(".about-om").slideDown();
		$(".about-om").removeClass("phone-hide");
		$(".about-footer .down-arr").removeClass("flip-y");
	}
});

jQuery("#about-cme").click(function(){
	if(jQuery(".about-cme").is(":visible")) {
		$(".about-cme").slideUp();
		$(".about-cme").addClass("phone-hide");
		$("#about-cme .open_accord").removeClass("close_accord");
	}else{
		$(".about-cme").slideDown();
		$(".about-cme").removeClass("phone-hide");
		$("#about-cme .open_accord").addClass("close_accord");
	}
});

// this is the expander for the about footer item
jQuery("#about-footer").click(function(e){
	e.preventDefault();
	if(jQuery(".footer-about").is(":visible")) {
		$(".footer-about").addClass("about-hide");
		$(".footer-about").slideUp();
		if (jQuery(window).width() < 661) {
			$("#logo-links-footer.about-open-state ul li.first_").css("padding-bottom", "0" );
		}
		$("#about-footer, #logo-links-footer").removeClass("about-open-state");
		$("#about-footer .down-arr").removeClass("flip-y");
	}
	else{
		$(".footer-about").slideDown( 0, function() {
			$(".footer-about").removeClass("about-hide");
			$("#about-footer, #logo-links-footer").addClass("about-open-state");
			var correctedOffset = 0;
			if (jQuery(window).width() < 979) {
				correctedOffset = $(".footer-about .left-col_").offset().top - 70;
			}
			else {
				correctedOffset = $(".footer-about .left-col_").offset().top;
			}
			$("html, body").animate({ scrollTop: correctedOffset }, "fast");
		});
		if (jQuery(window).width() < 661) {
			$("#logo-links-footer.about-open-state ul li.first_").css("padding-bottom", ($(".footer-about").height()+50) );
		}
		$("#about-footer .down-arr").addClass("flip-y");

		
	}
	
});
