var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
title:'Article-one | Vaibhav',
heading:'Article-one',
date:'23 Sept 2016',
content:'This is the content for this site'
},
 'article-two':{title:'Article-two | Vaibhav',
heading:'Article-two',
date:'19 Sept 2016',
content:'This is the content for article 2'},
 'article-three':{title:'Article-three | Vaibhav',
heading:'Article-three',
date:'29 Sept 2016',
content:'This is the content for article 3'}};

function createTemplate(data)
{var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=
`<html>
<head>
    <title>${title}</title>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
       <body> 
    <style>
        
    </style>
    
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>${date}</div>
            <div>${content}</div>
        </div>
    </body>    
</html>`;
return htmlTemplate;
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){ 
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));});

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
