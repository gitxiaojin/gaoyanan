// JavaScript Document


$(function(){
    //返回顶部效果
	$('.dingTop').click(function(e) {
      $('html,body').animate({ scrollTop:0},500)
    });
    //tab栏效果
    $('.list4_tab span,.list3_tab span').click(function(e){
        $(this).addClass('current').siblings().removeClass('current')
         var num=$(this).index()
        $('.cont_tab>li').eq(num).show().siblings().hide()
    });
	//高度溢出隐藏的方法
	$(".figcaption").each(function(i){
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    };
});
   //高度溢出隐藏的方
$('.G_shizi').click(function(e) {
			//显示窗口
			$('.tanc_up').fadeIn();
			$('.tanc_down').fadeTo(500,0.5)
    });
	$('.tanc_up .guanbi').click(function(e) {
		$('.tanc_up,.tanc_down').fadeOut();
	});
	$('.y_hot_pic').hover(function(e) {
		$(this).children('.y_commend').stop().animate({'bottom':0},500)
	},function(){
		$(this).children('.y_commend').stop().animate({'bottom':-60+'px'},500)
	});
	$('.G_cha').hover(function(e) {
		$(this).children('.listo_bg').stop().animate({'bottom':0},500)
	},function(){
		$(this).children('.listo_bg').stop().animate({'bottom':-65+'px'},500)
	});
	 $('.Fixnav ul li').hover(function(e) {
        $(this).children('.Fixspan').siblings().toggle()
    });
	//banner
	   $('.banner ol li').hover(function(e) {
        $(this).addClass('current').siblings().removeClass('current')
		 var nuo=$(this).index()
		$('.banner ul').stop().animate({'top':nuo*-480},500)
		nuo=nuy
    });
	var nuy=0
	var timer=null
	function sport(){
	    nuy++
		if(nuy>2){nuy=0}
		$('.banner ol li').eq(nuy).addClass('current').siblings().removeClass('current')
		$('.banner ul').stop().animate({'top':nuy*-480},500)
		}
	  timer=setInterval(sport,2000)
	  $('.banner ul li').hover(function(e) {
        clearInterval(timer)
    },function(e){
		clearInterval(timer)
		timer=setInterval(sport,2000)
	}); 
	//banner2
	$('.banner2 ol li').hover(function(e) {
        $(this).addClass('current').siblings().removeClass('current')
		var indes=$(this).index()
		$('.banner2 ul').stop().animate({'left':indes*-100+'%'},500)
		indes=nui
    });
	var nui=0
	var timer=null
	function run(){
		nui++
		if(nui>2){nui=0}
	$('.banner2 ol li').eq(nui).addClass('current').siblings().removeClass('current')
	$('.banner2 ul').stop().animate({'left':nui*-100+'%'},500)
		
	}
	clearInterval(timer)
	timer=setInterval(run,2000)
	$('.banner2 ul li').hover(function(e) {
        clearInterval(timer)
    },function(){
	   clearInterval(timer)
	 timer=setInterval(run,2000)
	});
	//tab栏
     $('.listo_zl a,.list6_but a').hover(function(e) {
        $(this).addClass('current').siblings().removeClass('current')
    });
	//百度地图api
	
	   
})
