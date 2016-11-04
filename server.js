var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


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
        },
        {
           "name": "Julian",
            "age": "6 weeks",
            "image": "l1.jpg",
            "gender": "Male",
            "breed": "Labrador/White",
            "info": "Julian's favorite game is fetch and he can play for hours, and still be excited about going outside!",
            "status": "Ready for Adoption"
        }
    ]
};



// Function to insert data into animalsView template

function animalDataInsert(data){
     var animalsView = [];
     console.log("Entered animalDataInsert");
        var tiny;
        for (tiny in tinies[data]) {
            console.log("the current tiny is "+tinies[data][tiny].name);
            image = tinies[data][tiny].image;
            name = tinies[data][tiny].name;
            age = tinies[data][tiny].age;
            gender = tinies[data][tiny].gender;
            breed = tinies[data][tiny].breed;
            info = tinies[data][tiny].info;
            status = tinies[data][tiny].status;
            
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
return animalsView;

}


/*
// TODO - append each animalView as animalView[0] + contentFragment[1] +... to create list items inside template <ol> tag

// function to create the template for displaying animals
function createAnimalViewTemplate(data){
    var animalList = animalDataInsert(data);
    var animal;
    var contentFragment = "";
    for (animal in animalList){
        content = animalList[animal].content;
        console.log("Current content is "+content);
        contentFragment = contentFragment + content;
    }

    console.log("Final content is "+contentFragment);
 
    
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
            ${contentFragment}
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

