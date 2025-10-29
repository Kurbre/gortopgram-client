'use client'
import { LoginForm, RegisterForm } from '@/entities/auth'
import { Container } from '@/shared/ui/container'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import img from '../assets/images/img.png'

const Auth = () => {
	const param = useSearchParams().get('auth')

	return (
		<Container className='flex justify-center gap-10 items-center min-h-screen'>
			<Image
				src={img}
				alt='Auth page image'
				width={520}
				height={450}
				className='max-w-[520px] w-full h-auto hidden sm:block'
				priority
			/>
			{param === 'register' ? <RegisterForm /> : <LoginForm />}
		</Container>
	)
}

export default Auth
