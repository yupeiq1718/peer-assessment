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
      console.log({ credential })
      const formData = new FormData()
      formData.append('credential', credential)
      console.log(formData)
      const response = await useApi.post(`/user/${type}/callback`, formData)
      window.sessionStorage.setItem('access-token', response.data.token)
      return Promise.resolve(response)
    } catch (error) {
      window.sessionStorage.setItem('access-token', '')
      return Promise.reject(error)
    }
  }

  return {
    accountId, readAccountId, readToken
  }
})

export {
  useAccount
}
