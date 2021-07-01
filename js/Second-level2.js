$('.left-item').click(function(){
    let currentIndex=$(this).index();
    $('.item').eq(currentIndex).addClass('show');
    $('.item').eq(currentIndex).siblings().removeClass('show'); 
}) 