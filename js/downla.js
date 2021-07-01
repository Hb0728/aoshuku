$('.down-push').click(function(){
    $(this).css({'display':'none'})
    let index= $('.down-push').index(this)
    $('.top-push').eq(index).css({'display':'block','margin-top':'0'})
})
$('.top-push').click(function(){
    let index=$('.top-push').index(this)
    $(this).css({'display':'none'})
    $('.down-push').eq(index).css({'display':'block'})
})