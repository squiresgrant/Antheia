var express = require('express');
var app = express();
const PORT = 8008;
app.listen(PORT, function () {
    console.log('listening! http://localhost:' + PORT + ' | http://' + require("ip").address() + ':' + PORT);
});
app.get('/', function (req:any, res:any) {
    res.sendFile('index.html', {root: __dirname })
})
app.get('/crates.json', function (req:any, res:any) {
    res.sendFile('crates.json', {root: __dirname })
});
