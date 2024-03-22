const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/img', express.static(__dirname + '/img'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var n1 = Number(req.body.weight);
    var n2 = Number(req.body.height);
    var result = n1 / (n2 * n2);
    res.redirect("/result?result=" + result);
});

app.get("/result", function (req, res) {

    var result = req.query.result;

    res.sendFile(__dirname + "/result.html", { result });
});

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});
