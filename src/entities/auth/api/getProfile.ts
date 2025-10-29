import { axiosMain } from '@/shared/axios'
import { IResponse } from '@/shared/types/response'
import { getProfileSchema } from '../model/schemas/getProfile'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { GetProfileQuery } from '@/shared/graphql'

export const getProfile = async (isSSR?: boolean, cookie?: RequestCookie) => {
	const res = await axiosMain.post<IResponse<GetProfileQuery>>(
		'',
		{
			query: getProfileSchema
		},
		{
			headers: isSSR
				? {
						'Cache-Control': 'no-cache, no-store, must-revalidate',
						Pragma: 'no-cache',
						Cookie: cookie ? `${cookie.name}=${cookie.value}` : ''
					}
				: {}
		}
	)

	if (res.data.errors && !isSSR) {
		throw new Error(res.data.errors.map(i => i.message).join('; '))
	}
	if (res.data.errors && isSSR) {
		return null
	}

	return isSSR ? res.data : res.data.data.getProfile
}
