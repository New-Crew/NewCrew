const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController.js');

const port = 3000;

const app = express();

app.use(bodyParser());

app.get('/', (req, res) => {
  console.log('/ endpoint hit')
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
})

app.get('/dist/bundle.js', (req, res) => {
  console.log('dist endpoint hit');
  res.sendFile(path.resolve(__dirname, 'dist/bundle.js'));
})

app.post('/signup', authController.userSignup, authController.getUserData, (req, res) => {
  res.status(200).json(res.locals.userData);
});

app.post('/login', authController.getUserData, (req, res) => {
  res.status(200).json(res.locals.userData);
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown error caught in middleware',
    status: '400',
    message: err
  };
  console.log(defaultErr);
  res.status(defaultErr.status).json(defaultErr.message);
});

app.listen(port, () => console.log('Listening on port: ', port));
