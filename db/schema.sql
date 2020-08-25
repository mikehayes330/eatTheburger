/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS burgers_db;

/* Create database */
CREATE DATABASE burgers_db;
USE burgers_db;


/* Create table */

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured  BOOLEAN DEFAULT false, 
  PRIMARY KEY (id)
);





