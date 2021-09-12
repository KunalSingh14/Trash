const config = require("../env.json");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: config.CORS_ORIGIN }));
require("./db/mongoose");

const uploadUser = require("./controllers/admin/uploadUser");
const updateUser = require("./controllers/admin/updateUser");
const uploadCity = require("./controllers/admin/uploadCity");
const updateCity = require("./controllers/admin/updateCity");
const uploadState = require("./controllers/admin/uploadState");
const uploadScheme = require("./controllers/admin/uploadScheme");
const getUser = require("./controllers/getUser");
const getValidCredentials = require("./controllers/getValidCredentials");
const getCities = require("./controllers/getCities");
const getStates = require("./controllers/getStates");

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

app.listen(process.env.PORT || 8080, async () => {
    console.log(
        "Backend Server running at http://localhost:" +
            (process.env.PORT || 8080)
    );
});
