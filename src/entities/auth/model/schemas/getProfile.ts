import { gql } from 'graphql-request'

export const getProfileSchema = gql`
	query getProfile {
		getProfile {
			_id
			email
		}
	}
`
