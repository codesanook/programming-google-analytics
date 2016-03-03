var express = require('express');
var app = express();
var ejs = require('ejs');

app.use('/static', express.static('static'));
app.use('/source-codes', express.static('source-codes'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


//ref https://scotch.io/tutorials/use-ejs-to-template-your-node-application
//app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log("dirname %s", __dirname);
    console.log('Example app listening on port 3000!');
});