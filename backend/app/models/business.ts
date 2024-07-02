import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Job from './job.js'

export default class Business extends BaseModel {
  @hasMany(() => Job)
  declare jobs: HasMany<typeof Job>
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare rating: number

  @column()
  declare location: string

  @column()
  declare longitude: number

  @column()
  declare latitude: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
