// JavaScript Document
$(function(){
	var sx=0
	var timer=null;
	//var num=0;
	
	$('.banner ol li').click(function(e) {
        var index=$(this).index();
		$(this).addClass('current').siblings().removeClass();;
		
		$('.banner ul').stop().animate({left:-sx*100+'%'},500)
		sx=index
    });
	
	
	//箭头工作
	$('.banner .right').click(function(e) {
        sx++;
		if(sx>3){sx=0}
		//都有谁需要跟着这个顺序走。
		$('.banner ol li').eq(sx).addClass('current').siblings().removeClass();
		
		$('.banner ul').stop().animate({left:-sx*100+'%'},500)
    });
	
	$('.banner .left').click(function(e) {
        sx--;
		if(sx<0){sx=3}
		//都有谁需要跟着这个顺序走。
		$('.banner ol li').eq(sx).addClass('current').siblings().removeClass();
		
		$('.baner ul').stop().animate({left:-sx*100+'%'},500)
    });
	
	//自动播放模块
	//制作一个定时器去实现自动播放功能； 定时器模块
	
	timer=setInterval(autoplay,2000)
	function autoplay(){
		sx++
		if(sx>3){sx=0}
		$('.banner ol li').eq(sx).addClass('current').siblings().removeClass();//表示的是角标
		$('.banner ul').stop().animate({left:-sx*100+'%'},500)
	}
	
	//鼠标移上停止定时器模块
	$('.banner').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer)
    },function(e){
		clearInterval(timer)
		timer=setInterval(autoplay,2000)
  
	})
	//li下鼠标移上离开事件
	
	$('.content  ul .li01').mouseover(function(e) {
		$('.content  ul .li01 .inner').css('opacity','1')
	$('.content  ul .li01').mouseout(function(e) {
	$('.content  ul .li01 .inner').css('opacity','0')

	})
    });
		$('.content  ul .li02').mouseover(function(e) {
		$('.content  ul .li02 .inner').css('opacity','1')
	$('.content  ul .li02').mouseout(function(e) {
	$('.content  ul .li02 .inner').css('opacity','0')

	})
    });
			
	
    //li下鼠标下划线效果
	$('.Scheme .school ul li').hover(function(){
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:'0',
			width:'100%',
		},200);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},200);
		
	});
	
		$('.classical .school .contain li').hover(function(){
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:'0',
			width:'100%',
		},200);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},200);
	});
			//招聘页面切换效果
		$('.contR .posive span').click(function(e) {
          $(this).attr('class','current').siblings().attr('class','')
		  var num=$(this).index()
		 $('.contR ul li').eq(num).show().siblings().hide()
    });
		$(window).scroll(function(e) {
				//如果窗口的滚动位置大于第一屏的高度则出现火箭否则都没有
				var win_s=$(window).scrollTop();
				var win_h=$(window).height()
				
				if(win_s>win_h){
					$('.rocket').fadeIn()
				}else{
					$('.rocket').fadeOut();
				}
			});
			$('.rocket').click(function(e) {
				//需要设置窗口的滚动位置
				$('html,body').animate({ scrollTop:0},500)
			});
			
//下拉菜单部分
$('.HeadR .all li').hover(function(e) {
    $(this).children().stop().slideToggle(300)
	});
});

//新闻的banner图部分
$(function(){
	
	//事件模块
	var mytop=100;
	var sx=0;
	var speed=800
	var timer=null;
	
	$('.boxes ol li').click(function(e) {
		mytop++
		//角标的工作应用类样式;
        $(this).addClass('current').siblings().removeClass()
		
		//图片的工作跟角标对应显示；
		var index=$(this).index();
		$('.boxes ul li').eq(index).css('z-index',mytop).hide().fadeIn()
		//$('.all ul li').eq(index).css({zIndex:num}).hide().fadeIn(speed);
		sx=index;
    });
	
	
	//箭头工作
	$('.boxes .right').click(function(e) {
        sx++;
		mytop++
		if(sx>2){sx=0}
		//都有谁需要跟着这个顺序走。
		$('.boxes ol li').eq(sx).addClass('current').siblings().removeClass();//角标
		
		$('.boxes ul li').eq(sx).css({zIndex:mytop}).hide().fadeIn(speed);
    });
	
	$('.boxes .left').click(function(e) {
        sx--;
		mytop++;
		if(sx<0){sx=1}
		//都有谁需要跟着这个顺序走。
		$('.boxes ol li').eq(sx).addClass('current').siblings().removeClass();
		
		$('.boxes ul li').eq(sx).css({zIndex:mytop}).hide().fadeIn(speed);
    });
	
	
	
	
	//自动播放模块
	timer=setInterval(autoplay,2000)
	function autoplay(){
		mytop++
		sx++
		if(sx>1){sx=0}
		$('.boxes ol li').eq(sx).addClass('current').siblings().removeClass();
		$('.boxes ul li').eq(sx).css({zIndex:mytop}).hide().fadeIn(speed);
	}
	
	//鼠标移上停止定时器模块
	$('.boxes').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer)
		$('.boxes span').fadeIn();
    },function(e){
		clearInterval(timer)
		timer=setInterval(autoplay,2000)
		$('.boxes span').fadeOut()
    });

})
