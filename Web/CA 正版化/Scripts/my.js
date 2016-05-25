
// JavaScript Document
$(function(){
	
	$('.brick-item .review-wrapper').each(function(index, element) {
		var num=index*-40
        $(element).css('background-position','0 '+num+'px')
    });
	
	$('.brick-item').hover(function(e) {
        $(this).children('div,.review-wrapper').stop().animate({bottom:0},200)
    },function(){
        $(this).children('div,.review-wrapper').stop().animate({bottom:-40},200)
    });
	
});
    
    $(function(){
	var num=$('.fixedd,.fixedded').offset().top;
	//alert(num)
	$(window).scroll(function(e) {
        var win_s=$(window).scrollTop();
		if(win_s>num){
			$('.fixedd').css('position','fixed').css('top',0)//.css('background','rgba(0,0,0,0.5)')
			$('.fixedded').css('position','fixed').css('top',70)//.css('background','rgba(0,0,0,0.5)')
		}else{
			$('.fixedd').css('position','static')//.css('background','rgba(0,0,0,1)')
			$('.fixedded').css('position','static')//.css('background','rgba(0,0,0,1)')
		}
    });
	
	
	//固定导航
		var bl=true;
	$('.fasten span').click(function(e) {
		//如果能判断是折叠还是展开即可；
		if( bl==true ){
			
			$('.fasten').animate({right:0},300);
			$(this).children().attr('src','Images/jishu.png')
			bl=false
			
		}else{
			
			$('.fasten').animate({right:-169},300);
			$(this).children().attr('src','Images/jishu.png')
			bl=true
			
		}
    });
  $(function(){
	  $('.banner').slideDown(1000)
	  $('.banner span').click(function(e) {
        $('.banner').slideUp(1000)
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
		 $('.nothing').hide()
		$('.gengduo').click(function(e) {
            $('.nothing').slideDown(500)
	})			 
			 
  })
  //切换
$(function(){
	$('.Softlist span').mouseover(function(e) {
        $(this).attr('class','current').siblings().attr('class','');//到此为止上部分的功能已经完成
		var num=$(this).index();
		$('.Wp li').eq(num).show().siblings().hide();	
		
    });
});
$(function(){
	$('.Softform span').mouseover(function(e) {
        $(this).attr('class','current').siblings().attr('class','');//到此为止上部分的功能已经完成
		var num=$(this).index();
		$('.Hp li').eq(num).show().siblings().hide();	
		
    });
})
		  
//下拉菜单	
	$(function(){
	$('.dropmenu li:not(:first)').mouseover(function(e) {
		$(this).attr('class','current').siblings().attr('class','')
		var num=$(this).index();
		$('#subnav li').eq(num).show().siblings().hide();	
 });	

})
	
	$('.menu ul .li01').hover(function(e) {
        $(this).children('.menu .hc_lnav ul').stop().toggle()
    });
	$('.anzhuo').hover(function(e) {
        $('.aw').stop().fadeToggle(500)
    });
		$('.apple').hover(function(e) {
        $('.pw').stop().fadeToggle(500)
    });
    	$('.weiruan').hover(function(e) {
        $('.ww').stop().fadeToggle(500)
    });

	$('.anzhuoT').hover(function(e) {
        $(this).children('.img-image').stop().fadeToggle()
    });
	$('.iosT').hover(function(e) {
        $(this).children('.img-imag').stop().fadeToggle()
    });
	$('.weiruanT').hover(function(e) {
        $(this).children('.img-img').stop().fadeToggle()
    });
});
	////详情页切换
	$(function(){
	$('.camTitle span').mouseover(function(e) {
        $(this).attr('class','current').siblings().attr('class','');//到此为止上部分的功能已经完成
		var num=$(this).index();
		$('.change>li').eq(num).show().siblings().hide();	
		
    });
})


		

