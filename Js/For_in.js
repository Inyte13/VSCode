// Con un objeto
let persona={name: "Oriana", age: 19, dni: "1893493"}
for(let key in persona){ // Recorre la key
  console.log(`${key}: ${persona[key]}`)
}

// Con un array
let names=["Mafer", "Lucía", "Camila", "Paula", "Carlos"]
for(let i in names){
  console.log(`${i}: ${names[i]}`)
}