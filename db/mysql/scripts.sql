CREATE USER 'admin' @'%' IDENTIFIED WITH mysql_native_password BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin' @'%';
USE gameshop;
CREATE TABLE admins (
  email VARCHAR(255) NOT NULL,
  name VARCHAR(20) NULL,
  password VARCHAR(255) NULL,
  img VARCHAR(255) NULL
);
CREATE TABLE cart (
  user VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  sold BOOLEAN NULL,
  total DECIMAL(4, 2) NULL,
  PRIMARY KEY (user, date)
);
CREATE TABLE cartGame (
  game INT NOT NULL,
  user VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (game, user, date)
);
CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NULL,
  img VARCHAR(255) NULL,
  descr VARCHAR(255) NULL,
  price DECIMAL(4, 2) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE users (
  email VARCHAR(255) NOT NULL,
  name VARCHAR(20) NULL,
  password VARCHAR(255) NULL,
  img VARCHAR(255) NULL,
  PRIMARY KEY (email)
);
ALTER TABLE
  cart
ADD
  CONSTRAINT FK_users_TO_cart FOREIGN KEY (user) REFERENCES users (email);
ALTER TABLE
  cartGame
ADD
  CONSTRAINT FK_games_TO_cartGame FOREIGN KEY (game) REFERENCES games (id);
ALTER TABLE
  cartGame
ADD
  CONSTRAINT FK_cart_TO_cartGame FOREIGN KEY (user, date) REFERENCES cart (user, date);
ALTER TABLE
  admins
ADD
  CONSTRAINT FK_users_TO_admins FOREIGN KEY (email) REFERENCES users (email);
CREATE DATABASE gameshopTest;
USE gameshopTest;
CREATE TABLE admins (
    email VARCHAR(255) NOT NULL,
    name VARCHAR(20) NULL,
    password VARCHAR(255) NULL,
    img VARCHAR(255) NULL
  );
CREATE TABLE cart (
    user VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sold BOOLEAN NULL,
    total DECIMAL(4, 2) NULL,
    PRIMARY KEY (user, date)
  );
CREATE TABLE cartGame (
    game INT NOT NULL,
    user VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (game, user, date)
  );
CREATE TABLE games (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NULL,
    img VARCHAR(255) NULL,
    descr VARCHAR(255) NULL,
    price DECIMAL(4, 2) NULL,
    PRIMARY KEY (id)
  );
CREATE TABLE users (
    email VARCHAR(255) NOT NULL,
    name VARCHAR(20) NULL,
    password VARCHAR(255) NULL,
    img VARCHAR(255) NULL,
    PRIMARY KEY (email)
  );
ALTER TABLE
  cart
ADD
  CONSTRAINT FK_users_TO_cart FOREIGN KEY (user) REFERENCES users (email);
ALTER TABLE
  cartGame
ADD
  CONSTRAINT FK_games_TO_cartGame FOREIGN KEY (game) REFERENCES games (id);
ALTER TABLE
  cartGame
ADD
  CONSTRAINT FK_cart_TO_cartGame FOREIGN KEY (user, date) REFERENCES cart (user, date);
ALTER TABLE
  admins
ADD
  CONSTRAINT FK_users_TO_admins FOREIGN KEY (email) REFERENCES users (email);