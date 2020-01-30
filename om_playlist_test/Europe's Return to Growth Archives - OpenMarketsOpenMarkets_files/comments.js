//show/hide comments
$(function documentReady() {
	
	$('.expander-link').append('<span class="expander-indicator">+</span>');
	$('.expander-link').append('<span class="open_accord"></span>');
	
	function commentExpand(link) {
		link.next('.expander').slideDown();
		link.children('.expander-indicator').html('&ndash;');
		link.children('.open_accord').addClass("close_accord");
		link.unbind();
		link.click(function(){
			commentContract($(this));
		});
		return false;
	}
	function commentContract(link) {
		link.next('.expander').slideUp();
		link.children('.expander-indicator').html('+');
		link.children('.open_accord').removeClass("close_accord");
		link.unbind();
		link.click(function(){
			commentExpand($(this));
		});
		return false;
	}

	$('.expander-link').click(function(){
		commentExpand($(this));
	});
	
	$('#cancel').click(function(){
		commentContract($('#hd-post'));
	});
	
	$('.comment-reply-link').click(function(){
		commentExpand($('#hd-post'));
	});
	
	$('.expander').hide();

});
