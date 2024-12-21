// create web server

// body parser
const bodyParser = require('body-parser');
// import comments
const comments = require('./comments');

// use body parser middleware
app.use(bodyParser.json());

// get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// post comments
app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  if (author && text) {
    comments.push({ author, text });
    res.json({ message: 'Comment added!' });
  } else {
    res.status(400).json({ message: 'Error: author and text required' });
  }
});

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});