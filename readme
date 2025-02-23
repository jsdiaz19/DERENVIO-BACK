
# 🛒 Derenvio Challenge - Backend

Este proyecto es parte de la prueba técnica para evaluar habilidades en **Node.js, Express y MongoDB**.  
El backend proporciona una API que interactúa con una base de datos en MongoDB para administrar **productos** y **precios especiales** asociados a usuarios.  

## 🚀 **Tecnologías utilizadas**
- **Node.js** con **Express** como framework backend.
- **MongoDB** como base de datos.
- **Mongoose** para modelar la base de datos.
- **CORS** para permitir peticiones desde el frontend.
- **dotenv** para variables de entorno.
- **Nodemon** para desarrollo en tiempo real.

---

## 📌 **Estructura del proyecto**
```bash
DERENVIO-BACK/
│── controllers/       # Controladores de la lógica de negocio
│── models/            # Modelos de MongoDB con Mongoose
│── routes/            # Rutas de la API
│── config/            # Configuración de conexión con MongoDB
│── .env.example       # Variables de entorno (renombrar a .env)
│── index.js           # Archivo principal del servidor
│── package.json       # Dependencias y configuración de NPM
```

## Instalacion

1. Clona el repositorio
```bash
 git clone https://github.com/jsdiaz19/DERENVIO-BACK.git
```
2. Navega a la carpeta del proyecto:
```bash
 cd api
```
3. Instala las dependencias:
```bash
 npm install
```
4. Ejecuta el proyecto:
```bash
 npm run dev
```


## 🎯 **Justificación de elecciones técnicas**


### 🔹 **JavaScript vs TypeScript**

Se utilizó **JavaScript** en lugar de TypeScript por simplicidad y rapidez en la implementación.  
Sin embargo, se recomienda migrar a TypeScript para una mejor tipificación y mantenimiento.

### 🔹 **Mongoose**

Se eligió **Mongoose** para modelar la base de datos porque facilita la manipulación de datos en MongoDB.

### 🔹 **Express.js**

Express fue seleccionado por su **simplicidad y flexibilidad** al crear APIs RESTful.



## 📡 **Endpoints disponibles**

### 🔹 **Usuarios**
| Método | Endpoint        | Descripción |
|--------|----------------|-------------|
| `GET`  | `/api/usuarios` | Obtiene todos los usuarios |
| `POST` | `/api/usuarios` | Crea un nuevo usuario |
| `GET`  | `/api/usuarios/:id` | Obtiene un usuario por ID |
| `PUT`  | `/api/usuarios/:id` | Actualiza un usuario por ID |
| `DELETE` | `/api/usuarios/:id` | Elimina un usuario por ID |

### 🔹 **Productos**
| Método | Endpoint        | Descripción |
|--------|----------------|-------------|
| `GET`  | `/api/productos` | Obtiene todos los productos |
| `POST` | `/api/productos` | Crea un nuevo producto |
| `GET`  | `/api/productos/:id` | Obtiene un producto por ID |
| `PUT`  | `/api/productos/:id` | Actualiza un producto por ID |
| `DELETE` | `/api/productos/:id` | Elimina un producto por ID |

### 🔹 **Precios Especiales**
| Método | Endpoint                | Descripción |
|--------|--------------------------|-------------|
| `GET`  | `/api/precios`           | Obtiene todos los precios especiales |
| `POST` | `/api/precios`           | Crea un nuevo precio especial |
| `GET`  | `/api/precios/:id`       | Obtiene un precio especial por ID |
| `PUT`  | `/api/precios/:id`       | Actualiza un precio especial por ID |
| `DELETE` | `/api/precios/:id`     | Elimina un precio especial por ID |

### 🔹 **Usuarios con Productos y Precios Especiales**
| Método | Endpoint                          | Descripción |
|--------|------------------------------------|-------------|
| `GET`  | `/api/usuarios/productos`         | Obtiene todos los usuarios con todos los productos y precios (normales o especiales) |


