$(document).ready(function(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth /10 + 'px';
    $(window).resize(function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth /10 + 'px';
    })       
})
/*h_jsf*/
$(function(){
    if($('.h_jsf'.length > 0)){
        $('.h_jsf_cbox').eq(0).show();
        $('.h_jsf_tit ul li').click(function(){
            var _index = $(this).index();
            $(this).addClass('curr').siblings().removeClass('curr');
            $('.h_jsf_cbox').eq(_index).show().siblings().hide();
        })

    }
})
/*end_h_jsf*/

/*h_hyf*/
$(function(){
    if($('.h_hyf'.length > 0)){
        $('.h_hyf_cbox').eq(0).show();
        $('.h_hyf_tit ul li').click(function(){
            var _index = $(this).index();
            $(this).addClass('curr').siblings().removeClass('curr');
            $('.h_hyf_cbox').eq(_index).show().siblings().hide();
        })

    }
})
/*end_h_hyf*/

/*h_dsj*/
$(function(){
    $('.h_yqh').css('height',$(window).height());
    if($('.h_dsj').length > 0){
        var _h1 = $('body').height();
        console.log(_h1)
        var _h =  $(window).height();
        console.log(_h)
        $(window).scroll(function(){
            var _sh = $(this).scrollTop();
            console.log(_h1,_h,_sh)
            if(_h1 - _h > _sh){
                $('.h_dsj').show();
            }else{
                $('.h_dsj').hide();
            }
        })
    }

    
})
/*end_h_dsj*/

$(function(){
  var docElem = document.documentElement;
  var dpr = window.devicePixelRatio || 1;
  var Layout = {
      w: 750,
      h: 1206,
      n: 10
  };

  function setRem () {
      var fs;
      var  first = document.getElementsByClassName('h_yqh')[0] ;
      var _fsw = docElem.clientWidth / Layout.n;
      var _fsh = docElem.clientHeight / (Layout.h / ( Layout.w / Layout.n ) );
      _fsw <= _fsh ? fs = _fsw : fs = _fsh;
      first.style.fontSize = fs+'px';
  };
  setRem();

  window.addEventListener('resize', setRem);
  window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
          setRem()
      }
  });
});


$(function() {
    var $window = $(window),
        win_height_padded = $window.height() + 10,
        isTouch = true;
      if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") 
      { 
          $('.revealOnScroll').css("opacity","1");
      } 
      else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") 
      { 
          $('.revealOnScroll').css("opacity","1");
      } 
      else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") 
      { 
          $('.revealOnScroll').css("opacity","1");
      } 
      else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") 
      { 
          $('.revealOnScroll').css("opacity","1");
      }
    //if (isTouch) { $('.revealOnScroll').addClass('animated'); }
    $window.on('scroll', revealOnScroll);
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height();
      //addclass
      $(".revealOnScroll:not(.animated)").each(function () {
          var $this = $(this),
          offsetTop = $this.offset().top;
          if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated ' + $this.data('animation'));
            }
          }else{
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.removeClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.removeClass('animated ' + $this.data('animation'));
            }
          }
      });
      //removeclass
      $(".revealOnScroll.animated").each(function (index) {
          var $this     = $(this),
              offsetTop = $this.offset().top;
          if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated '+$(this).data('animation'));
          }
      });
    }
    revealOnScroll();
  });