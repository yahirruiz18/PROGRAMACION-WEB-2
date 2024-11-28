const express = require("express");
const path = require("path");
const router = express.Router(); 

router.get('/edit', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'edit.ejs'));
});

router.get('/agregar', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'add.ejs'));
});

router.get('/estilos', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilos.css'));
});

router.get('/estilosadd', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilosadd.css'));
});

router.get('/estilosedit', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','estilosedit.css'));
});

module.exports = router;


