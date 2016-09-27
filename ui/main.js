//counter code
var button = document.getElementById('counter');

//Create a request object
button.onclick = function() {
    var request = new XMLHttpRequest();
    //Capture response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                var counter = request.responseText;
                //Render variable in span
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };// Not yet done

    //Make a request
    request.open('GET','http://aceark.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var submit = document.getElementById('submit');
submit.onclick = function(){
    //function to make a request to server and send name
    var request = new XMLHttpRequest();
    //Capture response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                //capture name in array and send a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                 list = list + '<li>' + names[i] + '</li>';
                }
                 var ul = document.getElementById('nameList');
                ul.innerHTML = list;
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://aceark.imad.hasura-app.io/submit?name='+name,true);
    request.send(null);
};
