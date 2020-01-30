jQuery(document).ready(function($) {

	// The number of the next page to load (/page/x/).
	var pageNum = parseInt(pbd_alp.startPage) + 1;
	
	// The maximum number of pages the current query can return.
	var max = parseInt(pbd_alp.maxPages);
	
	// The link of the next page of posts.
	var nextLink = pbd_alp.nextLink;
	
	/**
	 * Replace the traditional navigation with our own,
	 * but only if there is at least one page of new posts to load.
	 */
	if(pageNum <= max) {
		// Insert the "More Posts" link.
		$('#grid-container, div.post-listing') 
			.append('<div class="pbd-alp-placeholder-'+ pageNum +'"><div class="clear"></div></div>')
			.append('<div class="more"><div class="divider-left"></div><div class="load-more"><span class="text" id="pbd-alp-load-posts"><a href="#">Load More</a></span></div><div class="divider-right"></div><div class="clear"></div>');
			
		// Remove the traditional navigation.
		$('.navigation').remove();
	}
	
	
	/**
	 * Load new posts when the link is clicked.
	 */
	$('#pbd-alp-load-posts a').click(function() {
	
		// Are there more posts to load?
		if(pageNum <= max) {
		
			// Show that we're working.
			$(this).text('Loading...');
			
			$('.pbd-alp-placeholder-'+ pageNum).load(nextLink + ' .grid-box',
				function() {
					// Update page number and nextLink.
					pageNum++;
					nextLink = nextLink.replace(/\/page\/[0-9]+/, '/page/'+ pageNum);

					// Add a new placeholder, for when user clicks again.
					$('.more')
						.before('<div class="pbd-alp-placeholder-'+ pageNum +'"></div>')
					
					// Update the button message.
					if(pageNum <= max) {
						$('#pbd-alp-load-posts a').text('Load More');
					} else {
						$('#pbd-alp-load-posts a').text('No more posts');
					}
				}
			);
			
			
			return false;
		} else {
			// $('#pbd-alp-load-posts a').append('.');
		}	
	});
});
