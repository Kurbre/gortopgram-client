import { GraphQLClient } from 'graphql-request'
// @ts-ignore
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	DateTime: { input: any; output: any }
}

export type CreatePostInput = {
	imageUrl?: InputMaybe<Scalars['String']['input']>
	tags?: Array<Scalars['String']['input']>
	text?: InputMaybe<Scalars['String']['input']>
	type?: PostType
	videoUrl?: InputMaybe<Scalars['String']['input']>
}

export type CreateUserInput = {
	email: Scalars['String']['input']
	login: Scalars['String']['input']
	password: Scalars['String']['input']
	phoneNumber: Scalars['String']['input']
	username: Scalars['String']['input']
}

export type LoginInput = {
	filter: Scalars['String']['input']
	password: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	createPost: PostEntity
	deletePost: Scalars['String']['output']
	login: UserEntity
	logout: Scalars['String']['output']
	register: UserEntity
	updateUser: UserEntity
}

export type MutationCreatePostArgs = {
	createPostInput: CreatePostInput
}

export type MutationDeletePostArgs = {
	id: Scalars['String']['input']
}

export type MutationLoginArgs = {
	loginInput: LoginInput
}

export type MutationRegisterArgs = {
	createUserInput: CreateUserInput
}

export type MutationUpdateUserArgs = {
	updateUserInput: UpdateUserInput
}

export type PostEntity = {
	__typename?: 'PostEntity'
	createdAt: Scalars['DateTime']['output']
	id: Scalars['ID']['output']
	imageUrl?: Maybe<Scalars['String']['output']>
	tags: Array<Scalars['String']['output']>
	text?: Maybe<Scalars['String']['output']>
	type: PostType
	updatedAt: Scalars['DateTime']['output']
	user: UserEntity
	videoUrl?: Maybe<Scalars['String']['output']>
}

/** Тип поста: текст, картинка или видео */
export enum PostType {
	Image = 'IMAGE',
	Text = 'TEXT',
	Video = 'VIDEO'
}

export type Query = {
	__typename?: 'Query'
	findAllPosts: Array<PostEntity>
	findPostById: PostEntity
	getProfile: UserEntity
}

export type QueryFindAllPostsArgs = {
	limit?: InputMaybe<Scalars['Float']['input']>
	skip?: InputMaybe<Scalars['Float']['input']>
	userId?: InputMaybe<Scalars['String']['input']>
}

export type QueryFindPostByIdArgs = {
	id: Scalars['String']['input']
}

export type UpdateUserInput = {
	email?: InputMaybe<Scalars['String']['input']>
	id: Scalars['Int']['input']
	login?: InputMaybe<Scalars['String']['input']>
	password?: InputMaybe<Scalars['String']['input']>
	phoneNumber?: InputMaybe<Scalars['String']['input']>
	username?: InputMaybe<Scalars['String']['input']>
}

export type UserEntity = {
	__typename?: 'UserEntity'
	_id: Scalars['ID']['output']
	age?: Maybe<Scalars['Float']['output']>
	email: Scalars['String']['output']
	login: Scalars['String']['output']
	phoneNumber: Scalars['String']['output']
	posts: Array<PostEntity>
	username: Scalars['String']['output']
}

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileQuery = {
	__typename?: 'Query'
	getProfile: { __typename?: 'UserEntity'; _id: string; email: string }
}

export type LoginMutationVariables = Exact<{
	filter: Scalars['String']['input']
	password: Scalars['String']['input']
}>

export type LoginMutation = {
	__typename?: 'Mutation'
	login: {
		__typename?: 'UserEntity'
		_id: string
		email: string
		age?: number | null
	}
}

export type RegisterMutationVariables = Exact<{
	email: Scalars['String']['input']
	password: Scalars['String']['input']
	login: Scalars['String']['input']
	phoneNumber: Scalars['String']['input']
	username: Scalars['String']['input']
}>

export type RegisterMutation = {
	__typename?: 'Mutation'
	register: {
		__typename?: 'UserEntity'
		_id: string
		email: string
		login: string
	}
}

export const GetProfileDocument = gql`
	query getProfile {
		getProfile {
			_id
			email
		}
	}
`
export const LoginDocument = gql`
	mutation login($filter: String!, $password: String!) {
		login(loginInput: { filter: $filter, password: $password }) {
			_id
			email
			age
		}
	}
`
export const RegisterDocument = gql`
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

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
	operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
	action,
	_operationName,
	_operationType
) => action()

export function getSdk(
	client: GraphQLClient,
	withWrapper: SdkFunctionWrapper = defaultWrapper
) {
	return {
		getProfile(
			variables?: GetProfileQueryVariables,
			requestHeaders?: Dom.RequestInit['headers']
		): Promise<GetProfileQuery> {
			return withWrapper(
				wrappedRequestHeaders =>
					client.request<GetProfileQuery>(GetProfileDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'getProfile',
				'query'
			)
		},
		login(
			variables: LoginMutationVariables,
			requestHeaders?: Dom.RequestInit['headers']
		): Promise<LoginMutation> {
			return withWrapper(
				wrappedRequestHeaders =>
					client.request<LoginMutation>(LoginDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'login',
				'mutation'
			)
		},
		register(
			variables: RegisterMutationVariables,
			requestHeaders?: Dom.RequestInit['headers']
		): Promise<RegisterMutation> {
			return withWrapper(
				wrappedRequestHeaders =>
					client.request<RegisterMutation>(RegisterDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'register',
				'mutation'
			)
		}
	}
}
export type Sdk = ReturnType<typeof getSdk>
