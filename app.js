const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.send("Server is up and running")
});
app.get("/dashboard", function (req, res) {
    res.sendFile(__dirname + "/dashboard.html");
    // res.send("Server is up and running")
});
app.get("/schemes", function (req, res) {
    res.sendFile(__dirname + "/schemes.html")
});
app.listen(3000, function () {
    console.log("Server started");
});
