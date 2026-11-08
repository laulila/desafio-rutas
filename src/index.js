
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productosRouter from './routes/productos.routes.js';
import authRouter from './routes/auth.routes.js';
import notFound from './middlewares/not-found.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productosRouter);
app.use('/auth', authRouter);

app.use(notFound);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;