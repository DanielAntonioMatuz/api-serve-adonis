'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('subtitulo',100)
      table.string('tag',100)
      table.string('nombre',100)
      table.string('descripcion',100)
      table.string('imagen',100)
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
