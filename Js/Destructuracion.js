// Destructuración de arr
const numeros=[0,1,2,3,4]

// A cada valor del arr, le asignamos una variable
let[,uno,dos,,cuatro]=numeros // uno=1, dos=2, cuatro=4

// Destructuración de Objetos
const usuario={name: "Oriana", age: 19, smash: true}

// Con los objetos necesariamente deben tener el mismo nombre que la key
let{name,age,smash}=usuario // name="Oriana", age=19, smash=true  

// Si queremos que tengan otro nombre, tenemos que especificar
let{name: nombre,age: edad, smash: leDoy}=usuario // nombre="Oriana", edad=19, leDoy=true