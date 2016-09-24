var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    var articleOne  : {
        
    title: 'Article One of Ace Ark',
    heading: 'Article One',
    date: 'September 23, 2016',
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
    var articleTwo : {},
    var article Three
},

    
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
