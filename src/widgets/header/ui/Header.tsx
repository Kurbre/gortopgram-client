import { Container } from '@/shared/ui/container'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { Input } from '@/shared/ui/input'

const Header = () => {
	return (
		<header className='bg-white shadow-md'>
			<Container className='flex justify-between items-center p-4'>
				<Link href='/' className='text-blue-600 text-2xl font-bold'>
					GortopGram
				</Link>
				<div className='w-2/3 relative'>
					<Input className='outline-none px-10' placeholder='Поиск...' />
					<span className='absolute left-3 top-2'>
						<FiSearch size={21} color='silver' />
					</span>
				</div>
				<div className=''>123</div>
			</Container>
		</header>
	)
}

export default Header
