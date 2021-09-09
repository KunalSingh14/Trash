const express = require("express");

const City = require("../../models/city");

const router = express.Router();

router.post("/admin/uploadCity", async (req, res) => {
    try {
        const city = new City(req.body);
        city.save();
        res.status(200).json({ success: true, result: city });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
