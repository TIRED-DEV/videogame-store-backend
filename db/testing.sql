INSERT INTO
  users (email, name, password)
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
  games (title, img, descr, price)
VALUES
  (
    'Elden Ring',
    'https://store-images.s-microsoft.com/image/apps.25322.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.d230176a-d7a2-4696-ad23-ff53a6e004df',
    'Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration',
    44.79
  ),
  (
    'Grand Theft Auto V',
    'https://store-images.s-microsoft.com/image/apps.8135.66515090704019777.7fa547c1-c211-4229-a4d3-3ceef762e0a4.0bb0ac0a-9d63-4d91-8e53-f2e39a040bcd',
    'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective',
    8.50
  ),
  (
    'Dead by Daylight',
    'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S4_1200x1600-f2a7ae8676457d052c1344ce717dfb7a',
    'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors',
    9.99
  ),
  (
    'Red Dead Redemption 2',
    'https://s1.gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-pc-juego-rockstar-cover.jpg',
    'After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee',
    23.99
  );
INSERT INTO
  cart
VALUES
  ('user1@test.com', '2022-1-1', 1, 23.99),
  ('user2@test.com', '2022-1-2', 0, 63.28),
  ('user3@test.com', '2022-1-3', 0, 33.98);
INSERT INTO
  cartGame
VALUES
  (1, 'user1@test.com', '2022-1-1'),
  (2, 'user1@test.com', '2022-1-1'),
  (3, 'user1@test.com', '2022-1-1'),
  (1, 'user2@test.com', '2022-1-2'),
  (2, 'user2@test.com', '2022-1-2');