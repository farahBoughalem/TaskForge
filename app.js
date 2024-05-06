const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

// create express app
const app = express();

// connect to mongodb & listen to requests
const dbURI = config.mongoURI;
mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register the view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
  res.sendFile('./views/index.html', { root: __dirname });
});
