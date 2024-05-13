import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(256),
    type: vine.enum(["job_seeker", "employer"]).optional()
  })
)

export const updateUserValidor = vine.compile(
  vine.object({
    fullName: vine.string().optional(),
    email: vine.string().email().optional(),
    password: vine.string().minLength(8).maxLength(256).optional(),
    type: vine.enum(["job_seeker", "employer"]).optional()
  })
)
