
// JavaScript Document
$(function(){
	var num=0
	function run(){
		num++
		if(num>6){//如果索引值>2的时候就让 他等于1此时ul的top值等于0返回原始的状态
		   num=1
		$('.G_gundong2 ul').animate({'top':'0'},500)   
		}
		$('.G_gundong2 ul').animate({'top':''+num*-50+'px'},500) //ul原本设定为num*-30
	}
	setInterval(run,3000)//循环定时run
	
	$('.fixnav').click(function(e) {
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
		
})	
		

