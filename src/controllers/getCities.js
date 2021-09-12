const express = require("express");

const City = require("../models/city");

const router = express.Router();

// GET /getCities
router.get("/getCities", async (req, res) => {
    try {
        const cities = await City.find({}).sort({ score: -1 });
        res.status(200).json({ success: true, result: cities });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
