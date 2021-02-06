const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/getAllUsers', (req, res) => {
    res.sendFile(path.join(__dirname, '../users.json'))
});


module.exports = router;