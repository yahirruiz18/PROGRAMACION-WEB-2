const express = require('express'); 
const path = require('path'); 
const router = express.Router(); 


router.get('/', (req, res) => {
    res.redirect('/Bienvenida');
});


router.get('/Bienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


router.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname, 'quienes-somos.html')); 
});


router.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, 'conocenos.html')); 
});

module.exports = router; 
