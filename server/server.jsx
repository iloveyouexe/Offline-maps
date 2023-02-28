const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
