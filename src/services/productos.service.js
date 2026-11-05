
import {
  obtenerTodos,
  buscarPorId,
  agregarProducto,
  eliminarProducto
} from '../models/productos.model.js';

function calcularDescuento(precio) {
  return precio * 0.8;
}

async function buscarProductoPorId(id) {
  return await buscarPorId(id);
}

async function obtenerTodosLosProductos() {
  return await obtenerTodos();
}

async function crearProducto(producto) {
  const productos = await obtenerTodos();

  const siguienteId = productos.reduce(
    (mayorId, item) => Math.max(mayorId, Number(item.id) || 0),
    0
  ) + 1;

  const nuevoProducto = {
    ...producto,
    id: siguienteId
  };


  return await agregarProducto(nuevoProducto);
}
async function eliminarProductoPorId(id) {
  const producto = await buscarPorId(id);

  if (!producto) {
    return undefined;
  }

  await eliminarProducto(producto.firestoreId);

  return producto;
}

export {
  calcularDescuento,
  buscarProductoPorId,
  obtenerTodosLosProductos,
  crearProducto,
  eliminarProductoPorId
};
