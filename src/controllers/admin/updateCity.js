const express = require("express");

const City = require("../../models/city");

const router = express.Router();

router.patch("/admin/updateCity", async (req, res) => {
    try {
        const city = await City.findById(req.body._id);
        city = req.body;
        city.save();
        res.status(200).json({ success: true, result: city });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
