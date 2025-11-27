const numeros=[0,1,2,3,4]

// Si buscamos un valor que no existe nos dará: 
numeros[5] // (undefined)

// Reemplaza el value
numeros[1]=7 // [0,7,2,3,4]

// Recorriendo con forEach
let names=["Aitana", "Sara", "Valverdina", "Paula"]
names.forEach(name=>{console.log(name)})

// push, lo mandará al final
names.push("Rorro") // ["Aitana", "Sara", "Valverdina", "Paula", "Rorro"]

// unshift, lo mandará al inicio
names.unshift("Adèle") // ["Adèle", "Aitana", "Sara", "Valverdina", "Paula", "Rorro"]

// splice, (índice, elementos ha eliminar, value) y (índice, elemntos ha eliminar) y podemos usar estos elementos
names.splice(1,3,"Luis") // ["Adèle", "Luis", "Paula", "Rorro"]

// slice, eliminar lo que no está seleccionado [índice, final>
names=names.slice(0,3) // ["Adèle", "Luis", "Paula"]

// concat, agrega elementos al arr
names=names.concat("Darcy") // ["Adèle", "Luis", "Paula", "Darcy"]

// pop, elimina el último elemento y podemos usar ese elemento
names.pop() // ["Adèle", "Luis", "Paula"]

// shift, elimina el primer elemetno y podemos usar ese elemento
names.shift() // ["Luis", "Paula"]

// fill
names.fill("Oriana", 1,2) // ['Luis', 'Oriana'], reemplaza el elemento [1, 2> ("Paula") por "Oriana"
Array(9).fill("<3") // Creando un arr de "<3" de tamaño 9

// reverse, invierte el arr
names.reverse() // ['Oriana', 'Luis']

// sort, recibe una función callback recorre de 2 en 2
let nums=[3,4,9,3,1,2,3,9,6,5,8]
nums.sort((x,y)=>{return x-y}) // [1,2,3,3,3,4,5,6,8,9,9]

// sort, customizado siempre respetando {x>y (+), x<y (-), x=y (0)}
let categorias=["categoria1", "categoria3", "categoria1", "categoria2", "categoria3"]
categorias.sort((x,y)=>{
  if(x==="categoria3"){
    return 1
  }else if(x==="categoria1"){
    return -1
  }else if(x==="categoria2" && y==="categoria3"){
    return -1
  }else{
    return 1
  }
})

// map, recibe una función callback que recorre el arr
nums=nums.map((x)=>{return x*x}) // [1,4,9,9,9,16,25,36,64,81,81]

// map, con objetos (devuelve un arr de str)
let personas=[{name: "Eli"}, {name: "Cami"}, {name: "Mafer"}, {name: "Pao"}]
personas=personas.map((persona)=>{return persona.name.toUpperCase()}) // ['ELI','CAMI','MAFER','PAO']

// indexOf, nos da el índice del primer elemento encontrado desde el inicio y si distingue mayúsculas
let i1=personas.indexOf("Eli") // -1

// lastIndexOf, nos da el índice del primer elemento encontrado desde el final y si distingue mayúsculas
let i2=personas.lastIndexOf("MAFER") // 2

// includes, nos da el booleano si encuentra o no
let torf=personas.includes("CAMI") // true

// find, recibe una función callback que busca al elemento y si lo encuentra me lo devuelve, sino undefined
let personas2=[{name: "Aitana"}, {name: "María"}, {name: "Luna"}, {name: "Lydia"}]
// Con un arr
let persona=personas.find((persona)=>{return persona==="PAO"}) // PAO
// Con objetos
let persona2=personas2.find((persona)=>{return persona.name==="Luna"}) // {name: 'Luna'}

// findIndex, recibe una función callback que busca al elemento y si lo encuentra devuelve el índice, sino -1
// Con un arr
let i3=personas.findIndex((persona)=>{return persona==="cam"}) // -1
// Con objetos
let i4=personas2.findIndex((persona)=>{return persona.name==="Lydia"}) // 3

// some, recibe una función callback retorna true si alguna es true
let torf2=nums.some((x)=>{return x%2===0}) // true

// every, recibe una función callback retorna false si alguna es false
const torf3 = nums.every( x => x % 2 === 0) // false

// filter, recorre arr y devuelve un booleano, los elementos que sean true's se añadirán al arr que retorne
let pares=numeros.filter(x=>x%2===0)