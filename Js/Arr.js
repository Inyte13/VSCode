// arr
const numeros=[0,1,2,3,4]

// Si buscamos un valor que no existe nos dará: 
numeros[5] // (undefined)

// Reemplaza el value
numeros[1]=7 // [0,7,2,3,4]

// Podemos crear arr con diferentes tipos de variables
const arregloMixto=["Holi", 19, true, null, {fotolove: "Sara"}]

// Recorriendo con forEach
let names=["Aitana", "Sara", "Valverdina", "Paola"]
names.forEach(name=>{console.log(name)})

// push, lo mandará al final
names.push("Rorro") // ["Aitana", "Sara", "Valverdina", "Paola", "Rorro"]

// unshift, lo mandará al inicio
names.unshift("Adèle") // ["Adèle", "Aitana", "Sara", "Valverdina", "Paola", "Rorro"]

// splice, (índice, elementos ha eliminar, value) y (índice, elemntos ha eliminar) y podemos usar estos elementos
names.splice(1,3,"Luis") // ["Adèle", "Luis", "Paola", "Rorro"]

// slice, eliminar lo que no está seleccionado [índice, final>
names=names.slice(0,3) // ["Adèle", "Luis", "Paola"]

// concat, agrega elementos al arr
names=names.concat("Darcy") // ["Adèle", "Luis", "Paola", "Darcy"]

// pop, elimina el último elemento y podemos usar ese elemento
names.pop() // ["Adèle", "Luis", "Paola"]

// shift, elimina el primer elemetno y podemos usar ese elemento
names.shift() // ["Luis", "Paola"]

// fill, reemplaza elementos varias veces si se quiere [índice, final>
names.fill("Oriana", 1,2) // ['Luis', 'Oriana']

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
let torf3=nums.every((x=>{return x%2===0})) // false

// reduce, recibe una función callback donde usa de 2 en 2
let suma=nums.reduce((x,y)=>{return x+y},0) // x=0, y=nums[0]

