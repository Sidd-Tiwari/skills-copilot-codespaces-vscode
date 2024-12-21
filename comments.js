// create web server
// 1. load express
const express = require('express');
// 2. create express server
const app = express();
// 3. define a port
const port = 3000;
// 4. define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});