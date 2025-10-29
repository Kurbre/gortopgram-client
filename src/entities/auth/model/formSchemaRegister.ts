import { z } from 'zod'

export const formSchemaRegister = z.object({
	email: z.string().email('Неверный email'),
	login: z.string().min(2, 'Введите логин'),
	password: z
		.string()
		.min(6, 'Минимум 6 символов')
		.max(32, 'Максимум 32 символа'),
	phoneNumber: z
		.string()
		.regex(/^\d{10,13}$/, 'Номер должен содержать от 10 до 13 цифр'),
	username: z.string().min(2, 'Введите имя и фамилию')
})

export type FormSchemaRegister = z.infer<typeof formSchemaRegister>
