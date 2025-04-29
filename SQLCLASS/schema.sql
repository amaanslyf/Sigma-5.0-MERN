USE delta_app;
SHOW TABLES;
CREATE TABLE user (
    id VARCHAR (50) PRIMARY KEY,
    username VARCHAR (50) UNIQUE,
    password VARCHAR (50) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL
    
);