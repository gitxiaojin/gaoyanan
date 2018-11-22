
// JavaScript Document
// JavaScript Document
$(function(){
        var $iosActionsheet = $('#iosActionsheet');
        var $iosMask = $('#iosMask');
        function hideActionSheet() {
            $iosActionsheet.removeClass('weui-actionsheet_toggle');
            $iosMask.fadeOut(200);
        }

        // $iosMask.on('click', hideActionSheet);
        // $('#iosActionsheetCancel').on('click', hideActionSheet);
        // $(".showIOSActionSheet").on("click", function(){
        //     $iosActionsheet.addClass('weui-actionsheet_toggle');
        //     $iosMask.fadeIn(200);
        // });
        $('.inner_Mtip').click(function(event) {
           $(this).siblings('.longen').fadeIn().delay(1000).fadeOut();
        });
        $('.add').click(function(event) {
           $('.modal-mask').css('display','block')
           $('body').height($(window).height()).css('overflow-y','hidden')
        });
        $('.btn-close').click(function(event) {
           $('.modal-mask').css('display','none')
           $('body').height($(window).height()).css('overflow-y','auto')
        });

       
});