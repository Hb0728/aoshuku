
var windowwidth= $(window).width();
if(windowwidth>992){
    $(window).scroll(function(){
        var top=$(window).scrollTop()
            if(top>193){
                $('.text-title').css({'position':'fixed','top':'0','z-index':'3','left':'0','right':'0'})
            }else{
                $('.text-title').css({'position':'static'})
            }
    })
    }