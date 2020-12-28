// import required modules
const express = require('express');
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');


// start the express server
const app = express();


// setting port
const port = 8000;


// to parse form data
app.use(express.urlencoded({ extended: true }));


// initialize passport 
app.use(passport.initialize());


// routes
app.use('/', require('./routes'));


// listen to the port
app.listen(port, function (err) {
  if (err) {
    console.log('error:', err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
