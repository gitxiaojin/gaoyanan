$(function(){
      var onOff=true
	$('.content_tab span').click(function(e) {
		 var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.cont_main_page .cont_main').eq(index).show().siblings().hide();
    });
    $('.head_search_list ul li').click(function(e){
        $(this).addClass('act_cur').siblings().removeClass('act_cur');	
    })
    $('.footer nav').click(function(e){
        $(this).addClass('current').siblings().removeClass('current');	
    })
    $('.head_seach_more').click(function(e){
        if(onOff){
           $(this).addClass('toggle') 
           $('.head_search_mark').show();
           onOff=false;
           console.log('1')
        }else{
           $(this).removeClass('toggle') 
           $('.head_search_mark').hide();
            onOff=true;
            console.log('2')
        }
    })
    $('.setup-datepicker_cell').click(function(e){
       $('.setup-page_tankuang').toggle();
    })
    $('.head_link').click(function(e){
       $('.weui-mask').show();
    })
     $('.weui-close').click(function(e){
       $('.weui-mask').hide();
    })
    $('.admire_btn').click(function(e){
      $(this).addClass('active')
    })
    $('.skill_back_top').click(function(e){
      // $('html,body').animate({"scrollTop":0},500);
    })
    $('.tab-toggle_span span').click(function(e){
        // alert('ok')
       var index = $(this).index();
       $('.tab_create-content ul li').eq(index).show().siblings().hide();
     
    })

})