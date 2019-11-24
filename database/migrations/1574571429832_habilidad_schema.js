'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabilidadSchema extends Schema {
  up () {
    this.create('habilidads', (table) => {
      table.increments()
      table.timestamps()
      table.string('icono',100)
      table.string('titulo',100)
      table.string('descripcion',100)
      table.string('habilidad1',100)
      table.string('porcentaje1',10)
      table.string('habilidad2',100)
      table.string('porcentaje2',10)
      table.string('habilidad3',100)
      table.string('porcentaje3',10)
      table.string('habilidad4',100)
      table.string('porcentaje4',10)
    })
  }

  down () {
    this.drop('habilidads')
  }
}

module.exports = HabilidadSchema
