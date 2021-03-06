//import mongoose and setting up the connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/onlineclassroom_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true

});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to database:: MongoDB');
});

module.exports = db;
