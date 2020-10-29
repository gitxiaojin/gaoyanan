
// JavaScript Document
$(function(){
     $(window).scroll(function(e) {
		var win_s=$(window).scrollTop();
		var win_h=$(window).height()
		
        if(win_s>win_h){
        	$('.ftop').fadeIn()
        }else{
        	$('.ftop').fadeOut();
        }
    });
	$('.cros_dyszsp ul li').hover(function(e) {
        $(this).children('.cro_dyup').stop().animate({'bottom':'0'},500)
    },function(e){
		 $(this).children('.cro_dyup').stop().animate({'bottom':'-100px'},500)
	})
	$('.ftop').click(function(e) {
        //需要设置窗口的滚动位置
		$('html,body').animate({ scrollTop:0},500)
    });
		//input
		//退出
	$('.login_right').hover(function(e) {
		$('.login_right span.xla').addClass('xla2')
        $(this).find('.login_Rh').stop().slideDown()
    },function(){
	 $('.login_right span.xla').removeClass('xla2')
	 $(this).find('.login_Rh').stop().slideUp()
	})
   //折叠
   $('.zdeFold').click(function(e) {
    $(this).toggleClass('zdeFoldT')
	$('.middle ul li').toggle()
	$('.login_right').toggle()
	
});  
   //选择模块
   $('.Ezcn_kdjd').hover(function(e) {
      $(this).find('.Easy_yinca').stop().animate({'top':0},500)
	},function(){
      $(this).find('.Easy_yinca').stop().animate({'top':-266+'px'},500)
	})
	//弹窗
	$('.cros_dyszsp ul li,.gengai,.pleachoice').click(function(e) {
      $('.tan_up').fadeIn()
	  $('.tan_down').fadeTo(0.5,500)
    });
	$('.cros_dyszsp ul li').click(function(e) {
        $(this).attr('class',"current")  
    });
	$('.cro_foot_btn span.span03').click(function(e) {
      $('.tan_up').fadeOut()
	  $('.tan_down').fadeOut()
	  $('.tan_down2').fadeOut()
    });
	$('.tan_dzbq').click(function(e) {
	   $('.tan_down').fadeOut()
       $('.tan_downt').fadeIn()
    });
	$('.tan_downt .span05').click(function(e) {
        $('.tan_downt').fadeOut()
		$('.tan_up').fadeOut()
    });
	$('.choose_plea').click(function(e) {
      $('.tan_down2').fadeIn()
	  $('.tan_downt').fadeOut()
    });
	function fn(canshu1,canshu2){
		$(canshu1).click(function(e) {
			$(this).addClass('current').siblings().removeClass()
			var nun=$(this).index()
			$(canshu2).eq(nun).show().siblings().hide()
		});	
	}
	fn('.mtlx_tabR span','.mtlx_tabcont ul li.li_tab')
	fn('.mtlx_tabR2 span','.mtlx_tabcont2 ul li.li_tab')
	fn('.mtlx_tabR3 span','.mtlx_tabcont3 ul li.li_tab')
	fn('.mtlx_tabR4 span','.mtlx_tabcont4 ul li.li_tab')
	fn('.mtlx_tabR6 span','.mtlx_tabcont6 ul li.li_tab')
	function fm(canshu1,canshu2){
		$(canshu1).click(function(e) {
			$(this).addClass('current').siblings().removeClass()
			$(this).parent().siblings().children().removeClass()
			var nun=$(this).index()
			$(canshu2).eq(nun).show().siblings().hide()
			$(canshu2).parent().show().siblings().hide()
		});	
	}
	fm('.mtdl_dl3 .p1 span','.mtlx_tabcont5 ul.ul01 li.li_tab')
	fm('.mtdl_dl3 .p2 span','.mtlx_tabcont5 ul.ul02 li.li_tab')
	fm('.mtdl_dl4 .p1 span','.mtlx_tabcont5 ul.ul03 li.li_tab')
	fm('.mtdl_dl4 .p2 span','.mtlx_tabcont5 ul.ul04 li.li_tab')


	$('.list-page').hover(function(e) {
      $(this).find('.list-title2').addClass('list-page2')
      $(this).find('.list-shousuo').stop().slideDown()
      },function(){
      $(this).find('.list-title2').removeClass('list-page2')
	  $(this).find('.list-shousuo').stop().slideUp()
	})
	//扩展研究模块

	$('.G_radioi').on("click",function(){
      $(this).toggleClass('G_qiehuani')
	})
	$('.radiostyle').click(function(){
		 $(this).addClass('checked').siblings().removeClass('checked')
		 $('.bbsc_dsktxyj').stop().slideUp()
    });
		$('.bbsc_zdymtlx').click(function(e) {
        $('.bbsc_dsktxyj').stop().slideDown()
    });
	$('.ppchd').click(function(e) {
        $('.cros_xiaofei').stop().slideToggle(500)
    });


	// 添加高级模式
	$('.add').click(function(e) {
	  var n=n1=$('.dysz_tab ul li').length;
	  switch (n){
		  case 1:
				n = '1';
			break;
		  case 2:
				n = '2';
			break;
		  case 3:
			    n = '3';
			break;
		  case 4:
		       n = '4';
			   break;
	      case 5:
		       n = '5';
			   break;
			   
		  case 6:
		       n = '6';
			   break;
	      case 7:
		       n='7';
			   break;
	      case 8:
		       n='8';
			   break;
	      case 9:
		       n='9';
			   break;
	      case 10:
		      n='10';
			  break;
		
	}
	var tag=$(' <li>目标人群'+n+'</li>')
	$('.dysz_tab ul li').eq($('.dysz_tab ul li').length-1).after(tag)
	$('.dysz_tab ul li').eq($('.dysz_tab ul li').length-1).addClass('active_cur').siblings().removeClass('active_cur')
	$('.dysz_mbrq ul').append('<li><div class="cro_tancont cro_tancont2">jjk</div></li>')
	$('.dysz_mbrq ul li').eq($('.dysz_mbrq ul li').length-1).show().siblings().hide()
	$('.dysz_tab ul li').click(function(e) {
		$(this).addClass('active_cur').siblings().removeClass('active_cur')
         var num=$(this).index()
		$('.dysz_mbrq ul li').eq(num).show().siblings().hide()
    });
    });
	
	
	
	//高级模式
	var s=false
	$('.cro_gjsz span').click(function(e) {
		if(s){
		$(this).html('普通设置')	
		$(this).css('background','#50b400')
		$('.cro_gjsznr').slideUp(500)
		s=false
		}else{
		$(this).html('高级设置')	
		$(this).css('background','#48a101')
		$('.cro_gjsznr').slideDown(500)
		s=true
		}
	})
$('.changepi').click(function(e) {
    var page1=document.getElementById('page1')
	var page2=document.getElementById('page2')
	var page3=document.getElementById('page3')
	if(page1.style.display=='block'){
	   page1.style.display='none'	
	   page2.style.display='block'	
	}else if(page2.style.display=='block'){
	   page2.style.display='none'	
	   page3.style.display='block'	
	}else{
	  page3.style.display='none'
	  page1.style.display='block'		
	}
});

	//媒体大类分析
//canshu3 右键头
//canshu4 要移动的p元素
//canshu5 做箭头
function mtdl(canshu3,canshu4,canshu5){
	var sx=0;
 	var nuy=0
	var timer=null
	//获取当前 p 下面的所有子元素
	var arr = $(canshu4).children()
	//当p 下子元素个数大于五的时候 显示出箭头
	 if(arr.length >= 5){
		$(canshu3).css({'display':'block'});
		$(canshu5).css({'display':'block'});
		}
    $(canshu3).click(function(e) { //每点击一次 移动一个子元素的宽度+间距
		sx++;
		 if(sx>arr.length-3){
			 sx=arr.length-3   //当移动到最右边的 就不让移动了
				 }
		if(sx < 0){sx = 0}
		var temp = 0;
		for(var i = 0; i < sx; i++){
			var child = arr[i];
			var w = child.offsetWidth-0;
			temp = temp +w+15;
		}
		//移动当前p
       $(canshu4).stop().animate({'left':-temp},500)
		
   });
	 $(canshu5).click(function(e) { //每点击一次 移动一个子元素的宽度+间距
		sx--;
		 if(sx<=0){
			 sx=0      //当移动到最左边的 就不让移动了
				 }
		var temp = 0;
		for(var i = 0; i < sx; i++){
			var child = arr[i];
			var w = child.offsetWidth-0;
			temp = temp +w+15;
		}
	 //移动当前p
       $(canshu4).stop().animate({'left':-temp},500)
		
   });
   
	}
	
   mtdl('.mtdl_right','.mtlx_tabhuwa p','.mtdl_left')
   mtdl('.mtdl_right2','.mtlx_tabhuwa2 p','.mtdl_left2')
   mtdl('.mtdl_right3','.mtdl_dl3 p.p1','.mtdl_left3')
    mtdl('.mtdl_right3','.mtdl_dl3 p.p2','.mtdl_left3')
	mtdl('.mtdl_right4','.mtdl_dl4 p.p1','.mtdl_left4')
    mtdl('.mtdl_right4','.mtdl_dl4 p.p2','.mtdl_left4')
   //mtdl('.mtdl_right4','.mtdl_dl4 p','.mtdl_left4')

$('.showMore').click(function(e) {
    $('.hideMtldf').stop().slideToggle(500)
	if($('.showMore').html()=='显示所有内容'){
	 $('.showMore').html('隐藏所有内容')
	}else{
	$('.showMore').html('显示所有内容')
	}
});
//预算条 EZ-plan页面代码
   var G=195;
   var B=137;
   var fdsdf = $('.budget ul li');
   for(i=0;i<fdsdf.length;i++){
   var G=G-20
   var B=B-20
   $('.budget ul li:eq('+i+')').css('background','rgb(255,'+G+','+''+B+')')  
  } 
/*   $('.budget ul li').hover(function(e) {
    $(this).children('.tooltip_box').stop().slideToggle()
   });
*/
   $('.budget ul li').mouseover(function(e) {
    $(this).children('.tooltip_box').css('display','block')
   })
   $('.budget ul li').mouseout(function(e) {
    $(this).children('.tooltip_box').css('display','none')
   })
  //end
  //预算调整
	 $('.plan_stock a.plan_add').click(function(e) {
		$(this).prev().val(parseInt($(this).prev().val())+1000)
		$(this).css({'color':'#000','font-weight':'bold'}).siblings('.plan_stock a.plan_min').css({'color':'#999','font-weight':'normal'})
		setTotal();
    });
	$('.plan_stock a.plan_min').click(function(e) {
		$(this).css({'color':'#000','font-weight':'bold'}).siblings('.plan_stock a.plan_add').css({'color':'#999','font-weight':'normal'})
		var bl=parseInt($(this).next().val())-1000
        if(bl<0){
			 $(this).next().val(0)
		}else{
			 $(this).next().val(bl)
		}
		setTotal();
    });
$('.btn-open').click(function(e) {
      $('.tan_up').fadeIn()
	  $('.tan_down_select').fadeIn()
    });
$('.paln_foot span.plan_qx').click(function(e) {
      $('.tan_down_select').fadeOut()
	  $('.tan_up').fadeOut()
});
 //日达率
function qh(canshuO,canshuT){
	  $(canshuO).click(function(e) {	
	   $(this).addClass('current').siblings().removeClass('current')
	   var num=$(this).index()
	   $(canshuT).eq(num).show().siblings().hide()
	  })
};
 //自定义下拉框
   $('.distract').change(function(){
        this.parentNode.nextSibling.value=this.value
		var vs = this.value;
		if(vs == '请输入'){
			this.parentNode.nextSibling.readOnly=false;
			this.parentNode.nextSibling.value='';
		}else{
			this.parentNode.nextSibling.readOnly=true;
		}
	});

qh('.cross_titi .cro_qh span','.cro_tu1 ul li')
qh('.plan_table_qh p span','.plan_table_qh ul li')
//排期选择
$('.cros_dyszsp ul li,.cros_dyszsp2 ul li').hover(function(e) {
        $(this).children('.cro_dyup').stop().animate({'bottom':'0'},500)
    },function(e){
		 $(this).children('.cro_dyup').stop().animate({'bottom':'-100px'},500)
	})
//target
	$('.G_yi_qh').click(function(e) {
        $(this).parent().siblings('.yjxm_hide').toggle()
    });
	    //EZCN_value 选择媒体页面
	
	$('.mtlx_tab ul li span').click(function(e) {
		var name=$(this).html()
		var selected=$('.selected').length
	    var str=$('<span class="selected"><a>'+name+'</a> <a class="mtlx_close">×</a></span>')
		if(selected<3){
			 $(this).addClass('current')
			 $('.mtlx_tab2').append(str)
			}
    });
	$('.selected a.mtlx_close').live('click',function(e) {
		var  p = $(this).parent('.selected');
		p.remove();
		var cur = p[0].innerText;
		var spans = $('.mtlx_tab ul li span');
		
		spans.each(function() {
			var ss = this.innerText;
            if(cur.indexOf(ss)>=0){
				$(this).removeClass()
				 return false;
				}
        });
    });
	var divTop=$('.mtlx_tab2').offset().top;
	$(window).scroll(function(e) {
        var win_s=$(window).scrollTop();//窗口滚动滚动条相对于顶部的偏移
		if(win_s>divTop){
		  $('.mtlx_tab2').css('position','fixed').css('top',50+'px').css('zIndex',100)
		  $('.mtlx_tab2').css('box-shadow', '10px', '10px', '5px', '#888')
		}else{
		  $('.mtlx_tab2').css('position','static')	
		}
    });
//target end	
//提示框
$(function () { $("[data-toggle='tooltip']").tooltip(); });})
//div 仿select
    $('.resume_wrap p').click(function() {
        $(this).siblings('ul').toggle();
        event.stopPropagation();
    });
    $('.resume_wrap ul li.resume_li').each(function(index, element) {
        $(this).click(function(e) {
            var text=$(this).text();
            $(this).parent('ul').siblings('input').replaceWith('<p></p>')
            $(this).parent('ul').siblings('p').html(text)
            $(this).parent('ul').hide();
        $('.resume_wrap p').click(function() {
            $(this).siblings('ul').show();
        });
        });
    });

    $('.resume_enter').click(function(e) {
        $(this).parent().siblings('p').replaceWith('<input type="text" class="resume_input"/>')
        $(this).parent().siblings('.resume_input').focus();
        $(this).parent('ul').hide();
        
    });
    
     $('.resume_input').live("focus",function(){
      $(this).siblings('ul').toggle();
    });
    $('resume_wrap ul').hover(function(e) {
        $(this).toggle();
        event.stopPropagation();
    });
    //div 仿select

    $('.resume_wrap p').click(function(e) {
        $('.resume_ul').hide();
        $(this).siblings('ul').toggle();
        e.stopPropagation();
    });
    $('.resume_wrap ul li.resume_li').each(function(index, element) {
        $(this).click(function(e) {
            var text=$(this).text();
            $(this).parent('ul').siblings('input').replaceWith('<p></p>')
            $(this).parent('ul').siblings('p').html(text)
            $(this).parent('ul').hide();
        $('.resume_wrap p').click(function(e) {
            $('.resume_ul').hide();
            $(this).siblings('ul').show();
            e.stopPropagation();
        });
        e.stopPropagation();
        });
    });

