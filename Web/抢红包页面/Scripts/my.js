
// JavaScript Document
// JavaScript Document
$(function(){
   $('.rule span').click(function(){
    $('.dialog-rule').css('display','flex')
  
    });
   $('.rule_close').click(function(event) {
       $('.dialog-rule').css('display','none')
   });

   $('.redBao p.start').click(function(){
     $('.dialog').css('display','flex')
   });
   $('.lv_close').click(function(){
    $('.dialog').hide();
   });

})
		

