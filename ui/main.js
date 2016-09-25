//counter code
var button = document.getElementById('counter');
counter = 0;
//Create a request object
button.onclick = function() {
    var request = new XMLHttpRequest();
    //Capture response and store in variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
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

