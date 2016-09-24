console.log('Loaded!');
//changing value of innerHTML of 'main-text'

var element = document.getElementById('main-text');
element.innerHTML = ('New value using code console');

var img = document.getElementById('madi');
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
}