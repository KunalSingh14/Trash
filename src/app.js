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
const uploadScheme = require("./controllers/admin/uploadScheme");

app.use(express.json());
app.use(uploadUser);
app.use(updateUser);
app.use(uploadCity);
app.use(updateCity);
app.use(uploadScheme);

app.listen(process.env.PORT || 8080, async () => {
    console.log(
        "Server running at http://localhost:" + (process.env.PORT || 8080)
    );
});