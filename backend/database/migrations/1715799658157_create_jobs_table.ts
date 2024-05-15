import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('business_id').unsigned().references('id').inTable('businesses').onDelete('CASCADE').notNullable()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.enum('job_type', ['full-time', 'part-time', 'contract', 'temporary', 'internship', 'volunteer']).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
