const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    uid: {
        type: Number,
        required: true,
        index: true,
    },
    photoUrl: String,
    otp: {
        type: Number,
        required: true,
    },
    city: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    vehicles: [
        {
            month: Number,
            year: Number,
            details: {
                name: String,
                isPucCertified: Boolean,
                details: String,
                certification: String,
                vehicleScore: Number,
                finalScore: Number,
                checkUpDate: Date,
            },
        },
    ],
    bdWaste: [
        {
            month: Number,
            year: Number,
            qty: Number,
        },
    ],
    nbdWaste: [
        {
            month: Number,
            year: Number,
            qty: Number,
        },
    ],
    treesPlanted: [
        {
            month: Number,
            year: Number,
            nos: Number,
        },
    ],
    cleanUpDrives: [
        {
            month: Number,
            year: Number,
            details: {
                task: String,
                details: String,
                wasteCollected: Number,
                points: Number,
            },
        },
    ],
});

const user = new mongoose.model("user", userSchema);

module.exports = user;