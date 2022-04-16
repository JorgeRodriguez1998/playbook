// pokemon.js

// Esta es una función que se guardara en este módulo como info
class pokemon {
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

// Esta clase se exporta en este módulo
module.exports = pokemon