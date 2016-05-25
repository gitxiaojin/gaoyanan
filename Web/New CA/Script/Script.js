// JavaScript Document
$(function(){
	$('.advert').slideDown(500)
	$('.advert p').click(function(e) {
        $(this).parent().slideUp(500)
    });
	$('.Navright .Notice').hover(function(e) {
        $('.Navright .tip').stop().slideToggle(500)
    });
	
	
	})
//	//下拉菜单	
//	$(function(){
//	$('.dropmenu li:not(:first)').mouseover(function(e) {
//		$(this).attr('class','current').siblings().attr('class','')
//		var num=$(this).index();
//		$('#subnav li').eq(num).show().siblings().hide();	
// });	
//
//})
//	
//jQuery(document).ready(function(){
//	var qcloud={};
//	$('[_t_nav]').hover(function(){
//		var _nav = $(this).attr('_t_nav');
//		clearTimeout( qcloud[ _nav + '_timer' ] );
//		qcloud[ _nav + '_timer' ] = setTimeout(function(){
//	$('[_t_nav]').each(function(){
//		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
//	});
//		$('#'+_nav).stop(true,true).slideDown(200);
//	}, 150);
//	},function(){
//		var _nav = $(this).attr('_t_nav');
//		clearTimeout( qcloud[ _nav + '_timer' ] );
//		qcloud[ _nav + '_timer' ] = setTimeout(function(){
//		$('[_t_nav]').removeClass('nav-up-selected');
//		$('#'+_nav).stop(true,true).slideUp(200);
//		}, 150);
//	});
//})
//$(function(){
//	
//	$('.brick-item .review-wrapper').each(function(index, element) {
//		var num=index*-40
//        $(element).css('background-position','0 '+num+'px')
//    });
//	
//	$('.brick-item').hover(function(e) {
//        $(this).children('div,.review-wrapper').stop().animate({bottom:0},200)
//    },function(){
//        $(this).children('div,.review-wrapper').stop().animate({bottom:-40},200)
//    });
//	
//	
//下拉菜单开始	
//安卓点击	
//		$('.anzhuo').hover(function(e) {
//        $('.aw').stop().fadeToggle(500)
//    });
//		$('.apple').hover(function(e) {
//        $('.pw').stop().fadeToggle(500)
//    });
//    	$('.weiruan').hover(function(e) {
//        $('.ww').stop().fadeToggle(500)
//    });
//
//	$('.anzhuoT').hover(function(e) {
//        $(this).children('.img-image').stop().fadeToggle()
//    });
//	$('.iosT').hover(function(e) {
//        $(this).children('.img-imag').stop().fadeToggle()
//    });
//	$('.weiruanT').hover(function(e) {
//        $(this).children('.img-img').stop().fadeToggle()
//    });
//
//});
$(function(){
	$('.downSoft li').hover(function(e) {
        $(this).children().toggleClass()
    });
	
	})
$(function(){
	$('.rankWrap').mouseover(function(e) {
        $(this).css({'height':'62px'}).children('.rankWrapI').css({"top":"-26px"})
    });	
	$('.rankWrap').mouseout(function(e) {
        $(this).css({'height':'26px'}).children('.rankWrapI').css({"top":"0"})
    });	
	
	
})
$(function(){
  $('.talkmain span').click(function(e) {
    $(this).attr('class','current').siblings().attr('class','')
	var num=$(this).index()
	$('.liname').eq(num).show().siblings().hide()
});
	
})
	  $(function(){
		$('.more').click(function(e) {
            $('.lose').slideToggle(500)
			 if(  $('.more').html()=='显示所有内容'  ){
    			$('.more').html('隐藏所有内容')
    	}else{
    			$('.more').html('显示所有内容')
		}
			
        });  
	})
     $(function(){
		 $('.lose').hide()
		$('.gengduo').click(function(e) {
            $('.lose').slideDown(500)
	})			 
			 
  })

