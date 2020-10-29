// JavaScript Document

$(function(){
	
	
$(function(){
	var sx=0;
	var timer=null
	
	var colors=['#050214','#fff',]
	$('.page1 ul li').each(function(index, element) {
        $(element).css('background-color',colors[index])
    });
	
	$('.page1 .right').click(function(e) {
        sx++;
		if(sx>1){sx=0}
		$('.page1 ul').stop().animate({left:-sx * 100+'%' },500)
    });
	$('.page1 .left').click(function(e) {
        sx--;
		if(sx<0){sx=1}
		$('.page1 ul').stop().animate({left:-sx * 100+'%' },500)
    });
	
	//自动播放模块
	timer=setInterval(autoplay,2000)
	function autoplay(){
		sx++
		if(sx>1){sx=0}
		
		$('.page1 ul').stop().animate({left:-sx * 100+'%' },500)
	}
	
	//鼠标移上停止定时器模块
	$('.page1').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer)
		$('.page1 span').fadeIn();
    },function(e){
		clearInterval(timer)
		timer=setInterval(autoplay,2000)
		$('.page1 span').fadeOut()
    });
})
//banner滚动效果


	//加工染色模块
	var snum=0;
	var colors=['#01CFFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF']
	var timer=null;
	var ps=$('.content>div').length-1;
	
	$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
	$('.content>div').each(function(index, element) {
		$(element).css('background', colors[index])
	});


	//鼠标滚动模块
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(fn,300)
		
		//向下滚动D是-1；向上是+1；
		function fn(){
			snum-=d//创造数据
			if(snum > ps){ snum=ps }
			if(snum < 0){ snum=0 }
			
			
			$('.content').stop().animate({top: -snum*100+'%' },1000)//屏幕的工作
			$('.gps li').eq(snum).addClass('current').siblings().removeClass();    //角标的工作
			
			$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
			
			if(snum == 5){
				$('.page6>h1').css({marginLeft:-1240}).stop().animate({marginLeft:-124},2000,'easeOutElastic')
			}else{
				$('.page6>h1').stop().animate({marginLeft:-1240},2000,'easeOutElastic')
			}
		}
	})


	//导航角标的单击模块

	$('.gps li').click(function(e) {
        var index=$(this).index();
		$(this).addClass('current').siblings().removeClass();//角标的工作
		$('.content').stop().animate({top: -index*100+'%' },1000)//屏幕的工作
		snum=index;//同步工作
		$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
			
			
			
						if(snum == 5){
				$('.page6>h1').css({marginLeft:-1240}).stop().animate({marginLeft:-124},2000,'easeOutElastic')
			}else{
				$('.page6>h1').stop().animate({marginLeft:-1240},2000,'easeOutElastic')
			}


	
	//自动播放模块
	timer=setInterval(autoplay,2000)
	function autoplay(){
		sx++
		if(sx>4){sx=0}
		
		$('.banner ul').stop().animate({left:-sx * 100+'%' },500)
	}
	
	//鼠标移上停止定时器模块
	$('.banner').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer)
		$('.banner span').fadeIn();
    },function(e){
		clearInterval(timer)
		timer=setInterval(autoplay,2000)
		$('.banner span').fadeOut()
    });
})

//  滚屏效果原理




})








































