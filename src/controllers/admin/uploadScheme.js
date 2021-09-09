const express = require("express");

const Scheme = require("../../models/scheme");

const router = express.Router();

router.post("/admin/uploadScheme", async (req, res) => {
    try {
        const scheme = new Scheme(req.body);
        scheme.save();
        res.status(200).json({ success: true, result: scheme });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, error: e });
    }
});

module.exports = router;
