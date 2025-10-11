class Persona{
  // Propiedades estáticas propias de Persona
  static especie="Homo sapiens^2"
  // Método estático de Persona, solo tendrán acceso a las propiedades estáticas
  static metodoStatic(){
    console.log(Persona.especie)
    console.log(this.especie)
    console.log(this.nombre) // undefined
  }
  // Constructor
  constructor(nombre,age){
    this.nombre=nombre
    this.age=age
    this.mayorEdad=(()=>{return age>=18})
  }
  toString(){
    return `mi nombre es ${this.nombre} y tengo ${this.age} años`
  }
  // Métodos
  saludar(tiempo){
    return tiempo+", "+this.toString()
  }
}

// persona1, persona2: son instancias
let persona1=new Persona("Luis",19)
let persona2=new Persona("Victoria",21)
persona2.name // Victoria
persona1.mayorEdad() // true
Persona.especie // Homo sapiens^2
persona2.saludar("Buenos tardes") // Buenos tardes, mi nombre es Victoria y tengo 21 años
Persona.metodoStatic()
// Homo sapiens^2
// Homo sapiens^2
// undefined