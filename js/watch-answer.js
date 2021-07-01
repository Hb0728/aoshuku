$('.all-answer-button').click(function(){
    $('.da').css({'visibility':'visible'})
    $('.all-take-button').css({'display':'block'})
    $(this).css({'display':'none'})
})
$('.all-take-button').click(function(){
    $('.da').css({'visibility':'hidden'})
    $('.all-answer-button').css({'display':'block'})
    $(this).css({'display':'none'})
})

$('.download-text').click(function(){
    $('.da').css({'visibility':'visible'})
    $('.download-text2').css({'display':'inline-block'})
    $(this).css({'display':'none'})
})
$('.download-text2').click(function(){
    $('.da').css({'visibility':'hidden'})
    $('.download-text').css({'display':'inline-block'})
    $(this).css({'display':'none'})
})

