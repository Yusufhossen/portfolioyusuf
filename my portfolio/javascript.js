
var menuBnt = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#close-btn');
var navbar = document.querySelector('.navbar');


menuBnt.onclick = () =>{
    navbar.classList.add('active');
}
closeBtn.onclick = () =>{
    navbar.classList.remove('active');
}


//typed js

var typed = new Typed('.typed', {
    strings: ['web developer', 'web disigner', 'wordpress well'],
    stypeSpeed: 100,
    backSpeed:100,
    loop: true,

});


 
window.onscroll = () =>{
    
    navbar.classList.remove('active');
   
    
}











