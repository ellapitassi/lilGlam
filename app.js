const express = require('express');
var path = require("path")
var app = express()
const db = require('./db');

module.exports = app;

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));

app.listen(process.env.PORT || 1337)
db.sync().then(() => console.log('Database is synced'));

// 'API' routes
app.use('/api', require('./server/api'));


//back end object in db file?
//edit
//modularize
//add a count!
