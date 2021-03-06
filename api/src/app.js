import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
dotenv.config();

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.API_PORT;
if (process.env.NODE_ENV != 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

export default app;
