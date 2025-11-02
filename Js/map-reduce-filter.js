// Siempre tienen que retornar un valor distinto al original

// map
const nums=[0,1,2,3,4,5,6]
//nums.map((item, posicion)=>{})
let doble=nums.map(num=>num*2)
  
// filter
let menores4=nums.filter(num=>num<4)
// nums.filter((item, posicion)=>{})

// reduce
let sumar=nums.reduce((acc, num)=>{acc+num})
// nums.reduce((acumulador, item, posicion)=>{},0)







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