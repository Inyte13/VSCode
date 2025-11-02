// f strings = template str
let name="Oriana"
console.log(`${name} es perfecta`)

// Str multilinea
let str=`Un str
multilinea`

// Contatenar str
let str1="Gaviotas"
let str2="Velero"

// +
console.log(str1+str2)

// template str
console.log(`${str1}${str2}`)

// concat
console.log(str1.concat(str2)) // Más eficiente al concatenar grandes cantidades 

// join
const arr=[str1,str2]
console.log(arr.join("")) // join usa por defecto , (Gaviotas,Velero) pero lo podemos cambiar a ("")

// Usando split para editar un str y unirlos con join
let str3="Si estás leyendo esto espero que estés bien"
let arr3=str3.split(" ")
arr3[7]="mal" // Editando la palabra 7
str3=arr3.join(" ")

// substring
str3.substring(5,3) // [3,5>, si a > b, los intercambia automáticamente.

// slice
str3.slice(undefined,8) // [0,8>, cuando es undefined se usa el por defecto [0,str3.length>
str3.slice(-3) // [-3,-1], si acepta negativos
str3.slice(3) // [4,str3.length>, todo menos los primeros 3 valores

// trim
let str4="  Texto de ejemplo   "
str4.trim() // "Texto de ejemplo", elimina espacios en blanco
str4.trimStart() // "Texto de ejemplo   ", elimina espacios solo al inicio
str4.trimEnd() // "  Texto de ejemplo", elimina espacios solo al final

// pad
let num="5"
num.padStart(4,"0") // "0005", autocompleta con "0" por el inicio hasta que su length sea 4 
num.padEnd(4,"0") // "0005", autocompleta con "0" por el final hasta que su length seaz 4

// charAt
str4.charAt(2) // "T", devuelve el c en el índice 2

// includes, es sensible a UpperCase
str4.includes("ejempl") // "true", ejempl es un substr de str4






