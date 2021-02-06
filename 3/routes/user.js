const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(req.url)
});

router.get('/contact', (req, res) => {
    res.send(req.url)
});

router.get('/login', (req, res) => {
    res.send(req.url)
});

router.get('/about', (req, res) => {
    res.send(req.url)
});

router.get('/admin', (req, res) => {
    res.send(req.url)
});



module.exports = router;