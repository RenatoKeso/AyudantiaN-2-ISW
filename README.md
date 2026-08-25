# CRUD de Adopción de Mascotas (Express + memoria)

## Estructura del proyecto

```
mascotas-crud/
├── server.js                    # Punto de entrada, levanta el servidor
├── package.json
└── src/
    ├── app.js                   # Configuración de Express (middlewares, rutas base)
    ├── models/
    │   └── mascota.model.js     # "Base de datos" en memoria + funciones CRUD sobre el arreglo
    ├── controllers/
    │   └── mascota.controller.js# Lógica de cada endpoint (recibe req/res)
    └── routes/
        └── mascota.routes.js    # Define los verbos HTTP y los conecta al controlador
```

## Instalación
```bash
npm install
```

## Ejecutar
```bash
npm start
```
El servidor queda en `http://localhost:3000`.

## Endpoints

| Operación | Verbo | Endpoint |
|---|---|---|
| Crear mascota | POST | /mascotas |
| Ver todas | GET | /mascotas |
| Ver una | GET | /mascotas/:id |
| Actualizar | PUT | /mascotas/:id |
| Eliminar | DELETE | /mascotas/:id |

