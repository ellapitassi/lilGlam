const express = require('express');
var path = require("path")
var app = express()
const db = require('./db');
var bodyParser = require("body-parser")

module.exports = app;

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));

app.listen(process.env.PORT || 1337)
db.sync().then(() => console.log('Database is synced'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 'API' routes
app.use('/api', require('./server/api'));


//edit
//add a save button and have it go to the backend
//modularize
//add a count!
//just have a save - can keep ng-model

//reducer
//complicated logic in service, also have controller which has less and template even less