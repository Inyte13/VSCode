// Versión completa de reduce
// nums.reduce((acc,item,index,arr)=>{})

let nums=[0,1,2,3,4,5,6]

// Versión corta de reduce
let sumaTotal=nums.reduce((acc,item)=>{ // Siempre devuelve el acc
  return acc+item // Por cada iteración se modificara al acc sumandole el elemento actual y retornando a acc
},0) // Declaramos el valor inicial de acumulador (acc)
console.log(sumaTotal)

// Concatenando strs con reduce
let strs=["I","Love","Tú"]
let sumaStrs=strs.reduce((str,item)=>{return str+item},"")
console.log(sumaStrs)

// Calculando el promedio de edad con reduce
let objs=[
  {name:"Oriana", edad:21, smash:true},
  {name:"Fernanda", edad:25, smash:false}
]
let edadPromedio=objs.reduce((acc,item)=>{
  return acc+item.edad
},0)/objs.length
console.log(edadPromedio)

// Calculando el mayor de un arr con reduce
let mayor=nums.reduce((acc,item)=>{
  return Math.max(acc,item)
})
console.log(mayor)