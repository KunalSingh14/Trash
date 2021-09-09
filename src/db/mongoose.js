const config = require("../../env.json");
const mongoose = require("mongoose");

mongoose.connect(
    config.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    (error, success) => {
        if (error) return console.log(error);
        console.log("Connected to Database");
    }
);
