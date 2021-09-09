const express = require("express");

const User = require("../../models/user");

const router = express.Router();

router.post("/admin/uploadUser", async (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
        res.status(200).json({ success: true, result: user });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
