import { useEffect, useRef } from 'react'

export const useFocusFormInput = () => {
	const formRef = useRef<HTMLFormElement | null>(null)

	useEffect(() => {
		const form = formRef.current
		if (!form) return

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key !== 'Enter') return
			const target = e.target as HTMLElement
			if (target.tagName === 'TEXTAREA') return

			e.preventDefault()
			const focusable = Array.from(
				form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
					'input, textarea'
				)
			).filter(el => !el.disabled && el.offsetParent !== null)

			const index = focusable.indexOf(
				target as HTMLInputElement | HTMLTextAreaElement
			)
			if (index > -1 && index + 1 < focusable.length) {
				focusable[index + 1].focus()
			} else {
				form.requestSubmit()
			}
		}

		form.addEventListener('keydown', handleKeyDown)
		return () => form.removeEventListener('keydown', handleKeyDown)
	}, [])

	return formRef
}
