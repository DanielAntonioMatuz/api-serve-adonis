'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeaderHabilidadSchema extends Schema {
  up () {
    this.create('header_habilidads', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('subtitulo',1000)
    })
  }

  down () {
    this.drop('header_habilidads')
  }
}

module.exports = HeaderHabilidadSchema
