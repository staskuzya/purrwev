$(document).ready(function(){
    $('.hexagon').click(function(){
        $('.hexagon').attr('src','img/Polygon1mini.png');
        $(this).attr('src','img/Polygon1miniOrange.png');
        var id = $(this).attr('id');
        $('slide:eq(0)').css('transform','translateY(0%)');
        if (id==0) {
            $('.slide').css('transform','translateY(0%)');
        }
        if (id==1) {
            $('.slide').css('transform','translateY(-110%)');
        }
        if (id==2) {
            $('.slide').css('transform','translateY(-230%)');
        }
    })
    $('.video-play').click(function(){
        $('.video-hidden').css('display','flex')
    })
    $('.video-hidden').click(function(){
        $(this).css('display','none')
    })
    i=0;
    $('.hamburger').click(function(){
        i++
        if (i%2==0) {
            $('.nav-menu').css('display','none')
        }
        if (i%2!=0) {
            $('.nav-menu').css('display','flex')   
        }
    })
})
