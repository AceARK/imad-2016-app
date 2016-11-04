var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var tinies = {
    'tinyOne' : {
        tinyType: 'Kittens',
        tinyImage:'k3.jpg',
        tinyName: 'Pepper',
        tinyAge: '5 weeks',
        tinyGender: 'Male',
        tinyBreed: 'Tabby',
        tinyInfo: 'Pepper loves playing with strings and his own reflection.',
        tinyStatus: 'Foster care'
    },
    
    'tinyTwo' : {
        tinyType: 'Kittens',
        tinyImage:'k8.jpg',
        tinyName: 'Katie',
        tinyAge: '7 weeks',
        tinyGender: 'Female',
        tinyBreed: 'Calico/White',
        tinyInfo: 'Katie loves the sun.',
        tinyStatus: 'Foster care'
    },
    
    'tinyThree' : {
        tinyType: 'Puppies',
        tinyImage:'l1.jpg',
        tinyName: 'Julia',
        tinyAge: '4 weeks',
        tinyGender: 'Female',
        tinyBreed: 'Labrodor/White',
        tinyInfo: "Julia's favorite game is fetch and she can play for hours, and still be excited about going outside!",
        tinyStatus: 'Ready for Adoption'
    }
};

var myJson = {"omono": "bad girl"};


// Function to insert data into animalsView template

function animalDataInsert(data){
     var animalsView = [];
     var tiny;
    for (tiny in tinies){
        image = tiny.tinyImage;
        name = tiny.tinyName;
        age = tiny.tinyAge;
        gender = tiny.tinyGender;
        breed = tiny.tinyBreed;
        info = tiny.tinyInfo;
        status = tiny.tinyStatus;
        
        if(tiny.tinyType == data){
            animalsView.push({
                        content: `  
                            <li><img style="height:25%;width:25%" src= "ui/${image}"> 
                                <p> 
                                    Name: ${name}
                                    <br>
                                    Age: ${age}
                                    <br>
                                    Gender: ${gender}
                                    <br>
                                    Breed: ${breed}
                                    <br>
                                    Info: ${info}
                                    <br>
                                    Status: ${status}
                                </p>
                            </li>
                            <br><br>
                        `
                    });
        }
    }
return animalsView;

}


/*
// TODO - append each animalView as animalView[0] + animalView[1] +... to create list items inside template <ol> tag
function appendAnimalViews(data){
    for each(var animalView in animalsView){
        animalsViewContent = animalsViewContent + animalsView;
    }
    return animalsViewContent;
}
*/
  
// TODO - use the above animalsView as $content as data for function createAnimalViewTemplate      

/*
function createAnimalViewTemplate(data){
    var animalList = animalDataInsert(data);
    var content =``;
    for each(var animal in animalList){
        content = content + animal.content;
    }

    
    var htmlViewTemplate = `
    <!DOCTYPE HTML>
<html>
    <head>
        <title>
            ${data}.
        </title>
    </head>
    
    <body>
        <h2>
            These are the wonderful ${data}.
        </h2>
        <ol>
            ${content}
        </ol>
        
        <p>
            For more information on any one of these cuties, contact us <a href="/contact_page"> here </a>.
        </p>
        <p>
            To become a foster, click <a href="/sign_up_page"> here </a>.
        </p>
    </body>
</html>
    `;
    return htmlViewTemplate;
}
*/

// sample code for templating function
function createTemplate(data){
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title> ${title} </title>
            <meta name="viewport" content="width=height-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                     <a href="/"> Home </a> 
                     <hr>
                </div>
                 
                <div>
                    <h3> ${heading} </h3>
                </div>
                
                <div> 
                    ${date}
                </div>
             
                <div class="content">
                   ${content}
                </div>
        
             </div> 
        </body>
        
    </html>
    `;
    return htmlTemplate;
}



var names = [];
app.get('/submit', function(req,res){
    //get names from request
    var name = req.query.name;
   
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

//articleName == article-one
//articles[articleName] == [] content object for article one
/*
app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/catdog.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'catdog.jpg'));
});

app.get('/ui/mixbanner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mixbanner.jpg'));
});

app.get('/ui/volunteer_slide1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'volunteer_slide1.jpg'));
});

app.get('/ui/catanddogfosterpage.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'catanddogfosterpage.jpg'));
});

app.get('/ui/fosterkitty.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fosterkitty.jpg'));
});

app.get('/ui/fosterdoggy.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fosterdoggy.jpg'));
});

app.get('/ui/register.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'register.gif'));
});

app.get('/ui/signup.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.png'));
});



app.get('/ui/k3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'k3.jpg'));
});

app.get('/ui/k8.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'k8.jpg'));
});

app.get('/ui/l1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l1.jpg'));
});



app.get('/sign_up_page', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sign_up_page.html'));
});
/*
app.get('/display', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'display.html'));
});
*/

//animals == type-one
//animalsView[animals] == [] content object for type-one
app.get('/:animals', function(req,res){
    var selectedAnimal = req.params.animals;
    res.send(createAnimalViewTemplate(selectedAnimal));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

