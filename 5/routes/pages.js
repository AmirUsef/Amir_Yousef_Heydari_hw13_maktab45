const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/index1.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index1.html'))
});

router.get('/index2.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index2.html'))
});

router.get('/index3.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index3.html'))
});

router.get('/index4.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index4.html'))
});

router.get('/index5.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index5.html'))
});

module.exports = router;