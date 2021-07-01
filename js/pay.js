$ajax({
        url:'',
        success: function(result){        
                if(result.success){
                $('.message').addClass("d-none")
                $('.pay-code').addClass("d-none")
                $('.agree').addClass("d-none")
                $('.sucess').addClass("d-block")
                $('.qq').addClass("d-block")
                var windowWidth = $(window).width();
                if(windowWidth < 992){
                $('.top-box').removeClass('d-block')
                $('.top-box').addClass('d-none')
                $('.pay-agree').addClass('d-none')
                $('.backindex').addClass('d-block')
                }
            }else{
            }
        }
    })