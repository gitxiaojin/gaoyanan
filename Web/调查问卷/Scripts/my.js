
// JavaScript Document
$(function(){
	var link = window.location.href;
	var index = link.lastIndexOf('/')+1;
	var url = link.substring(index);
		$('.navCont ul li').each(function(index, element) {
            if($(element).parent().attr('href')==url){
					$(element).addClass('current');
				}else{
				$(element).removeClass('current');}
        });
	
	$('.navCont ul a').click(function(e) {
       $(this).addClass('current');
	   //.siblings().removeClass('current')
    });
   
    $(".G_line").click(function(){
        $(this).toggleClass('G_close').siblings('.navCont ul.ul_wrap').stop().slideToggle(500);
    });
	$(" textarea").click(function(e) {
        $(this).select()//选中当前
    });
	$('.G_shezhi').click(function(e) {
        $('.tanchu_up').fadeIn()
		$('.tanchu_down').fadeTo('opacity',0.5)
    });
	$('.T_gb').click(function(e) {
		$('.tanchu_down,.tanchu_up').fadeOut()
    });
	
	//stwich 语句的编写
	$('.more').click(function(e) {
		var n = n1 = $('.nav_nav li').length;
		switch (n){
			case 1:
					n = '一';
			break;
			case 2:
					n = '二';
			break;
			case 3:
					n = '三';
			break;
			case 4:
					n = '四';
			break;
			case 5:
					n = '五';
			break;
			case 6:
					n = '六';
			break;
			case 7:
					n = '七';
			break;
			case 8:
					n = '八';
			break;
			case 9:
					n = '九';
			break;
			case 10:
					n = '十';
			break;
		}
		
		var tag=$('<li class="li01"><a href="#tab_'+n1+'" data-toggle="tab" class="tehnical G_tab"><span>第'+n+'页</span> <span class="Ggb">×</span></a></li>')
        $('#nav_hide ul li').eq($('.nav_nav li').length-1).before(tag)
		$('#nav_hide ul li').eq($('.nav_nav li').length-2).addClass("active").siblings().removeClass("active")
		$('#tab-content-list .tab-pane').removeClass('active in');
		$('#tab-content-list #tab_last').before('<div class="tab-pane fade active in"id="#tab_'+n1+'"><div class="blong-itemT wow fadeInUp">第'+n+'处空白</div></div>')
		if($(".nav_wrap").width()>=$(".par_nav").width()*0.7){
	             $('.span_right,.span_left').show();
				 $('#nav_hide').addClass('nav_hide2');
				 $(".more").css({"position": "absolute","right": "30PX"});
				 $(".nav_hide2").width($(".par_nav").width()*2);
                 };
    });
	$(document).on('click','#nav_hide ul li',function(){
		$('#tab-content-list .tab-pane').eq($(this).index()).addClass('active in').siblings().removeClass('active in');
	})
});


$(function(){
  var sx=0;
   //var sx=$(this).index()
  $('.span_left').click(function(e) {
  	var wid=$('.par_nav').width() ;
        sx--;
		  if(sx<=0){
		 $('#nav_hide ul').stop().animate({left:0},500) 
		 sx = 0
	     }else{
			 //都有谁需要跟着这个顺序走。
		$('#nav_hide ul').stop().animate({left:sx*-wid*3/4},500)
			 }
		
		
    });
	$('.span_right').click(function(e) {
		var wid=$('.par_nav').width() ;
		var len =$('#nav_hide ul li').length
          sx++;
		  if(sx < len){
			  if(sx > 0){
			   //都有谁需要跟着这个顺序走。
		       $('#nav_hide ul').stop().animate({left:sx*-wid*3/4},500)
			   }
			   
		   }else{
			   sx = len - 1;
			   }
		
		
    });

	$(".G_radioi").on("click",function(){
     $(this).toggleClass('G_qiehuani')
})
$(function(){
	$(".u_info ").hover(function(){
		   	$(this).children('.xia_ld').addClass('xia_ld2')
			$(this).find(".u_info_list").show();
		},function(){
			$(this).children('.xia_ld').removeClass('xia_ld2')
			$(this).find(".u_info_list").hide();
	}
	
	);

	})
//折叠展开
	var zd=true
	$('.suvey-close').click(function(e) {
      $(this).closest('.editor_wrap').animate({right:-300},100)
	   $('.lib_close').html('收起题库')
	   zd=true
    });
	$('.lib_close').click(function(e) {
		if(zd==true){
			 $(this).parent('.editor_wrap').animate({right:0},100);
			 $(this).html('展开题库')
			 zd=false
		}else{
			 $(this).parent('.editor_wrap').animate({right:-300},100)
			  $(this).html('收起题库')
			 zd=true
	    }
    });
	//切换
	function fm(canshu1,canshu2){
		$(canshu1).click(function(e) {
            $(this).addClass('tab_cur').siblings().removeClass('tab_cur')
			var num=$(this).index()
			$(canshu2).eq(num).show().siblings().hide()
        });	
	}
	fm('.tab_kj','.ul_kj')
});