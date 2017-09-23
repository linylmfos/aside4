requirejs.config ({
	paths: {
		jquery: 'jquery-3.2.1.min'
	}
});

requirejs(['jquery'], function ($) {
    //点击事件
    $('#backTop').on('click', move);
    //检查位置事件
    $(window).on('scroll', function(){
        checkPosition($(window).height());
    });

    checkPosition($(window).height());

    function move() {
        $('html,body').animate({
            scrollTop : 0
        },800);
    }

    function go() {
        $('html,body').scrollTop(0);
    }

    function checkPosition(pos) {
        if($(window).scrollTop() > pos){
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }
    }

})