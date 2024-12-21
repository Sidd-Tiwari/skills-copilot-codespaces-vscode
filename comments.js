//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');

//parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//get comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

//add comment
app.post('/api/comments', function(req, res) {
  var comment = req.body;
  comment.id = Date.now(); // Add an id to the comment
  comments.push(comment);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(comment);
    }
  });
});

//start server
var port = 3000;
app.listen(port, function() {
  console.log('Server is running on port ' + port);
});