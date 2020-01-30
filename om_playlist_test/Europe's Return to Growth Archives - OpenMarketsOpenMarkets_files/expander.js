//banner expander
$(function documentReady() {
	
	var $exp = $('#expander'),
		$adspace = $exp.children('.adspace'),
		$closed = $adspace.children('.closed'),
		$opened = $adspace.children('.opened');
	
	function openBanner(){
		$closed.hide();
		$opened.show().animate({
				height: '250px'
			},300);
		return false;
	}
	
	function closeBanner(){
		$opened.animate({
				height: '41px'
			},300, function(){
				$opened.hide();
				$closed.show();
		});
		return false;
	}
	
	$closed.children('a.open').click(openBanner);
	$opened.children('a.close').click(closeBanner);

});
