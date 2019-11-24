'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EducacionSchema extends Schema {
  up () {
    this.create('educacions', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('subtitulo',100)
      table.string('escuela1',100)
      table.string('escuela2',100)
      table.string('imagen1',100)
      table.string('imagen2',100)
      table.string('descripcion1',100)
      table.string('descripcion2',100)
    })
  }

  down () {
    this.drop('educacions')
  }
}

module.exports = EducacionSchema
