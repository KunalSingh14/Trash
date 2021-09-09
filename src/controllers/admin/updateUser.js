const express = require("express");

const User = require("../../models/user");

const router = express.Router();

router.patch("/admin/updateUser", async (req, res) => {
    try {
        const user = await User.findById(req.body._id);
        user = req.body;
        user.save();
        res.status(200).json({ success: true, result: user });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
