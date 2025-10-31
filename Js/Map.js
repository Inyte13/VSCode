// Crear un Map vacío
let personas=new Map();

personas.set("nombre", "Oriana");
personas.set("edad", 19);
personas.set("smash", true);

console.log(personas.get("nombre")); // Oriana

// Verificar si existe una clave
console.log(personas.has("smash")); // true

// Eliminar una clave
personas.delete("smash");

// Recorrer el Map
for (let [key, value] of personas) {
  console.log(key, value);
}

// Tamaño del Map
console.log(personas.size);

// Borrar todo
// personas.clear();
console.log(personas)
