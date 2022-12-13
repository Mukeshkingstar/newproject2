
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2000;
app.get('/', function (req, res) {
    res.send("HOMe page")
});

app.get('/code', function (req, res) {
    res.send("About me")
});

app.listen( PORT, function () {
console.log('Example app listening on port ${PORT}');
});