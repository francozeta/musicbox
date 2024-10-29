import * as z from 'zod'

export const ReviewValidation = z.object({
  review: z.string().nonempty().min(3, { message: 'Minimum 3 characters.' }),
  accountId: z.string()
})

export const CommentValidation = z.object({
  review: z.string().nonempty().min(3, { message: 'Minimum 3 characters.' }),
})