// JavaScript Document
$(function(){
	$('.bg').fadeTo(500,0.6)
	    $('.contMess .TopBottom').hover(function(e) {
        $(this).children('.bg,.phone').stop().animate({bottom:0},500)  
			},function(){
		$(this).children('.bg,.phone').stop().animate({bottom:-80},500)
	});
	//弹出框效果
	$('.addd').click(function(e) {
		$('.down').fadeIn()
        $('.up').fadeTo(500, 0.5)
    });
	$('.guan').click(function(e) {
        $('.down,.up').fadeOut()
    });
		$('.tongGuo').click(function(e) {
		$('.downUp').fadeIn()
        $('.upUp').fadeTo(500, 0.5)
    });
	$('.close').click(function(e) {
        $('.downUp,.upUp').fadeOut()
    });
    //弹出框效果
    $('.middleCCC .hv03 .hv03L span a').mouseover(function(e) {
        $(this).attr('class','current').siblings().attr('class','')
		var num=$(this).index()
		$('.middleCCC .pic_tu ul li').eq(num).show().siblings().hide()
    });	
	$('.curve h2 span').hover(function(e) {
        $(this).attr('class','current').siblings().attr('class','')
		var num=$(this).index()
		$('.curve ul li').eq(num).show().siblings().hide()
    });
	$('.network h2 span').mouseover(function(e) {
        $(this).attr('class','current').siblings().attr('class','')
		 var num=$(this).index()
		 $('.network ul li').eq(num).show().siblings().hide()
    });
	  $('.basic .why').hover(function(e) {
        $('.basic .visa').stop().slideToggle(500)
    });
	 $('.able .why').hover(function(e) {
        $('.able .visa').stop().slideToggle(500)
    });
	//创建节点
	$(function(){
	$('.memory .jiahao').click(function(e) {
        //去创建一个新的li节点并且追加到文档流当中；
		var tag=$('<li class="Le"> <span>数据盘 <input> G </span> <span class="Lel"></span></li>')
		$('.memory ul').append(tag)
		$('.Lel').click(function(e) {
            $(this).parent().hide(500)
        });
		
		
    });
    });//虚机升级弹出框效果
	$('.shenpi').click(function(e) {
		$('.upU').fadeIn()
        $('.downD').fadeTo(500, 0.5)
    });
	$('.spanR').click(function(e) {
        $('.upU').slideUp(500)
		$('.downD').fadeOut()
    });
      $('.history').click(function(e) {
        $('.upUpu').fadeIn()
		$('.closeG').click(function(e) {
        $('.upUpu').slideUp(500)
        });
    });
		$('.upUpu .ciPan h4 span').click(function(e) {
        $(this).attr('class','current').siblings().attr('class','')
		var num=$(this).index()
		$('.upUpu .ciPan ul li').eq(num).show().siblings().hide()
    });	
	$(function(){
     $('.more').click(function(e) {
     var tao=$('<ul class="leshi"><li>开机</li> <li>关机</li> <li>暂停</li> <li>重启</li> <li>快照</li> <li>备份</li> <li>升级</li> <li>报警规则设置</li> <li>体检参数设置</li></ul>')
     $(this).parent().append(tao)
	 
	
 });
});
}); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	