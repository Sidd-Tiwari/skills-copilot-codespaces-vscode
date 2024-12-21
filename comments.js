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
  var comment = {
    id: Date.now(),