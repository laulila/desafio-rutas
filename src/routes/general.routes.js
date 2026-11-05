import express from 'express';

const router = express.Router();
router.get('/ping', (req, res) => {
  res.send('pong');
});
router.get('/buscar', (req, res) => {
  const categoria = req.query.categoria;
  res.send(`La categoría buscada es ${categoria}`);
});
router.get('/ofertas', (req, res) => {
  const precioMaximo = req.query.precio;
  res.send(`Buscando productos con precio máximo de ${precioMaximo}`);
});

export default router;