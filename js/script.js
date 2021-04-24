//event pada saat link di klik
$('.page-scroll').on('click', function(event){


    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    //animasi
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500,);
    
    event.preventDefault()



});


//about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

//parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+wScroll/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+wScroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+wScroll/1.2+'%)'
    });

    //portfolio
    if(wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });


     
    }



});