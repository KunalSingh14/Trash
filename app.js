const config = require("./env.json");
const express = require("express");
const cors = require("cors");

require("./src/db/mongoose");
const uploadUser = require("./src/controllers/admin/uploadUser");
const updateUser = require("./src/controllers/admin/updateUser");
const uploadCity = require("./src/controllers/admin/uploadCity");
const updateCity = require("./src/controllers/admin/updateCity");
const uploadState = require("./src/controllers/admin/uploadState");
const uploadScheme = require("./src/controllers/admin/uploadScheme");
const getUser = require("./src/controllers/getUser");
const getValidCredentials = require("./src/controllers/getValidCredentials");
const getCities = require("./src/controllers/getCities");
const getStates = require("./src/controllers/getStates");

const app = express();

app.use(express.static("public"));
app.use(cors({ origin: config.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadUser);
app.use(updateUser);
app.use(uploadCity);
app.use(updateCity);
app.use(uploadState);
app.use(uploadScheme);

app.use(getUser);
app.use(getValidCredentials);
app.use(getCities);
app.use(getStates);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.send("Server is up and running")
});
app.get("/dashboard", function (req, res) {
    res.sendFile(__dirname + "/dashboard.html");
    // res.send("Server is up and running")
});
app.get("/schemes", function (req, res) {
    res.sendFile(__dirname + "/schemes.html");
});

app.listen(process.env.PORT || 3000, async () => {
    console.log("Server running on port " + (process.env.PORT || 3000));
});
