import vine from '@vinejs/vine'

export const createBusinessValidator = vine.compile(
  vine.object({
    name: vine.string(),
    longitude: vine.number(),
    latitude: vine.number(),
    location: vine.string(),
    rating: vine.number().optional(),
    userId: vine.number().optional()
  })
)

export const updateBusinessValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(255).optional(),
    longitude: vine.number().optional(),
    latitude: vine.number().optional(),
    location: vine.string().optional(),
    rating: vine.number().optional(),
    userId: vine.number().optional()
  })
)


