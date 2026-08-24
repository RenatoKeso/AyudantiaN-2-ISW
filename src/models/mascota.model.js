//Arreglo en memoria

let mascotas = [
  { id: 1, nombre: "Firulais", especie: "Perro", edad: 3, adoptado: false },
  { id: 2, nombre: "Michi", especie: "Gato", edad: 2, adoptado: false }
];

let nextId = 3;

function obtenerTodas() {
  return mascotas;
}

function obtenerPorId(id) {
  return mascotas.find(m => m.id === id);
}

function crear({ nombre, especie, edad, adoptado }) {
  const nuevaMascota = {
    id: nextId++,
    nombre,
    especie,
    edad: edad ?? null,
    adoptado: adoptado ?? false
  };
  mascotas.push(nuevaMascota);
  return nuevaMascota;
}

function actualizar(id, cambios) {
  const mascota = obtenerPorId(id);
  if (!mascota) return null;

  const { nombre, especie, edad, adoptado } = cambios;
  if (nombre !== undefined) mascota.nombre = nombre;
  if (especie !== undefined) mascota.especie = especie;
  if (edad !== undefined) mascota.edad = edad;
  if (adoptado !== undefined) mascota.adoptado = adoptado;

  return mascota;
}
//Eliminar una mascota por id, si no existe retorna null, si existe la elimina y retorna la mascota eliminada
function eliminar(id) {
  const indice = mascotas.findIndex(m => m.id === id);
  if (indice === -1) return null;
  return mascotas.splice(indice, 1)[0];
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
