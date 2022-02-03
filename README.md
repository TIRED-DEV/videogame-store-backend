# API Videogame Shop

_Web application that provides endpoints to manage a video game store and its users_

## Starting 🚀

_The project is still under development so only the develop version can be executed._

## Pre-requisites 📋

_To get started, you must have **Docker** installed in a version equal or higher than 3.3 and also have **NodeJS.**_

## Installation 🔧

_From the **~/** you must run the command **docker-compose up -d** to deploy the databases, a phpMyAdmin is automatically added, if you wish you can remove it._

_Command:_ `$ docker-compose up -d`

_Go to the **~./api** directory and run the node_modules install command and start the application in development mode._

_Command:_ `$ npm install `

_Command:_ `$ npm run dev `

## API 📍

| Endpoint              | HTTP   | Description                     |
| --------------------- | ------ | ------------------------------- |
| `/api/users`          | POST   | Signin an user                  |
| `/api/users/register` | POST   | Signup an user                  |
| `/api/games`          | GET    | Obtain all games                |
| `/api/cart`           | GET    | Obtain an user's cart           |
| `/api/cart`           | POST   | Create a new user's cart        |
| `/api/cart`           | DELETE | Remove a game from the cart     |
| `/api/cart/add`       | POST   | Add a game in the cart          |
| `/api/orders`         | GET    | Obtain all sales from user      |
| `/api/orders`         | PUT    | Update cart status to purchased |
| `/api/steal`          | GET    | Stealing the other team's games |

## Built with 🛠️

_Tools & technologies used_

- [NodeJS](https://nodejs.org/es/docs/) -Execution environment
- [npm](https://docs.npmjs.com/) - Dependency manager
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language
- [Docker](https://docs.docker.com/) - Application deployment
- [MySQL](https://dev.mysql.com/doc/) - Relational database

## Authors ✒️

_Mention should be made to all those who helped to build the project from the beginning._

- **Cristina Izquierdo** - Programmer\_ - [CristinaIzquierdo2020](https://github.com/CristinaIzquierdo2020)
- **Gabriel Sánchez** - Programmer\_ - [gabysanchez](https://github.com/gabysanchez)
