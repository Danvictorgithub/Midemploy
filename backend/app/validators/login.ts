import vine from '@vinejs/vine'

export const loginValidtor = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(256)
  })
)
