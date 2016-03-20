
    $('.territorios').each( function() {
    var $pic     = $(this),
        getItems = function() {
            var items = [];
            $pic.find('button').each(function() {

                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1],
                        $caption = $(this).attr('capt');
     
                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height,
                        title: $caption,
                    }
 
                    items.push(item);
            });
            return items;
        }
    
    var items = getItems();
	var $pswp = $('.pswp')[0];
	$pic.on('click', 'figure', function(event) {
	    event.preventDefault();
	     
	    var $index = $(this).index();
        var error = "La imagen no se pudo cargar";
	    var options = {
            index: $index,
	        bgOpacity: 0.7,
	        showHideOpacity: true,
            errorMsg: error,
	    }
	     
	    // Initialize PhotoSwipe
	    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
	    lightBox.init();
	});
});
