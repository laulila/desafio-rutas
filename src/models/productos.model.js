
import { db } from '../firebase.js';

const coleccionProductos = db.collection('productos');

async function obtenerTodos() {
  const snapshot = await coleccionProductos.get();

  return snapshot.docs.map(doc => ({
    ...doc.data(),
    firestoreId: doc.id
  }));
}

async function buscarPorId(id) {
  const snapshot = await coleccionProductos
    .where('id', '==', Number(id))
    .limit(1)
    .get();

  if (snapshot.empty) {
    return undefined;
  }

  const doc = snapshot.docs[0];

  return {
    ...doc.data(),
    firestoreId: doc.id
  };
}

async function agregarProducto(producto) {
  const referencia = await coleccionProductos.add(producto);

  return {
    ...producto,
    firestoreId: referencia.id
  };
}


  async function eliminarProducto(firestoreId) {
    await coleccionProductos.doc(firestoreId).delete();
}
  
export { obtenerTodos, buscarPorId, agregarProducto, eliminarProducto };
