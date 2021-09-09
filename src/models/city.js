const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    aqi: {
        type: Number,
        required: true,
    },
    bdWaste: {
        type: Number,
        required: true,
        default: 0,
    },
    nbdWaste: {
        type: Number,
        required: true,
        default: 0,
    },
    drainageSystemScore: {
        type: Number,
        required: true,
    },
    roadTrafficScore: {
        type: Number,
        required: true,
    },
    treesPlanted: {
        type: Number,
        required: true,
        default: 0,
    },
    cleanUpDrives: [
        {
            task: String,
            details: String,
            wasteCollected: Number,
            points: Number,
        },
    ],
    pucPassedVehicles: {
        type: Number,
        default: 0,
    },
    pucFailedVehicles: {
        type: Number,
        default: 0,
    },
    eVehicles: {
        type: Number,
        default: 0,
    },
    cngVehicles: {
        type: Number,
        default: 0,
    },
    petrolVehicles: {
        type: Number,
        default: 0,
    },
    dieselVehicles: {
        type: Number,
        default: 0,
    },
    population: {
        type: Number,
        required: true,
    },
});

const city = new mongoose.model("city", citySchema);

module.exports = city;
