const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    // Code that might throw an error
    // Example:  Reading from a file, database query, external API call, etc.
    // ... your code here...
    res.send('Hello World!');
  } catch (error) {
    console.error('Error in / route:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
