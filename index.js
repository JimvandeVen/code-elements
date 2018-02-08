var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'assets'))); 


app.get('/', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});

app.get('/home', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});


app.get('/about', function(req, res){
  res.render('about.ejs', {
    title: 'About',
     nav: ['Home','About','Contact']
  });
});

app.get('/contact', function(req, res){
  res.render('contact.ejs', {
    title: 'Contact',
     nav: ['Home','About','Contact']
  });
});

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');  