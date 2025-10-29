import { FC } from 'react'
import cn from 'classnames'
import { IContainer } from '../model/types'

const Container: FC<IContainer> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn('max-w-[1500px] mx-auto my-0 px-4', className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Container
