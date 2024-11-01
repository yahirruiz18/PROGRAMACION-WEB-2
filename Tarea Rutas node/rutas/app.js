const express = require("express"); 
const path = require("path");
const app = express(); 
const port = 3012; 
const routes = require("./routes/server"); 


app.use(express.static(path.join(__dirname, 'routes')));

app.use("/", routes); 

app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});
