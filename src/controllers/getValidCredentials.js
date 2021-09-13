const express = require("express");
const User = require("../models/user");

const router = express.Router();

// GET /getValidCredentials
router.get("/getValidCredentials", async (req, res) => {
    try {
        const users = await User.find({}).select({ uid: 1, otp: 1 });
        res.status(200).json({ success: true, result: users });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
