import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'business'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').unique().notNullable().onDelete('CASCADE')
      table.string('name', 255).notNullable()
      table.decimal('rating', 2, 1).notNullable().defaultTo(0)
      table.string('location', 255).notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 10, 8).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
