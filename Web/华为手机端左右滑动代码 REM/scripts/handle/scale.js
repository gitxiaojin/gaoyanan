function calcScale() {
	// var resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var win = $(window);
	var winWidth = win.width();
	if (!winWidth) return;
	if (winWidth > 640) {
		$('html').css('fontSize', '100px');
	} else {
		$('html').css('fontSize', (100 * (winWidth / 640)).toFixed(2) + 'px');
	}
	$('body').show();
};
calcScale();