const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  console.log('/ endpoint hit')
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
})

app.get('/dist/bundle.js', (req, res) => {
  console.log('dist endpoint hit');
  res.sendFile(path.resolve(__dirname, 'dist/bundle.js'));
})

app.listen(port, () => console.log('Listening on port: ', port));
