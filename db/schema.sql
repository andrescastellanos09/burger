-- Drops the burger_db if it already exists --
DROP DATABASE IF EXISTS burger_db;
-- Create a database called burger_db
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE Burgers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(25) NOT NULL,
    devoured BOOLEAN,

    PRIMARY KEY (id) 
);

