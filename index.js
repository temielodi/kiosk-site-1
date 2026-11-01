const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// Frontend: sends the HTML page in the public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Backend API: sends data as JSON
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

app.listen(3000, () => console.log('Server started'));
