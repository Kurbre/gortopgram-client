'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren, useState } from 'react'
import { QueryClient } from '@tanstack/query-core'

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default Provider
