const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/index.html");
    // res.send("Server is up and running")
})
app.listen(3000, function () {
    console.log('Server started');
});