import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})
