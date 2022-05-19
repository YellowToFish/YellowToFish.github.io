var middleRight = document.getElementById('middleRight');
var openIt = document.getElementById('openIt');
var closeIt = document.getElementById('closeIt');

openIt.addEventListener('click', function(){
    middleRight.style.right = '0';
})
closeIt.addEventListener('click', function(){
    middleRight.style.right = '-40vw';
})