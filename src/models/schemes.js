const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
    name: String,
    details: String,
    img: String,
    credits: Number,
});

const scheme = new mongoose.model("scheme", schemeSchema);

module.exports = scheme;
