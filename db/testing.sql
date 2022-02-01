INSERT INTO
  users
VALUES
  (
    'user1@test.com',
    'User1',
    '$2a$10$TWizKwq9L7O3yQk5cFQmLO80QQu.p2l/2CgmkzrtcWQYLBk/bwL.G'
  ),
  (
    'user2@test.com',
    'User2',
    '$2a$10$TWizKwq9L7O3yQk5cFQmLO80QQu.p2l/2CgmkzrtcWQYLBk/bwL.G'
  ),
  (
    'user3@test.com',
    'User3',
    '$2a$10$TWizKwq9L7O3yQk5cFQmLO80QQu.p2l/2CgmkzrtcWQYLBk/bwL.G'
  );
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