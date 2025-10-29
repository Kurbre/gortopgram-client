import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

export interface IContainer
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		PropsWithChildren {}
