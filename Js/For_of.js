// Con un objeto (si se podía xd)
let persona={name: "Oriana", age: 19, dni: "1893493"}
for(let value in persona){ // Recorre la key
  console.log(value)
}

// Con un array
let names=["Mafer", "Lucía", "Camila", "Paula", "Carlos"]
for(let name of names){
  console.log(name)
}
// Igual que un Spread
let name="Oriana"
for(let c of name){
  console.log(c)
}
