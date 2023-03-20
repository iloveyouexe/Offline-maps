const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// change lat lng 
app.get('/api/map', (req, res) => {
  const mapData = {
    center: [51.505, -0.09],
    zoom: 13,
    markers: [
      { lat: 51.505, lng: -0.09 },
      { lat: 51.51, lng: -0.1 },
      { lat: 51.51, lng: -0.12 },
    ],
  };
  res.send(mapData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

console.log("__dirname:", __dirname);