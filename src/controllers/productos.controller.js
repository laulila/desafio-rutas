
import {
  calcularDescuento,
  buscarProductoPorId,
  buscarPorCategoria,
  obtenerTodosLosProductos,
  crearProducto,
  actualizarProductoPorId,
  eliminarProductoPorId
} from '../services/productos.service.js';

async function obtenerProductoPorId(req, res) {
  try {
    const id = req.params.id;
    const producto = await buscarProductoPorId(id);

    if (!producto) {
      return res.status(404).json({
        message: 'Producto no encontrado'
      });
    }

    const precioConDescuento = calcularDescuento(producto.precio);

    return res.json({
      id: producto.id,
      nombre: producto.nombre,
      precioOriginal: producto.precio,
      precioConDescuento
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

async function obtenerProductos(req, res) {
  try {
    const categoria = req.query.categoria;

    if (categoria) {
      const productos = await buscarPorCategoria(categoria);
      return res.json(productos);
    }

    const productos = await obtenerTodosLosProductos();
    return res.json(productos);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

async function crearProductoController(req, res) {
  try {
    const nuevoProducto = req.body;

    if (
      !nuevoProducto.nombre ||
      typeof nuevoProducto.precio !== 'number' ||
      nuevoProducto.precio <= 0
    ) {
      return res.status(400).json({
        message: 'Nombre y precio válido son obligatorios'
      });
    }

    const productoCreado = await crearProducto(nuevoProducto);

    return res.status(201).json(productoCreado);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

async function actualizarProductoController(req, res) {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;

    if (
      !datosActualizados ||
      typeof datosActualizados !== 'object' ||
      Array.isArray(datosActualizados) ||
      Object.keys(datosActualizados).length === 0
    ) {
      return res.status(400).json({
        message: 'Debe enviar datos para actualizar'
      });
    }

    if (
      datosActualizados.nombre !== undefined &&
      (typeof datosActualizados.nombre !== 'string' ||
        !datosActualizados.nombre.trim())
    ) {
      return res.status(400).json({
        message: 'El nombre debe ser un texto válido'
      });
    }

    if (
      datosActualizados.precio !== undefined &&
      (typeof datosActualizados.precio !== 'number' ||
        datosActualizados.precio <= 0)
    ) {
      return res.status(400).json({
        message: 'El precio debe ser un número mayor que cero'
      });
    }

    if (
      datosActualizados.categoria !== undefined &&
      (typeof datosActualizados.categoria !== 'string' ||
        !datosActualizados.categoria.trim())
    ) {
      return res.status(400).json({
        message: 'La categoría debe ser un texto válido'
      });
    }

    const productoActualizado = await actualizarProductoPorId(
      id,
      datosActualizados
    );

    if (!productoActualizado) {
      return res.status(404).json({
        message: 'Producto no encontrado'
      });
    }

    return res.status(200).json(productoActualizado);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
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

    return res.json({
      message: 'Producto eliminado correctamente',
      producto
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
}

export {
  obtenerProductoPorId,
  obtenerProductos,
  crearProductoController,
  actualizarProductoController,
  eliminarProductoController
};
