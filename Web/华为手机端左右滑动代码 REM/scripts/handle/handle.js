function eventPrevent() {
	$(document).on('touchmove', function(event) {
		event.preventDefault();
	});
};

function hdHandle() {
	var container = $('.container');
	var contents = container.find('.content');
	var containerNavLi = $('.container-nav li');
	var iNow = 0;
	var returnBtn = $('.return-index');
	container.css('width', contents.length * 6.4 + 'rem');
	var startPosition, endPosition, deltaX, deltaY, moveLength;
	containerNavLi.eq(iNow).addClass('active').siblings('li').removeClass('active');
	returnBtn.on('click', function() {
		container.animate({
			left: '0rem'
		});
		iNow = 0;
		containerNavLi.eq(iNow).addClass('active').siblings('li').removeClass('active');
	})
	container.on('touchstart', function(e) {
		var touch = e.touches[0];
		startPosition = {
			x: touch.pageX,
			y: touch.pageY
		}
	}).on('touchmove', function(e) {
		// eventPrevent();
		var touch = e.touches[0];
		endPosition = {
			x: touch.pageX,
			y: touch.pageY
		};
		deltaX = endPosition.x - startPosition.x;
		deltaY = endPosition.y - startPosition.y;
		moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
	}).on('touchend', function(e) {
		if (deltaX < -50) { // 向左划动
			if (iNow == contents.length - 1) {
				return;
			};
			iNow++;
			$(this).animate({
				left: -6.4 * iNow + 'rem'
			}, function() {
				containerNavLi.eq(iNow).addClass('active').siblings('li').removeClass('active');
			});
		} else if (deltaX > 50) { // 向右划动  
			if (iNow == 0) {
				return;
			}
			iNow--;
			$(this).animate({
				left: -6.4 * iNow + 'rem'
			}, function() {
				containerNavLi.eq(iNow).addClass('active').siblings('li').removeClass('active');
			});
		}
		if (iNow == 1) {
			setTimeout(function() {
				$('.content2 img').addClass('anim-img1');
			}, 400)
		} else if (iNow != 1) {
			$('.content2 img').removeClass('anim-img1');
		}
	});
};

function toggleHandle() {
	var navTab = $('.nav-list li');
	var main = $('.main-wrap .main');
	var content3 = $('.content3');
	navTab.on('click', function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		main.eq(index).show().siblings('.main').hide();
		if (index == 3) {
			content3.addClass('content4');
		} else {
			content3.removeClass('content4');
		}
	});
};

function hotLayerHandle() {
	var btn = $('.hot-btn');
	var layer = $('.hot-layer');
	var close = $('.hot-close');
	btn.on('click', function() {
		layer.show();
	});
	close.on('click', function() {
		layer.hide();
	});
};


function areaHandle() {
	var areaList = $('.area-list li');
	var layer = $('.area-photo');
	var close = $('.area-close');
	var layerUl = layer.find('ul');
	var liLength = layerUl.find('li').length;
	var iNow = 0;
	var startPosition, endPosition, deltaX, deltaY, moveLength;
	areaList.on('click', function() {
		iNow = $(this).index();
		layer.show();
		layerUl.css({
			'width': liLength * 6.04 + 'rem',
			'left': -6.04 * iNow + 'rem'
		});
	})
	close.on('click', function() {
		layer.hide();
	})
	layerUl.on('touchstart', function(e) {
		e.stopPropagation();
		var touch = e.touches[0];
		startPosition = {
			x: touch.pageX,
			y: touch.pageY
		}
	}).on('touchmove', function(e) {
		e.stopPropagation();
		var touch = e.touches[0];
		endPosition = {
			x: touch.pageX,
			y: touch.pageY
		};

		deltaX = endPosition.x - startPosition.x;
		deltaY = endPosition.y - startPosition.y;
		moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
	}).on('touchend', function(e) {
		e.stopPropagation();
		if (deltaX < 0) { // 向左划动  
			if (iNow == liLength - 1) {
				return;
			};
			iNow++;
			$(this).animate({
				left: -6.04 * iNow + 'rem'
			});
		} else if (deltaX > 0) { // 向右划动  
			if (iNow == 0) {
				return;
			}
			iNow--;
			$(this).animate({
				left: -6.04 * iNow + 'rem'
			});
		}
	});
};

function panduanHandle() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
};

function wxshare() {
	var shateBtn = $('.review-main6');
	var wxLayer = $('.wxshare-wrap');
	var value = panduanHandle();
	shateBtn.on('click', function() {
		if (value) {
			wxLayer.show();
		} else {
			otherShare();
		}
	});
	wxLayer.on('click', function() {
		$(this).hide();
	})
};

function otherShare() {
	var other = $('.other-share');
	var qq = $('.share-qq');
	var sina = $('.share-sina');
	var close = $('.other-close');
	other.animate({
		bottom: '0rem'
	});
	qq.on('click', function() {
		shareqq();
	});
	sina.on('click', function() {
		sharesina();
	});
	close.on('click', function() {
		other.animate({
			bottom: '-2rem'
		})
	});
};

function shareqq() {
	console.log(document.title);
	console.log(window.location.href);
	window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(document.title) + '&summary=' + encodeURIComponent(document.title) + '&pics=' + encodeURIComponent('') + '&' + new Date().getTime());
};

function sharesina() {
	var url = 'source=' + encodeURIComponent('it68') + '&title=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.href) + '&pic=' + encodeURIComponent('') + '';
	window.open('http://service.weibo.com/share/share.php?' + url + '&' + new Date().getTime());
};