// NO puedo recorrer los values o keys, sin especificar

// Con un array, se recorre los valores
let names=["Mafer", "Lucía", "Camila", "Paula", "Carlos"]
for(let name of names){ // "Mafer", "Lucía", "Camila", "Paula", "Carlos"
  console.log(name)
}

// Igual que un spread, saca cada c pero no lo convierte en arr
let name="Oriana"
for(let c of name){
  console.log(c)
}
