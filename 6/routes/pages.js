const express = require('express');
const router = express.Router();
const path = require('path');

router.get(/^\/index[1-5].html$/, (req, res) => {
    res.sendFile(path.join(__dirname, `../public${req.url}`));
});

module.exports = router;