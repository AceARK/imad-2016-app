var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one'  : {
    title: 'Article One of Ace Ark',
    heading: 'Article One',
    date: 'September 05, 2016',
    content: `      <p>
                    This is the first para of Article One. This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.
                </p>
                <p>
                    This is the second para of Article One. This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.
                </p>
                <p>
                    This is the third para of Article One. This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.This is the first para of Article One.
                </p>
                  <ol>
                    <li>
                        List item 1
                    </li>
                    <li>
                         List item 2
                    </li>
                    <li>
                        List item 3
                    </li>
                </ol>
                
                <input type= "text" id= "comments"> Type your comments here </input>
                </br>
                <input type= "submit" id= "submit" value= "Post"></input>
                
            `
    },
    'article-two' : {
        title: 'Article Two of Ace Ark',
        heading: 'Article Two',
        date: 'September 15, 2016',
        content: `      <p>
                        This is the first para of Article Two.
                        </p>
                    `
    },
    'article-three' : {
        title: 'Article Three of Ace Ark',
        heading: 'Article Three',
        date: 'September 23, 2016',
        content: `      <p>
                        This is the first para of Article Three.
                        </p>
                    `
    },
};

var animalsView = {
    'type-one' : {
        title: 'Kittens',
        heading: 'Meet our Kittens',
        content: `  
        <li> <img src= "ui/k
        `
    },
    'type-two' : {
        title: 'Puppies',
        heading: 'Meet our Puppies',
        content: ''
    },
};

function createAnimalViewTemplate(data){
    title = data.title;
    heading = data.heading;
    content = data.content;
    
    var htmlViewTemplate = `
    <!DOCTYPE HTML>
<html>
    <head>
        <title>
            ${title}
        </title>
    </head>
    
    <body>
        <h2>
            ${heading}
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
    var animals = req.params.animals;
    res.send(createAnimalViewTemplate(animalsView[animals]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

