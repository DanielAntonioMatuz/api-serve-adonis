'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeSchema extends Schema {
  up () {
    this.create('homes', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo',100)
      table.string('descripcion',1000)
      table.string('tags',1000);
    })
  }

  down () {
    this.drop('homes')
  }
}

module.exports = HomeSchema
