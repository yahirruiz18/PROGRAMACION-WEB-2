-- Creación de BD
CREATE DATABASE IF NOT EXISTS crud;
USE crud;

-- Creación de tabla 'users'
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(70) NOT NULL,
    email VARCHAR(100) NOT NULL,
    universidad VARCHAR(100) NOT NULL,
    cuenta INT(9) NOT NULL,
    PRIMARY KEY (id)
);

CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '123456';

GRANT ALL PRIVILEGES ON crud.* TO 'root'@'localhost';



