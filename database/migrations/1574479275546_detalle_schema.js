'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleSchema extends Schema {
  up () {
    this.create('detalles', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('descripcion',1000)
      table.string('tags',100)
      table.string('icono',100)
    })
  }

  down () {
    this.drop('detalles')
  }
}

module.exports = DetalleSchema
