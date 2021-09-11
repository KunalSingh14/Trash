const express = require("express");

const User = require("../models/user");

const router = express.Router();

// GET /getUser?uid=XXXXXXXXXXXXX
router.get("/getUser", async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.query.uid });
        res.status(200).json({ success: true, result: user });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
