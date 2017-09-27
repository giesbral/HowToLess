var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var portName = process.argv[2];

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', portName);

app.get('/', function (req, res) {
    res.render("intro");
});

app.get('/intro', function (req, res) {
    res.render("intro");
});

app.get('/examplewebsite', function (req, res) {
    res.render("examplewebsite");
});

app.get('/startingcss', function (req, res) {
    res.render("startingcss");
});

app.get('/variables', function (req, res) {
    res.render("variables");
});

app.get('/nesting', function (req, res) {
    res.render("nesting");
});

app.get('/mixins', function (req, res) {
    res.render("mixins");
});

app.get('/functions', function (req, res) {
    res.render("functions");
});

app.get('/outro', function (req, res) {
    res.render("outro");
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

