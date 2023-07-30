const express = require('express');
const app = express();
const path = require('path');

// Set up a route for "/gethello" with GET method
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});





// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());

// app.get('/gethello', (req, res) => {
//         res.send('hello NodeJs...!!!');
// }).listen(8080,() => {
//     console.log("server listening on port 8080");
// });
