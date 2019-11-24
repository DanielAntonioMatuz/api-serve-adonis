'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactoSchema extends Schema {
  up () {
    this.create('contactos', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('descripcion',100)
      table.string('campoNombre',100)
      table.string('campoCorreo',100)
      table.string('campoMensaje',100)
      table.string('boton',100)
    })
  }

  down () {
    this.drop('contactos')
  }
}

module.exports = ContactoSchema
