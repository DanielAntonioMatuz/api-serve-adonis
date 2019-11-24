'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabilidadTituloSchema extends Schema {
  up () {
    this.create('habilidad_titulos', (table) => {
      table.increments()
      table.timestamps()
      table.string('icono',100)
      table.string('titulo',100)
      table.string('descripcion',100)
    })
  }

  down () {
    this.drop('habilidad_titulos')
  }
}

module.exports = HabilidadTituloSchema
