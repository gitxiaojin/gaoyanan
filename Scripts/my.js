
// JavaScript Document
//导航	
$(function(){
		$('.navright ul li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
		//alert($(this).index());
		var jump = $('.louCeng').eq($(this).index()).offset().top;
		// 获取每部分到顶部的距离
		$('body,html').stop().animate({'scrollTop':''+jump+'px'},300);
    });
  })
//切换tab
$('.webPage h2 span').click(function(event) {
	$(this).addClass('current').siblings().removeClass('current')
	var num=$(this).index()
	$('.webPageCont li').eq(num).show().siblings().hide()
});
// 折叠显示
 var onOff=true
$('.iconCollaspe').click(function(event) {
	if(onOff==true){
		$('.navright').css("left","0")
		onOff=false
	}else{
		$('.navright').css("left","-30%")
		onOff=true
	}
	
});

//欢迎页
$(function(){
	$('.enter').hover(function(e) {
        var title=$(this).attr('date')
		$('.tip em').text(title)
		$('.tip').stop().animate({'bottom':'35%','opacity':'1'},300) 
		}, function() {
			$('.tip').stop().animate({'bottom': '8%', 'opacity': '0'}, 300);
		});
	
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
        $('.foldmain li').stop().animate({width:143},500)
    });
})
$(function(){
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
})
