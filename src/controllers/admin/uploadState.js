const express = require("express");

const State = require("../../models/state");

const router = express.Router();

router.post("/admin/uploadState", async (req, res) => {
    try {
        const state = new State(req.body);
        state.save();
        res.status(200).json({ success: true, result: state });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
