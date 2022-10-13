import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useAccount = defineStore('account', () => {
  const accountId = ref()

  const readAccountId = async (type:string) => {
    try {
      const response = await useApi.get(`/user/${type}`)
      accountId.value = response.data.data.userId
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readToken = async ({ type, credential }: {
    type: string,
    credential:string
  }) => {
    try {
      const formData = new FormData()
      formData.append('credential', credential)
      const response = await useApi.post(`/user/${type}/callback`, formData)
      window.sessionStorage.setItem('access-token', response.data.token)
      return Promise.resolve(response)
    } catch (error) {
      window.sessionStorage.setItem('access-token', '')
      return Promise.reject(error)
    }
  }

  const deleteToken = async () => {
    try {
      const response = await useApi.post('/user/logout')
      window.sessionStorage.setItem('access-token', '')
      return Promise.resolve(response)
    } catch (error) {
      window.sessionStorage.setItem('access-token', '')
      return Promise.reject(error)
    }
  }

  return {
    accountId, readAccountId, readToken, deleteToken
  }
})

export {
  useAccount
}
