import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'business'

  async up() {
    this.schema.renameTable('business', 'businesses')
  }

  async down() {
    this.schema.renameTable('businesses', 'business')
  }
}
