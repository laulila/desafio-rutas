import express from 'express';

import {
  obtenerProductoPorId,
  obtenerProductos,
  crearProductoController,
  actualizarProductoController,
  eliminarProductoController
} from '../controllers/productos.controller.js';

import { verificarToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Protegemos todas las rutas de productos
router.use(verificarToken);

router.get('/:id', obtenerProductoPorId);
router.get('/', obtenerProductos);
router.post('/create', crearProductoController);
router.put('/:id', actualizarProductoController);
router.delete('/:id', eliminarProductoController);

export default router;