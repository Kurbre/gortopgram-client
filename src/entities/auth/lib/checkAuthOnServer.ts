import { cookies } from 'next/headers'
import { getProfile } from '../api/getProfile'

export const checkAuthOnServer = async () => {
	const cookieStore = await cookies()
	const cookie = cookieStore.get('session_auth')

	const res = await getProfile(true, cookie)

	return !!res
}
