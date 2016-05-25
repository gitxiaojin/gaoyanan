// JavaScript Document
$(function(){
	   $('.anzhuo').hover(function(e) {
        $('.pic2').stop().toggle(1000);
    });
	$('.pinguo').hover(function(e) {
        $('.pic3').stop().toggle(500);
    });

	$('.cp3').click(function(e) {
			//显示窗口
			$('.tanc_up').fadeIn();
			$('.tanc_down').fadeTo(500,0.3)
    });
	$('.tanc_up .tanc_up_close').click(function(e) {
		$('.tanc_up,.tanc_down').fadeOut();
	});
		$('.shenpi').click(function(e) {
			//显示窗口
			$('.tanc_up').fadeIn();
			$('.tanc_down').fadeTo(500,0.3)
    });
	$('.tanc_up .tanc_up_close').click(function(e) {
		$('.tanc_up,.tanc_down').fadeOut();
	});
});

