const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../cards.json'));
});

router.use(express.static(path.join(__dirname, "../public")))

router.get('/:carNum', (req, res) => {
    if (req.params.carNum > 0 && req.params.carNum < 7)
        res.sendFile(path.join(__dirname, `../public/card${req.params.carNum}.html`));
    else
        res.send('404 page not found')
});

module.exports = router;