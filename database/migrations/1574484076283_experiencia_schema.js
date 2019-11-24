'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienciaSchema extends Schema {
  up () {
    this.create('experiencias', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('subtitulo',100)
      table.string('icono',100)
      table.string('categoria',100)
      table.string('descripcion',1000)
      table.string('dominio1',100)
      table.string('dominio2',100)
      table.string('dominio3',100)
    })
  }

  down () {
    this.drop('experiencias')
  }
}

module.exports = ExperienciaSchema
