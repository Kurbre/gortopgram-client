'use client'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useLogin } from '../lib/hooks/useLogin'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { formSchemaLogin, FormSchemaLogin } from '../model/formSchemaLogin'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFocusFormInput } from '../lib/hooks/useFocusFormInput'

const LoginForm = () => {
	const router = useRouter()
	const { register, handleSubmit, formState } = useForm<FormSchemaLogin>({
		mode: 'onChange',
		resolver: zodResolver(formSchemaLogin)
	})
	const { mutate } = useLogin({
		onSuccess: () => {
			toast.success('Вы успешно вошли в аккаунт.')
			router.refresh()
		},
		onError: error => toast.error(error.message)
	})
	const ref = useFocusFormInput()

	const submitHandler = (data: FormSchemaLogin) => {
		mutate(data)
	}

	return (
		<form
			className='flex flex-col gap-5'
			onSubmit={handleSubmit(submitHandler)}
			ref={ref}
		>
			<h3 className='text-4xl font-bold text-center font-serif'>GortopGram</h3>
			<Input
				placeholder='Моб. телефон или эл.адрес или логин'
				className='min-w-[300px]'
				{...register('filter')}
			/>
			{formState.errors.filter?.message && (
				<span className='text-red-600 text-xs -my-4 ml-2.5'>
					{formState.errors.filter?.message}
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
			<Button className='cursor-pointer bg-blue-600'>Войти</Button>
			<div className='flex gap-5 justify-center items-center'>
				<div className='w-full bg-gray-400 h-[1px]' />
				<span>Или</span>
				<div className='w-full bg-gray-400 h-[1px]' />
			</div>
			<Button variant='link' className='text-gray-400 -mt-5'>
				<Link href='/'>Забыли пароль?</Link>
			</Button>
			<span className='-mt-3'>
				У вас нету аккаунта?
				<Button variant='link' className='-ml-2'>
					<Link href='/?auth=register' className='text-blue-600'>
						Зарегестрироваться
					</Link>
				</Button>
			</span>
		</form>
	)
}

export default LoginForm
