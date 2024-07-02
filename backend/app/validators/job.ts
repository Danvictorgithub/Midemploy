import vine from '@vinejs/vine'

export const createJobValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(1).maxLength(255),
    description: vine.string().trim().minLength(1).maxLength(8192),
    category_id: vine.number().withoutDecimals(),
    job_type: vine.enum(["full-time", "part-time", "contract", "temporary", "internship", "volunteer"]),
    business_id: vine.number().withoutDecimals()
  })
)
