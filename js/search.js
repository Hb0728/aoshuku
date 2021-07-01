var windowWidth = $(window).width();
    if(windowWidth < 992){
        $('.search-button').click(function(){
            $('.form-control').addClass('d-inline-block')
            $('.form-control').css({'height':'44px','border-radius':'0',})
            $('.form-control').focus(function(){$(this).css({'border':'1px solid #333'})})
            $('.form-control').focus()
            $('.search div:first-child').removeClass('d-flex')
            $('.search div:first-child').addClass('d-none')
        });
        $('.form-control').focusout(function(){
            $('.search div:first-child').addClass('d-flex')
            $('.search div:first-child').removeClass('d-none')
            $('.form-control').removeClass('d-inline-block')
            $('.form-control').addClass('d-none')
        })
    }