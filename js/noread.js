var windowWidth = $(window).width();
 if(windowWidth < 992){   
    var noread=false
    if(noread){
        $('.text-paper-left img:first-child').attr({'src':'./img/noread.png'})
        $('.text-paper-left img:first-child').css({'padding':'3rem 3rem 10rem 3rem','background-color':'#fff'})
        $('.text-paper-left img:last-child').css({'display':'none'}) 
        $('.unread').css({'display':'none'})
    }
 }
