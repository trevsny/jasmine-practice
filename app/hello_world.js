var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello orld</h1>");
});

app.get("/jasmine", (req, res) => {
    res.status(200).send("<p>300</p>")
   
});

var server = app.listen(3000,() => {
    console.log("Listening on 3000")
})

module.exports = server;