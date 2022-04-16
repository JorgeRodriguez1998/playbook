//Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js.
// Deberás exportarla usando ESM.
//Necesitarás usar export default.
//La clase tiene la misma implementación que el ejercicio anterior.
//Finalmente corre: node main.js

// pokemon.js


export default class pokemon {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }
  
  
    // método
    // this.name es la variable que se guarda en el contexto local
    
    sayHello() {
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
  
    // método
    // message es una variable que se le pasa al ejecutar este método
    sayMessage(message) {
      console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
  }
  