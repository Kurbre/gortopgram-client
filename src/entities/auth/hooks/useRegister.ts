import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { CreateUserInput } from '@/shared/graphql/graphql'
import { register } from '../api/register'

export const useRegister = (
	options?: UseMutationOptions<any, Error, CreateUserInput, unknown>
) =>
	useMutation({
		mutationKey: ['register'],
		mutationFn: (data: CreateUserInput) => register(data),
		...options
	})
