import { axiosMain } from '@/shared/axios'
import { loginSchema } from '../model/schemas/login'
import { IResponse } from '@/shared/types/response'
import { LoginInput, LoginMutation } from '@/shared/graphql'

export const login = async (data: LoginInput) => {
	const res = await axiosMain.post<IResponse<LoginMutation>>('', {
		query: loginSchema,
		variables: { ...data }
	})

	if (res.data.errors) {
		throw new Error(res.data.errors.map(i => i.message).join('; '))
	} else {
		return res.data.data.login
	}
}
