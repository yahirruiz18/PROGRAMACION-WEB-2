const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const pageRutes = require('./routes/pages');

const app = express();

const port = 2345;

app.use('/', pageRutes);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Conexión a la BD
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crud',
    port: '3306'
});

db.connect(err => {
    if(err){
        console.log(`No se pudo realizar la conexión a la Base de Datos`);
    } else{
        console.log(`Conectado exitosamente a la Base de Datos crud`);
    }
});

// Inicia servidor
app.listen(port,()=>{
    console.log(`Conexión lograda desde http://localhost:${port}`);
});

// Mostrar tabla de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if(err){
            console.error(`Error al recuperar los datos. Código de error: ${err}`);
            res.send('Error al recuperar los datos');
        } else{
            res.render('index', {users: results}); 
        }
    });
});

// Agregar un usuario
app.post('/add', (req, res) => {
    const { name, email, universidad, cuenta } = req.body;

    // Validamos que la cuenta tenga 9 dígitos
    if (!/^\d{9}$/.test(cuenta)) {
        return res.send('El campo "Cuenta" debe contener 9 digitos.');
    }

    // Insertamos un nuevo usuario en la BD
    const query = 'INSERT INTO users (name, email, universidad, cuenta) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, universidad, cuenta], (err) => {
        if (err) {
            console.error(`Error al insertar datos en la tabla de usuarios. Código de error: ${err}`);
            res.send(`Error al insertar datos en la tabla de usuarios.`);
        } else {
            res.redirect('/'); // Redirigimos al usuario a la página principal
        }
    });
});

// Mostramos el formulario de la edición de un usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?'; // Buscamos al usuario con el ID especificado
    db.query(query, [id], (err, results) => {
        if(err){
            console.error('Error en la BD');
            res.send("Error en la BD");
        } else{
            res.render('edit', {users: results[0]}); // Mostramos el formulario con los datos del usuario
        }
    });
});

// Editar datos de usuario
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, universidad, cuenta } = req.body; 

    // Validamos que la cuenta tenga 9 dígitos
    if (!/^\d{9}$/.test(cuenta)) {
        return res.send('El campo "Cuenta" debe contener 9 digitos.');
    }

    // Actualizamos los datos del usuario en la BD
    const query = 'UPDATE users SET name = ?, email = ?, universidad = ?, cuenta = ? WHERE id = ?';
    db.query(query, [name, email, universidad, cuenta, id], (err, results) => {
        if(err){
            console.error('Error en la BD');
            res.send("Error en la BD");
        } else{
            res.redirect('/');
        }
    });
});

// Eliminar un usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if(err){
            console.error('Error al Eliminar');
            res.send("Error al Eliminar");
        } else {
            res.redirect('/'); // Redirigimos después de la eliminación
        }
    });
});
