var per=0;
var timer;
timer=setInterval(function () {
    $('#bar1').css('width',per+'%');
    per+=1;
    if(per>100){

        $('.pageloading').addClass('completed');
        setTimeout(function () {
            $('.monsterText').html('<h2 >We are<h2>' +
                '             <h1>SQUARE</h1>' +'<h1>MONSTER</h1>'+
                '         <h3>Ahhhn We\' ll eat you</h3>')

        },3000)
        clearInterval(timer)
    }

},30)