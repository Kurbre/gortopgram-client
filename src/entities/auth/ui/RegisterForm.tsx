'use client'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useRegister } from '../lib/hooks/useRegister'
import { useFocusFormInput } from '../lib/hooks/useFocusFormInput'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
	formSchemaRegister,
	type FormSchemaRegister
} from '../model/formSchemaRegister'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginForm = () => {
	const router = useRouter()
	const { register, handleSubmit, formState } = useForm<FormSchemaRegister>({
		mode: 'onChange',
		resolver: zodResolver(formSchemaRegister)
	})
	const { mutate } = useRegister({
		onSuccess: () => {
			toast.success('Вы успешно создали аккаунт.')
			router.refresh()
		},
		onError: error => toast.error(error.message)
	})
	const ref = useFocusFormInput()

	const submitHandler = (data: FormSchemaRegister) => {
		mutate(data)
	}

	return (
		<form
			className='flex flex-col gap-5'
			onSubmit={handleSubmit(submitHandler)}
			ref={ref}
		>
			<h3 className='text-4xl font-bold text-center font-serif'>GortopGram</h3>
			<div className='flex justify-center'>
				<span className='max-w-[300px] text-center'>
					Зарегестрируйтесь в GortopGram, чтобы общаться и смотреть за жизнью
					ваших друзей
				</span>
			</div>
			<Input
				placeholder='Эл. адрес'
				className='min-w-[300px]'
				{...register('email')}
			/>
			{formState.errors.email?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.email?.message}
				</span>
			)}
			<Input
				placeholder='Номер телефона'
				className='min-w-[300px]'
				{...register('phoneNumber')}
			/>
			{formState.errors.phoneNumber?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.phoneNumber?.message}
				</span>
			)}
			<Input
				placeholder='Логин'
				className='min-w-[300px]'
				{...register('login')}
			/>
			{formState.errors.login?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.login?.message}
				</span>
			)}
			<Input
				placeholder={'Имя и фамилия'}
				className='min-w-[300px]'
				{...register('username')}
			/>
			{formState.errors.username?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.username?.message}
				</span>
			)}
			<Input
				type='password'
				placeholder='Пароль'
				className='min-w-[300px]'
				{...register('password')}
			/>
			{formState.errors.password?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.password?.message}
				</span>
			)}
			<Button className='cursor-pointer bg-blue-600'>Зарегестрироваться</Button>
			<span className='-mt-3 text-center'>
				Есть аккаунт?
				<Button variant='link' className='-ml-2'>
					<Link href='/' className='text-blue-600'>
						Войти
					</Link>
				</Button>
			</span>
		</form>
	)
}

export default LoginForm
