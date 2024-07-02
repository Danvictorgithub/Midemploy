import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine.string().email().toLowerCase(),
    password: vine.string().minLength(8).maxLength(256),
    type: vine.enum(["job_seeker", "employer"]).optional()
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().optional(),
    email: vine.string().email().toLowerCase().optional(),
    password: vine.string().minLength(8).maxLength(256).optional(),
    type: vine.enum(["job_seeker", "employer"]).optional()
  })
)
