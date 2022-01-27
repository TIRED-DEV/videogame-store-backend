INSERT INTO
  users
VALUES
  ('user1@test.com', 'User1', '1234'),
  ('user2@test.com''User2', '1234'),
  ('user3@test.com', 'User3', '1234');
INSERT INTO
  games (title)
VALUES
  ('Game1'),
  ('Game2'),
  ('Game3');
INSERT INTO
  cart
VALUES
  ('user1@test.com', '2022-1-1', 1),
  ('user2@test.com', '2022-1-2', 0),
  ('user3@test.com', '2022-1-3', 0);
INSERT INTO
  cartGame
VALUES
  (1, 'user1@test.com', '2022-1-1'),
  (2, 'user1@test.com', '2022-1-1'),
  (3, 'user1@test.com', '2022-1-1'),
  (1, 'user2@test.com', '2022-1-2'),
  (2, 'user2@test.com', '2022-1-2');