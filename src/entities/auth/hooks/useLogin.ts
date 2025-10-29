import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { login } from '../api/login'
import { LoginInput } from '@/shared/graphql/graphql'

export const useLogin = (
	options?: UseMutationOptions<any, Error, LoginInput, unknown>
) =>
	useMutation({
		mutationKey: ['login'],
		mutationFn: (data: LoginInput) => login(data),
		...options
	})
