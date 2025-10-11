class Animal{
  constructor(nombre){
    this.nombre=nombre
  }
  hablar(){
    console.log(`${this.nombre} es un animal`)
  }
}

// La clase Perro heredendo las propiedades de Animal
class Perro extends Animal{
  constructor(nombre,raza){
    super(nombre) // Se usa la fx super que llama el constructor del padre
    this.raza=raza
  }
  ladra(){
    console.log(`El ${this.raza}: Guau, guau`)
  }
}

// Creando instancias
let perro1=new Perro("Argos","Cocker")
perro1.hablar()
perro1.ladra()