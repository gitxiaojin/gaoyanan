// JavaScript Document
$(function() {
    /*导航*/
    $('.nav ul li a').hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        });
    $(".nav ul li a").mousedown(function() {
        $(this).addClass("active");
    });
    $(".nav ul li a").mouseup(function() {
        $(this).removeClass("active");
    });
	
    /*按钮*/
    $(".btn").hover(
        function() {
            var str = $(this).attr("class").split(" ");
            $(this).addClass(str[1] + "_hover");
        },
        function() {
            var str = $(this).attr("class").split(" ");
            $(this).removeClass(str[2]);
        }
    );
    $(".btn").mousedown(function() {
        var str = $(this).attr("class").split(" ");
        $(this).addClass(str[1] + "_active");
    });
    $(".btn").mouseup(function() {
        var str = $(this).attr("class").split(" ");
        $(this).removeClass(str[3]);
    });
});
