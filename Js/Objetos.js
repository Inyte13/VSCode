// Objetos = Diccionarios
const persona={nombre: "Paula", apellido: "García", edad: 19, smash: true, direccion:{calle:14, avenida:6, codigoPostal:"00404"}}
console.log(persona) // ({ nombre: 'Paula', apellido: 'García', edad: 19, smash: true })
persona.edad=21
persona.edad // (21)
persona.direccion.avenida // Se pueden anidar (6)

Object.keys(persona) // ([ 'nombre', 'apellido', 'edad', 'smash', 'direccion' ]) las claves

Object.values(persona) /* ([
  'Paula',
  'García',
  21,
  true,
  { calle: 14, avenida: 6, codigoPostal: '00404' }
]) los valores */

Object.entries(persona) /* ([
  [ 'nombre', 'Paula' ],
  [ 'apellido', 'García' ],
  [ 'edad', 21 ],
  [ 'smash', true ],
  [ 'direccion', { calle: 14, avenida: 6, codigoPostal: '00404' } ]
]) las entradas separadas en arrays */

const persona2={name: "Mafer", age: 19, smash: false}
const extra={smash: true, height: 1.55}
Object.assign(persona2, extra) // Sin {}, modifica el original o sea persona2
console.log(persona2)
console.log(Object.assign({}, persona2, extra))