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

  return {
    accountId, readAccountId
  }
})

export {
  useAccount
}
