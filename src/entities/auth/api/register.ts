import { axiosMain } from '@/shared/axios'
import { IResponse } from '@/shared/types/response'
import { CreateUserInput } from '@/shared/graphql/graphql'
import { registerSchema } from '../model/schemas/register'
import { RegisterMutation } from '@/shared/types/graphql'

export const register = async (data: CreateUserInput) => {
	const res = await axiosMain.post<IResponse<RegisterMutation>>('', {
		query: registerSchema,
		variables: { ...data }
	})

	if (res.data.errors) {
		throw new Error(res.data.errors.map(i => i.message).join('; '))
	} else {
		return res.data.data.register
	}
}
