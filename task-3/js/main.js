function startad(){
    setTimeout(function(){
        document.getElementById('box1').style.width = 0;
        document.getElementById('box2').style.width = 0;
        document.getElementById('box1').style.transition = 'all 0.2s';
        document.getElementById('box2').style.transition = 'all 0.2s';

    },250)

    setTimeout(function(){
        document.getElementById('text1').style.transform = 'translatex(-142px)';
        document.getElementById('text1').style.transition = 'all 0.5s';
    },350)

    setTimeout(function(){
       document.getElementById('text2').style.opacity = 1;
       document.getElementById('text2').style.transform = 'translatex(-140px)';
       document.getElementById('text2').style.transition = 'all 0.7s';
    },370)

    setTimeout(function(){
        document.getElementById('text3').style.opacity = 1;
        document.getElementById('text3').style.transform = 'translatey(-12px)';
        document.getElementById('text3').style.transition = 'all 0.5s';

    },900)

    setTimeout(function(){
        document.getElementById('logo').style.transform = 'translatey(18px)';
        document.getElementById('logo').style.transition = 'all 0.3s';
    },970)

    setTimeout(function(){
        document.getElementById('icon1').style.transform = 'scale(1)';
        document.getElementById('icon1').style.transition = 'all 0.5s'
    },1200)

    setTimeout(function(){
        document.getElementById('icon2').style.transform = 'scale(1)';
        document.getElementById('icon2').style.transition = 'all 0.5s';
    },1300)

    setTimeout(function(){
        document.getElementById('icon3').style.transform = 'scale(1)';
        document.getElementById('icon3').style.transition = 'all 0.5s';
    },1400)

    setTimeout(function(){
        document.getElementById('icon4').style.transform = 'scale(1)';
        document.getElementById('icon4').style.transition = 'all 0.5s';
    },1500)

    setTimeout(function(){
        document.getElementById('btn').style.opacity = 1;
        document.getElementById('btn').style.transform = 'scale(1)'
        document.getElementById('btn').style.transition = '0.5s'
    },1700)
}
window.load=startad();