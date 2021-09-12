const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    score: {
        type: Number,
        required: true,
    },
    rankChange: {
        type: Number,
        required: true,
    },
});

const state = new mongoose.model("state", stateSchema);

module.exports = state;
