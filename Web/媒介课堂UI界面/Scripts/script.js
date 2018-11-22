/* 
* @Author: Marte
* @Date:   2016-11-25 10:38:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 16:15:06
*/
 $(function(){
    var $iosDialog1 = $('#iosDialog1'),
        $iosDialog2 = $('#iosDialog2'),
        $androidDialog1 = $('#androidDialog1'),
        $androidDialog2 = $('#androidDialog2');

    $('#dialogs').on('click', '.weui-dialog__btn', function(){
        $(this).parents('.js_dialog').fadeOut(200);
    });

    $('#showIOSDialog1').on('click', function(){
        $iosDialog1.fadeIn(200);
    });
    $('#showIOSDialog2').on('click', function(){
        $iosDialog2.fadeIn(200);
    });
    $('#showAndroidDialog1').on('click', function(){
        $androidDialog1.fadeIn(200);
    });
    $('#showAndroidDialog2').on('click', function(){
        $androidDialog2.fadeIn(200);
    });
});
