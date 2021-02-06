const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const users = require("./../users");

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/getUser', (req, res) => {
    let user = users.find(item => item.userName == req.body.userName)
    if (user != undefined)
        res.status(200).send(user)
    else
        res.status(406).send("user doesn't exist")
});

module.exports = router;