let path = require('path');
let fs = require('fs');
let express = require('express');
var bodyParser = require('body-parser')


// IMPORTS
let indexRoute = require('./routes/index');
let adminRoute = require('./routes/admin');

let db = require('./mongoDb/db');

let app = express();

app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
    fs.readFile(path, 'utf-8', callbacks);
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.join(__dirname, '../client')));

console.log("db", db);
db();

//ROUTES
app.use('/', indexRoute);
app.use('/admin', adminRoute);

//ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500);
});

module.exports = app;