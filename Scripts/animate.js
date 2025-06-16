
// JavaScript Document
//触发滚动	

   $(window).scroll(function(){
       var sT=$(document).scrollTop();
       if(sT>=$('.louCeng').eq(0).offset().top){
         $('.banner').addClass('xuanzhuan')
         $('.banner').addClass('animated')

       }else if(sT>=$('.louCeng').eq(2).offset().top){
        
       }else if(sT>=$('.louCeng').eq(3).offset().top){

       }

   })
