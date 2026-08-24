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

## Pruebas rápidas (con curl)

Crear:
```bash
curl -X POST http://localhost:3000/mascotas -H "Content-Type: application/json" -d "{\"nombre\":\"Rex\",\"especie\":\"Perro\",\"edad\":1}"
```

Listar todas:
```bash
curl http://localhost:3000/mascotas
```

Ver una:
```bash
curl http://localhost:3000/mascotas/1
```

Actualizar:
```bash
curl -X PUT http://localhost:3000/mascotas/1 -H "Content-Type: application/json" -d "{\"adoptado\":true}"
```

Eliminar:
```bash
curl -X DELETE http://localhost:3000/mascotas/1
```

También puedes probar todo esto con Thunder Client en VS Code en lugar de curl.
