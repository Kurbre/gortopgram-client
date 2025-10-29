'use client'
import { AuthForm } from '@/entities/auth'
import { Container } from '@/shared/ui/container'
import img from '../assets/images/img.png'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import RegisterForm from '@/entities/auth/ui/RegisterForm'

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
			{param === 'register' ? <RegisterForm /> : <AuthForm />}
		</Container>
	)
}

export default Auth
