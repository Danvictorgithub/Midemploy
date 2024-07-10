import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Category from './category.js'
import Business from './business.js'

export default class Job extends BaseModel {
  @belongsTo(() => Business)
  declare business: BelongsTo<typeof Business>
  @hasOne(() => Category)
  declare category: HasOne<typeof Category>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare category_id: number

  @column()
  declare job_type: "full-time" | "part-time" | "contract" | "temporary" | "internship" | "volunteer"

  @column()
  declare business_id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
