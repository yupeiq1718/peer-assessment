import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useAccount = defineStore('account', () => {
  type Account = {
    activate: boolean,
    department: string,
    email: string,
    id: number,
    name: string,
    role:(1|2|3|4)[]
  }

  const accountId = ref()
  const account = ref<Account>()

  const readAccountId = async () => {
    try {
      const response = await useApi.get('/user')
      accountId.value = response.data.data.userId
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const setAccount = (value?:Account) => {
    account.value = value
  }

  return {
    accountId, account, readAccountId, setAccount
  }
})

export {
  useAccount
}
