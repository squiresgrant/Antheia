
var fs = require('fs');
//express 
var express = require('express');
var app = express();
//this dir
var dir = __dirname;
const PORT=3000; 
let t = dir + './crates.json'
fs.readFile('./index.html', function (err, html) {
//listen
app.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});
//on request serve index.html
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname })
})
app.get('/crates.json', function (req, res) {
    res.sendFile('crates.json', {root: __dirname })
})
    
});