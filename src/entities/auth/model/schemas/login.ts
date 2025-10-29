import { gql } from 'graphql-request'

export const loginSchema = gql`
	mutation login($filter: String!, $password: String!) {
		login(loginInput: { filter: $filter, password: $password }) {
			_id
			email
			age
		}
	}
`
