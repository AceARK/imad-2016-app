//counter code
var button = document.getElementById('counter');

//Create a request object
button.onclick = function() {
    var request = new XMLHttpRequest();
    //Capture response and store in variable
    request.onreadystatechange = function(){
        console.log("Hello Ace");
        if(request.readystate === XMLHttpRequest.DONE){
            
            comsole.log("gehrhrf");
            //Take some action
            if(request.status == 200){
                var counter = request.responseText;
                //Render variable in span
                var span = document.getElementById('count');
                console.log("The current count is "+ counter.toString());
                span.innerHTML = counter.toString();
            }
        }
    };// Not yet done

    //Make a request
    request.open('GET','http://aceark.imad.hasura-app.io/counter',true);
    request.send(null);
};

