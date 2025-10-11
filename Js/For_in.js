// Con un objeto, se recorre la key 
let persona={name: "Oriana", age: 19, dni: "1893493"}
for(let key in persona){ // name, age, dni
  console.log(`${key}: ${persona[key]}`) // IMPORTANTE, key es un str
}

// Con un array, se recorre el índice
let names=["Mafer", "Lucía", "Camila", "Paula", "Carlos"]
for(let i in names){ // 0,1,2,3,4
  console.log(`${i}: ${names[i]}`) // IMPORTANTE, i es un str
}