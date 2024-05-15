import vine from '@vinejs/vine'

export const resendEmailValidator = vine.compile(
  vine.object({
    email: vine.string().email().toLowerCase()
  })
)
