const express = require('express');
const router = express.Router();
const path = require('path');

// router.get(/^\/index[1-5].html$/, (req, res) => {
//     res.sendFile(path.join(__dirname, `../public${req.url}`));
// });

router.get('/:pageNum', (req, res) => {
    if (req.params.pageNum > 0 && req.params.pageNum < 6)
        res.sendFile(path.join(__dirname, `../public/index${req.params.pageNum}.html`));
    else
        res.send('404 page not found')
});

module.exports = router;