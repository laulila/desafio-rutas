import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.js';
import productosRouter from './routes/productos.routes.js';
import generalRouter from './routes/general.routes.js';
import notFound from './middlewares/not-found.js';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(logger);
app.use(generalRouter);
app.use('/api/products', productosRouter);
app.use(notFound);
const PORT = 3000;










app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});