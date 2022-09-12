import { defineStore } from 'pinia'
import { useApi } from '@/utilies/api'

const useUsers = defineStore('users', () => {
  type User = {
    activate: boolean,
    department: string,
    email: string,
    id: number,
    name: string,
    role:number[]
  }

  const users = ref<User[]>()

  const readUsers = async () => {
    const response = await useApi.get('/user/all')
    console.log(response)
    users.value = response.data.data
  }

  return {
    users, readUsers
  }
})

export {
  useUsers
}
