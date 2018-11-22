
// JavaScript Document
// JavaScript Document
$(function(){
        var $iosActionsheet = $('#iosActionsheet');
        var $iosMask = $('#iosMask');
        function hideActionSheet() {
            $iosActionsheet.removeClass('weui-actionsheet_toggle');
            $iosMask.fadeOut(200);
        }

        $iosMask.on('click', hideActionSheet);
        $('#iosActionsheetCancel').on('click', hideActionSheet);
        $(".showIOSActionSheet").on("click", function(){
            $iosActionsheet.addClass('weui-actionsheet_toggle');
            $iosMask.fadeIn(200);
        });
        $('.weui-vote span').click(function(event) {
         /* Act on the event */
          $('#toast').fadeIn().delay(1000).fadeOut();
        });

});