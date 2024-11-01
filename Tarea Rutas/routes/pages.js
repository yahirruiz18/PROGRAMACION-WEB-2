const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

router.get('/generadorQR', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'generadorQR.html'));
});

module.exports = router;
