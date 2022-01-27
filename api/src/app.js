import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
dotenv.config();

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { router as gamesRoutes } from '../routes/games.routes.js';
import { router as usersRoutes } from '../routes/users.routes.js';

app.use('/api/games', gamesRoutes);
app.use('/api/users', usersRoutes);

const port = process.env.API_PORT;
const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    process.env.DB_DATABASE = 'gameshopTest';
    console.log('listening on port ' + port);
  }
});

export default app;
export { server };
