var fs = require('fs');
var express = require('express');
var app = express();
const PORT = 8008 || process.env.PORT;; 
fs.readFile('./index.html', function (err:any, html:any) {
app.listen(PORT, function () {
    console.log('listening! http://localhost:' + PORT);
});
app.get('/', function (req:any, res:any) {
    res.sendFile('index.html', {root: __dirname })
})
app.get('/crates.json', function (req:any, res:any) {
    res.sendFile('crates.json', {root: __dirname })
})})