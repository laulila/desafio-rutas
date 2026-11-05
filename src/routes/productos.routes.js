import express from 'express';
import { obtenerProductoPorId, obtenerProductos,crearProductoController, eliminarProductoController} from '../controllers/productos.controller.js';
const router = express.Router();
router.get('/:id', obtenerProductoPorId);
router.get('/', obtenerProductos);
router.post('/create', crearProductoController);
router.delete('/:id', eliminarProductoController);

export default router;