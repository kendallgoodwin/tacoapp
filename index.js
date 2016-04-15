var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/tacos', require('./controllers/tacos'));

var port = 3000;
app.listen(process.env.PORT || port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});
