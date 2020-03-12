const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');
const groupController = require('./controllers/groupController.js');

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
});

app.post('/signup', authController.userSignup, authController.getUserData, authController.createJWT, (req, res) => {
  res.status(200).json(res.locals.userData);
});

app.post('/login', authController.getUserData, authController.createJWT, (req, res) => {
  res.status(200).json(res.locals.userData);
});

app.post('/addUser', userController.addUser, userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

app.delete('/deleteUser', userController.deleteUser, userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.allUsers);
});

app.post('/postPrefs', userController.postPrefs, userController.teammatePrefs, (req, res) => {
  res.status(200).json();
});

app.post('/generateGroups', groupController.deleteGroups, userController.getUsers, groupController.generateGroups, groupController.sendGroupData, (req, res) => {
  res.status(200).json(res.locals.groupData);
});

// test route
// app.get('/test', authController.verifyJWT, (req, res) => {
//   res.status(200).json({msg: "hello"});
// })

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
