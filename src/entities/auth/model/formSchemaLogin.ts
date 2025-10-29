import { z } from 'zod'

export const formSchemaLogin = z.object({
	filter: z.string().min(2, 'Минимум 2 символа'),
	password: z
		.string()
		.min(6, 'Минимум 6 символов')
		.max(32, 'Максимум 32 символа')
})

export type FormSchemaLogin = z.infer<typeof formSchemaLogin>
