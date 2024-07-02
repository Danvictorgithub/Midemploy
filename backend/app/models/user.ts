import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import EmailVerification from './email_verification.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Business from './business.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @hasOne(() => EmailVerification)
  declare emailVerification: HasOne<typeof EmailVerification>

  @hasOne(() => Business)
  declare business: HasOne<typeof Business>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare resume: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare type: 'job_seeker' | 'employer' | null;

  @column()
  declare isEmailVerified: boolean | null;

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
