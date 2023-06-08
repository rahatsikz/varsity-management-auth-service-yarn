import { z } from 'zod'

const createUserZodSchema = z.object({
  role: z.string({
    required_error: 'role is required',
  }),
  password: z.string().optional(),
})

export const userValidate = {
  createUserZodSchema,
}