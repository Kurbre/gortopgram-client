import { Auth } from '@/widgets/auth'
import { checkAuthOnServer } from '@/entities/auth/lib/checkAuthOnServer'

export default async function Home() {
	const isAuth = await checkAuthOnServer()

	return <>{isAuth ? 'Hello world!' : <Auth />}</>
}
