export type IResponse<T> = {
	data: T
	errors: { message: string }[] | null
}
