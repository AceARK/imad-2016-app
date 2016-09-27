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
app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
