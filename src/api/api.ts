import axios, { AxiosInstance } from 'axios';

const url: string = import.meta.env.VITE_URL

export const api: AxiosInstance = axios.create({
  baseURL: url
})