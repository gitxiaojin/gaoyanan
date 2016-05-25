
// JavaScript Document
//导航	
$(function(){
		$('.navright ul li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		//alert($(this).index());
		var jump = $('.louCeng').eq($(this).index()).offset().top;
		$('body,html').stop().animate({'scrollTop':''+jump+'px'},300);
    });
	
	function myFn(par1){
		$('.navright ul li').eq(par1).addClass('current').siblings().removeClass('current');
	}
	$(window).scroll(function(e) {
		//判断滚动距离如果大于第几层距离顶部的距离，那么就让第几个li添加特殊current
		var sT = $(window).scrollTop();
		if(sT >= $('.louCeng').eq(5).offset().top){
			myFn(5);
		}else if(sT >= $('.louCeng').eq(4).offset().top){
			myFn(4);
		}else if(sT >= $('.louCeng').eq(3).offset().top){
			myFn(3);
		}else if(sT >= $('.louCeng').eq(2).offset().top){
			myFn(2);
		}else if(sT >= $('.louCeng').eq(1).offset().top){
			myFn(1);
		}else if(sT >= $('.louCeng').eq(0).offset().top){
			myFn(0);
		}
    });
})


//欢迎页
$(function(){
	$('.enter').hover(function(e) {
        var title=$(this).attr('date')
		$('.tip em').text(title)
		$('.tip').stop().animate({'bottom':'35%','opacity':'1'},300) 
		}, function() {
			$('.tip').stop().animate({'bottom': '8%', 'opacity': '0'}, 300);
		});
	//banner图
$(function(){
	var sx=0;
	var timer=null
	
	var colors=['#050214','#000','#43a3f9',]
	$('.banner ul li').each(function(index, element) {
        $(element).css('background-color',colors[index])
    });
	
	$('.banner .arrright').click(function(e) {
        sx++;
		if(sx>2){sx=0}
		$('.banner ul').stop().animate({left:-sx * 100+'%' },500)
    });
	$('.banner .arrleft').click(function(e) {
        sx--;
		if(sx<0){sx=2}
		$('.banner ul').stop().animate({left:-sx * 100+'%' },500)
    });
	
	//自动播放模块
	timer=setInterval(autoplay,2000)
	function autoplay(){
		sx++
		if(sx>2){sx=0}
		
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
	})
	$(function(){
		$('.workout').hover(function(e) {
            $(this).children('.webHover').stop().fadeToggle()
			
        });
		$('.webHover .speck').click(function(e) {
         	$('.Webclick').fadeIn(500) 
			$("body,html").css("overflow","hidden")
			
        });
		$('.Webclick span.closeAll').click(function(e) {
                $('.Webclick').fadeOut(500) 
				$("body,html").css("overflow","auto")
            }); 
			
	})

//手风琴效果展示
$(function(){
	$('.foldmain li').mouseover(function(e) {
        $(this).stop().animate({width:1000},500).siblings().stop().animate({width:23},500)
    }).mouseout(function(e) {
        $('.foldmain li').stop().animate({width:163},500)
    });
})



//App滚动
window.onload=function() {
	//全局变量
	// APP异性滚动业务开始
	var json0 = {"width":"145px","height":"343.434898px","left":"-180px","top":"179px"};
	var json1 = {"width":"148px","height":"266px","left":"108px","top":"134px"};
	var json2 = {"width":"193px","height":"350px","left":"317px","top":"43px"};
	var json3 = {"width":"150px","height":"268px","left":"571px","top":"133px"};
	var json4 = {"width":"145px","height":"250px","left":"990px", "top":"179px"};
	$("#container .page2 .zhanshi .app .anniumen .you").click(
		function(){
			if(!$("#container .page2 .zhanshi .app .yixing ul li").is(":animated")){
			
				$("#container .page2 .zhanshi .app .yixing ul li.no1").animate(json0,400);
				$("#container .page2 .zhanshi .app .yixing ul li.no2").animate(json1,400);
				$("#container .page2 .zhanshi .app .yixing ul li.no3").animate(json2,400);
				$("#container .page2 .zhanshi .app .yixing ul li.no4").animate(json3,400);
				$("#container .page2 .zhanshi .app .yixing ul li.no0").css(json4);

			
				$("#container .page2 .zhanshi .app .yixing ul li.no0").attr("class","waiting");
				$("#container .page2 .zhanshi .app .yixing ul li.no1").attr("class","no0");
				$("#container .page2 .zhanshi .app .yixing ul li.no2").attr("class","no1");
				$("#container .page2 .zhanshi .app .yixing ul li.no3").attr("class","no2");
				$("#container .page2 .zhanshi .app .yixing ul li.no4").attr("class","no3");
				
				if($("#container .page2 .zhanshi .app .yixing ul li.no3").next().length != 0){
				
					$("#container .page2 .zhanshi .app .yixing ul li.no3").next().attr("class","no4");
				}else{
				
					$("#container .page2 .zhanshi .app .yixing ul li:first").attr("class","no4");
				}
				
			
				$("#container .page2 .zhanshi .app .yixing ul li.no4").css(json4);
			}
		}
	);

	$("#container .page2 .zhanshi .app .anniumen .zuo").click(
		function(){
			if(!$("#container .page2 .zhanshi .app .yixing ul li").is(":animated")){
				if(!$("#container .page2 .zhanshi .app .yixing ul li").is(":animated")){
				
					$("#container .page2 .zhanshi .app .yixing ul li.no0").animate(json1,400);
					$("#container .page2 .zhanshi .app .yixing ul li.no1").animate(json2,400);
					$("#container .page2 .zhanshi .app .yixing ul li.no2").animate(json3,400);
					$("#container .page2 .zhanshi .app .yixing ul li.no3").animate(json4,400);
					$("#container .page2 .zhanshi .app .yixing ul li.no4").css(json0);

			
					$("#container .page2 .zhanshi .app .yixing ul li.no4").attr("class","waiting");
					$("#container .page2 .zhanshi .app .yixing ul li.no3").attr("class","no4");
					$("#container .page2 .zhanshi .app .yixing ul li.no2").attr("class","no3");
					$("#container .page2 .zhanshi .app .yixing ul li.no1").attr("class","no2");
					$("#container .page2 .zhanshi .app .yixing ul li.no0").attr("class","no1");

				
					if($("#container .page2 .zhanshi .app .yixing ul li.no1").prev().length != 0){
						
						$("#container .page2 .zhanshi .app .yixing ul li.no1").prev().attr("class","no0");
					}else{
					
						$("#container .page2 .zhanshi .app .yixing ul li:last").attr("class","no0");
					}

					$("#container .page2 .zhanshi .app .yixing ul li.no0").css(json0);
				}
			}
		}
	);
	// APP异性滚动业务结束
}