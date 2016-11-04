var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

// creating data array tinies[][] for content
var tinies = {
    "Kittens": [
        {
            "name": "Pepper",
            "age": "5 weeks",
            "image": "k3.jpg",
            "gender": "Male",
            "breed": "Tabby",
            "info": "Pepper loves playing with strings and his own reflection.",
            "status": "Foster care"
            
        },
        {
            "name": "Katie",
            "age": "7 weeks",
            "image": "k8.jpg",
            "gender": "Female",
            "breed": "Calico/White",
            "info": "Katie loves the sun. She has a whole lot of attitude and loves scaring humans by poofing up and running around.",
            "status": "Ready for Adoption"
        }
    ],
    "Puppies": [
        {
           "name": "Julia",
            "age": "4 weeks",
            "image": "l1.jpg",
            "gender": "Male",
            "breed": "Labrador/White",
            "info": "Julia's favorite game is fetch and she can play for hours, and still be excited about going outside!",
            "status": "Ready for Adoption"
        }
    ]
};


// function to create template for displaying animals above
function createAnimalViewTemplate(data){
  //  var animalList = animalDataInsert(data);
    var tiny;
    var animalList = [];
    var contentFragment = "";

    // to put all animals under (data) into animalList array.
    for (tiny in tinies[data]){
         console.log("the current tiny is "+tinies[data][tiny].name);
            image = tinies[data][tiny].image;
            name = tinies[data][tiny].name;
            age = tinies[data][tiny].age;
            gender = tinies[data][tiny].gender;
            breed = tinies[data][tiny].breed;
            info = tinies[data][tiny].info;
            status = tinies[data][tiny].status;
            
            // adding each animal as <li> item into animalList array.
            animalList.push({
                        content: `  
                            <li> 
                                <p> 
                                    Name: ${name}
                                    <br><br>
                                    <img style="height:25%;width:25%" src= "ui/${image}">
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
                            <br><br><br>
                        `
                    });
            contentFragment = contentFragment + animalList[tiny].content;
    }
 
    console.log("Final content is "+contentFragment);
 
    // template to display animals under (data).
    var htmlViewTemplate = `
                    <!DOCTYPE HTML>
                    <html>
                        <head>
                            <title>
                                ${data}
                            </title>
                            <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                        
                        <body>
                            <div id = "templateContainer" class = "center text-big bold content">
                                <h2>
                                     ${data}
                                </h2>
                                <p>
                                    Here is a list of our lovely ${data}.
                                </p>
                                <ol>
                                    ${contentFragment}
                                </ol>
                                
                                <p>
                                    For more information on any one of these cuties, contact us <a href="/contact_page"> here </a>.
                                </p>
                                <p>
                                    To become a foster, click <a href="/sign_up_page"> here </a>.
                                </p>
                            </div>
                        </body>
                    </html>
            `;
    return htmlViewTemplate;
}

// sample code
var names = [];
app.get('/submit', function(req,res){
    //get names from request
    var name = req.query.name;
   
    names.push(name);
    
    res.send(JSON.stringify(names));
});

// mapping for homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// sample code
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

// mapping for css
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

// mapping for javascript file
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

/*
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
*/

// mappings for various image files used in backgrounds
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

// mappings for images of animals
app.get('/ui/k3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'k3.jpg'));
});

app.get('/ui/k8.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'k8.jpg'));
});

app.get('/ui/l1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l1.jpg'));
});


// mapping for sign up page
app.get('/sign_up_page', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sign_up_page.html'));
});
/*
app.get('/display', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'display.html'));
});
*/

//animals == Kittens
// function call for content of selected data Kittens 
app.get('/:animals', function(req,res){
    var selectedAnimal = req.params.animals;
    res.send(createAnimalViewTemplate(selectedAnimal));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
