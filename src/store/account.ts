import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useAccount = defineStore('account', () => {
  const accountId = ref()

  const readAccountId = async () => {
    try {
      const response = await useApi.get('/user')
      accountId.value = response.data.data
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
