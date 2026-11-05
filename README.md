# API REST de Productos

API REST desarrollada con **Node.js, Express y Firebase Firestore** para administrar productos.

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Admin SDK
- Cloud Firestore
- CORS
- dotenv
- body-parser
- jsonwebtoken (instalado; autenticación JWT pendiente de implementar)

## Estructura del proyecto

```text
desafio-rutas/
├── private/
├── src/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── firebase.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta:

```bash
cd desafio-rutas
```

Instalar las dependencias:

```bash
npm install
```

## Configuración de Firebase

La API utiliza Firebase Admin SDK para conectarse a Cloud Firestore.

Para ejecutar el proyecto es necesario:

1. Crear un proyecto en Firebase.
2. Habilitar Cloud Firestore.
3. Generar una clave privada de cuenta de servicio.
4. Guardar el archivo de credenciales en la carpeta `private/` con el nombre `firebase-admin.json`.
5. Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
GOOGLE_APPLICATION_CREDENTIALS=./private/firebase-admin.json
```

**Importante:** las credenciales y los archivos `.env` no deben subirse a GitHub.

## Ejecución

Iniciar el servidor:

```bash
npm start
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Buscar un producto por ID |
| GET | `/api/products?categoria=calzado` | Filtrar productos por categoría |
| POST | `/api/products/create` | Crear un producto |
| DELETE | `/api/products/:id` | Eliminar un producto |

### Crear un producto

**POST** `/api/products/create`

Body (JSON):

```json
{
  "nombre": "Zapatillas",
  "precio": 45000,
  "categoria": "calzado"
}
```

### Buscar por categoría

**GET** `/api/products?categoria=calzado`

### Buscar por ID

**GET** `/api/products/1`

### Eliminar un producto

**DELETE** `/api/products/1`

## Códigos de respuesta HTTP

- `200`: solicitud exitosa.
- `201`: recurso creado correctamente.
- `400`: solicitud incorrecta o datos inválidos.
- `401`: falta autenticación o el token no es válido.
- `403`: acceso no autorizado.
- `404`: recurso o ruta no encontrada.
- `500`: error interno del servidor.

## Estado del proyecto

- [x] API REST con Express.
- [x] Conexión con Cloud Firestore.
- [x] Obtener todos los productos.
- [x] Buscar productos por ID.
- [x] Crear productos.
- [x] Eliminar productos.
- [x] Filtrar productos por categoría.
- [x] Validaciones y manejo de errores.
- [ ] Autenticación con JSON Web Token (JWT).
- [ ] Protección de rutas mediante middleware de autenticación.

## Autora

Proyecto desarrollado como trabajo final de Backend.