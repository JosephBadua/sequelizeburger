DROP DATABASE IF EXISTS seq_burgers_db;
CREATE DATABASE seq_burgers_db;

USE seq_burgers_db;

CREATE TABLE burgers (
    id INTEGER(0) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;