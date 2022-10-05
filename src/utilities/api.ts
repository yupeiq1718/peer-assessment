import axios, { AxiosResponse, AxiosError } from 'axios'
import router from '@/router'
import { useConfirm } from '@/store/confirm'

const useApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 10000
})

useApi.interceptors.request.use(request => {
  request.headers.Authorization = window.sessionStorage.getItem('access-token')
  console.log(request)
  return Promise.resolve(request)
}, error => {
  return Promise.reject(error)
})

useApi.interceptors.response.use((response:AxiosResponse) => {
  return Promise.resolve(response)
}, (error:AxiosError) => {
  if (error.response?.status === 401) {
    useConfirm().setConfirmData({
      isActive: true,
      confirm: () => router.push('/'),
      text: '登入時效已到期，請重新登入'
    })
  }
  return Promise.reject(error)
})

export {
  useApi
}
