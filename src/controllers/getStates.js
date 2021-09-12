const express = require("express");

const State = require("../models/state");

const router = express.Router();

// GET /getStates
router.get("/getStates", async (req, res) => {
    try {
        const states = await State.find({}).sort({ score: -1 });
        res.status(200).json({ success: true, result: states });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
