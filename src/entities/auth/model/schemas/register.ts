import { gql } from 'graphql-request'

export const registerSchema = gql`
	mutation register(
		$email: String!
		$password: String!
		$login: String!
		$phoneNumber: String!
		$username: String!
	) {
		register(
			createUserInput: {
				email: $email
				password: $password
				login: $login
				phoneNumber: $phoneNumber
				username: $username
			}
		) {
			_id
			email
			login
		}
	}
`
