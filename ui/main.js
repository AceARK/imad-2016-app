console.log('Loaded!');
//changing value of innerHTML of 'main-text'

var element = document.getElementById('main-text');
element.innerHTML = ('New value using code console');

var marginLeft = 0;
var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft +5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
}
