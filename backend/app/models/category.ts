import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Job from './job.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @belongsTo(() => Job)
  declare job: BelongsTo<typeof Job>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
