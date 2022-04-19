 const lista = {
     animales: [
         {
             type: 'perro'
         },
         {
             type: 'gato'
         }
     ],
    perros: function(){
        return [this.animales[0]]
    }
  }

 module.export = lista