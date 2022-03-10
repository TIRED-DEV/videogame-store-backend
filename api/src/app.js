import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const corsOptions = {
  origin: '*',
  credentials: true,
};

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

import { router as gamesRoutes } from './routes/games.routes.js';
import { router as cartsRoutes } from './routes/carts.routes.js';
import { router as ordersRoutes } from './routes/orders.routes.js';
import { router as usersRoutes } from './routes/users.routes.js';
import { router as stealRoutes } from './routes/steal.routes.js';
import { router as filesRoutes } from './routes/files.routes.js';

app.use('/api/games', gamesRoutes);
app.use('/api/cart', cartsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/steal', stealRoutes);
app.use('/api/files', filesRoutes);

const port = process.env.API_PORT;
const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('listening on port ' + port);
  }
});

export default app;
export { server };
