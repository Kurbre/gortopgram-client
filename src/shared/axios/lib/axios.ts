import axios from 'axios'

export const axiosMain = axios.create({
	baseURL: process.env.API_URL || 'http://localhost:3002/graphql',
	withCredentials: true
})
