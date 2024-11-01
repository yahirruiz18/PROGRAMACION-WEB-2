const express = require("express");
const pageRoutes = require("./routes/pages");

const app = express();
const PORT = 4050;

app.use(express.static('public'));

app.use('/', pageRoutes);

app.get('/', (req, res) => {
    res.redirect('/index');
});

app.listen(PORT, () => {
    console.log(`Servidor conectado desde http://localhost:${PORT}`);
});