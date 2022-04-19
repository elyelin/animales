const { expect } = require('chai')
//const assert = require('assert')
//const lista = require('../lista')
//const describe = require('mocha')
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
 },
 gatos: function(){
   //for (let i = 0; i < animales.length; i++) {
     //const element = array[i];
     // return this.animales[i].type === 'gato'
   //}
  // return this.animales.type === 'gato'
   // [this.animales[0].type]
   return [this.animales[0]]
   
 }
}


describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      const perros = [{
        type: 'perro'
      }]
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = [{
        type: 'gato'
      }]
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      expect(lista.otros()).to.equal(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      expect(animales.filter).to.have.been.called()
    })
  })
})