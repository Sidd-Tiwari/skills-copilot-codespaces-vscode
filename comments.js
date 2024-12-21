//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});