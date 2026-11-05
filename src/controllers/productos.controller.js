
import {
  calcularDescuento,
  buscarProductoPorId,
  obtenerTodosLosProductos,
  crearProducto,
  eliminarProductoPorId
} from '../services/productos.service.js';

async function obtenerProductoPorId(req, res) {
  const id = req.params.id;
  const producto = await buscarProductoPorId(id);

  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  const precioConDescuento = calcularDescuento(producto.precio);

  res.json({
    id: producto.id,
    nombre: producto.nombre,
    precioOriginal: producto.precio,
    precioConDescuento
  });
}


async function obtenerProductos(req, res) {
  try {
    const productos = await obtenerTodosLosProductos();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

async function crearProductoController(req, res) {
  const nuevoProducto = req.body;
  const productoCreado = await crearProducto(nuevoProducto);

  res.status(201).json(productoCreado);
}
async function eliminarProductoController(req, res) {
  try {
    const id = req.params.id;

    const producto = await eliminarProductoPorId(id);

    if (!producto) {
      return res.status(404).json({
        message: 'Producto no encontrado'
      });
    }

    res.json({
      message: 'Producto eliminado correctamente',
      producto
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}
export {
  obtenerProductoPorId,
  obtenerProductos,
  crearProductoController,
  eliminarProductoController
};
