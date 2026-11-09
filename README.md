# API REST de Productos — Desafío Final Backend

API REST desarrollada con **Node.js, Express y Firebase Firestore** para administrar un catálogo de productos. Incluye operaciones CRUD, filtrado por categoría y autenticación mediante JSON Web Token (JWT).

La API está desplegada en Vercel y utiliza Cloud Firestore como base de datos.

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Admin SDK
- Cloud Firestore
- JSON Web Token (JWT)
- CORS
- dotenv
- body-parser
- Vercel

## Estructura del proyecto

```text
desafio-rutas/
├── api/
│   └── index.js
├── private/
│   └── firebase-admin.json
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── productos.controller.js
│   ├── data/
│   │   └── productos.json
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── not-found.js
│   ├── models/
│   │   └── productos.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── productos.routes.js
│   ├── services/
│   │   ├── auth.service.js
│   │   └── productos.service.js
│   ├── firebase.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/laulila/desafio-rutas.git
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

Para ejecutar el proyecto localmente:

1. Crear un proyecto en Firebase.
2. Habilitar Cloud Firestore.
3. Generar una clave privada de cuenta de servicio.
4. Guardar el archivo de credenciales en la carpeta `private/` con el nombre `firebase-admin.json`.
5. Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
GOOGLE_APPLICATION_CREDENTIALS=./private/firebase-admin.json
```

**Importante:** las credenciales y los archivos `.env` no deben subirse a GitHub.

Para el despliegue en Vercel se utiliza la variable de entorno `FIREBASE_SERVICE_ACCOUNT_BASE64`, que contiene las credenciales de Firebase codificadas en Base64.

## Variables de entorno

Además de la configuración de Firebase, la aplicación necesita las siguientes variables:

```env
AUTH_USER=admin
AUTH_PASSWORD=tu_contraseña
JWT_SECRET=tu_clave_secreta
```

Los valores reales deben configurarse localmente en `.env` y, para producción, en las variables de entorno de Vercel.

No compartir ni publicar contraseñas, claves secretas o credenciales de Firebase.

## Ejecución local

Iniciar el servidor:

```bash
npm start
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

## Autenticación JWT

La API utiliza JSON Web Token para proteger las rutas de productos.

Antes de acceder a los endpoints protegidos, es necesario iniciar sesión.

### Iniciar sesión

**POST** `/auth/login`

Body (JSON):

```json
{
  "usuario": "admin",
  "password": "tu_contraseña"
}
```

La autenticación valida las credenciales configuradas en las variables de entorno y devuelve un token JWT.

Para acceder a las rutas protegidas, enviar el token en el encabezado:

```text
Authorization: Bearer TOKEN
```

El token tiene una duración de 24 horas.

### Protección de rutas

Las rutas de productos están protegidas mediante un middleware de autenticación que verifica la validez del token.

- `200`: solicitud autorizada y exitosa.
- `401`: token no proporcionado o inválido.

## Endpoints de productos

Todas las rutas de productos requieren autenticación mediante JWT.

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Buscar un producto por ID |
| GET | `/api/products?categoria=calzado` | Filtrar productos por categoría |
| POST | `/api/products/create` | Crear un producto |
| PUT | `/api/products/:id` | Actualizar un producto |
| DELETE | `/api/products/:id` | Eliminar un producto |

### Obtener todos los productos

**GET** `/api/products`

### Buscar un producto por ID

**GET** `/api/products/1`

### Filtrar productos por categoría

**GET** `/api/products?categoria=calzado`

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

La API valida los datos recibidos y asigna un identificador al nuevo producto.

### Actualizar un producto

**PUT** `/api/products/1`

Permite modificar los datos de un producto existente enviando los campos correspondientes en formato JSON.

### Eliminar un producto

**DELETE** `/api/products/1`

Elimina el producto indicado.

## Códigos de respuesta HTTP

- `200`: solicitud exitosa.
- `201`: recurso creado correctamente.
- `400`: solicitud incorrecta o datos inválidos.
- `401`: falta autenticación o el token no es válido.
- `404`: producto o ruta no encontrada.
- `500`: error interno del servidor.

## Despliegue

La API está desplegada en Vercel.

**URL de producción:**

https://desafio-rutas.vercel.app

**Endpoint de autenticación:**

`POST https://desafio-rutas.vercel.app/auth/login`

**Endpoint de productos:**

`https://desafio-rutas.vercel.app/api/products`

Para utilizar los endpoints de productos en producción, primero es necesario obtener un token mediante el inicio de sesión.

## Estado del proyecto

- [x] API REST desarrollada con Express.
- [x] Conexión con Cloud Firestore.
- [x] Obtener todos los productos.
- [x] Buscar productos por ID.
- [x] Crear productos.
- [x] Actualizar productos.
- [x] Eliminar productos.
- [x] Filtrar productos por categoría.
- [x] Validaciones y manejo de errores.
- [x] Autenticación mediante JWT.
- [x] Protección de rutas mediante middleware.
- [x] Despliegue en Vercel.
- [x] Configuración de variables de entorno para producción.

## Autora

Proyecto desarrollado por Laura Pereyra como trabajo final del curso de Backend.