import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { register } from '../../api/register'
import { CreateUserInput } from '@/shared/graphql'

export const useRegister = (
	options?: UseMutationOptions<any, Error, CreateUserInput, unknown>
) =>
	useMutation({
		mutationKey: ['register'],
		mutationFn: (data: CreateUserInput) => register(data),
		...options
	})
