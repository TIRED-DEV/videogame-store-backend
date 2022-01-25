CREATE USER 'admin' @'%' IDENTIFIED WITH mysql_native_password BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin' @'%';
USE gameshop;
CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(40) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE saleGame (
  game INT NOT NULL,
  user VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  PRIMARY KEY (game, user, date)
);
CREATE TABLE sales (
  user VARCHAR(255) NOT NULL,
  date DATETIME NOT NULL,
  sold BOOLEAN NULL,
  PRIMARY KEY (user, date)
);
CREATE TABLE users (
  email VARCHAR(255) NOT NULL,
  name VARCHAR(20) NULL,
  password Varchar(255) NULL,
  PRIMARY KEY (email)
);
ALTER TABLE
  sales
ADD
  CONSTRAINT FK_users_TO_sales FOREIGN KEY (user) REFERENCES users (email);
ALTER TABLE
  saleGame
ADD
  CONSTRAINT FK_games_TO_saleGame FOREIGN KEY (game) REFERENCES games (id);
ALTER TABLE
  saleGame
ADD
  CONSTRAINT FK_sales_TO_saleGame FOREIGN KEY (user, date) REFERENCES sales (user, date);