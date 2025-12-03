// Nunca modifican el valor original
const nums = [0, 1, 2, 3, 4, 5, 6]

// map
const doble = nums.map(num => num*2)
//nums.map((value, posicion) => {})
  
// filter
const menores4=nums.filter(num => num<4)
// nums.filter((value, posicion)=>{})

// reduce
const sumar=nums.reduce((acc, num)=>{acc+num}, 0)
// nums.reduce((acumulador, value, posicion)=>{}, 0)







// Concatenando strs con reduce
const strs=["I","Love","Tú"]
const sumaStrs=strs.reduce((str,value)=>{return str+value},"")
console.log(sumaStrs)

// Calculando el promedio de edad con reduce
const objs=[
  {name:"Oriana", edad:21, smash:true},
  {name:"Fernanda", edad:25, smash:false}
]
const edadPromedio=objs.reduce((acc,value)=>{
  return acc+value.edad
},0)/objs.length
console.log(edadPromedio)

// Calculando el mayor de un arr con reduce
const mayor=nums.reduce((acc,value)=>{
  return Math.max(acc,value)
})
console.log(mayor)