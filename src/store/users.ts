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

  type UserCreate = {
    department: string,
    email: string,
    name: string,
    role:number[]
  }
  const createUser = async (user:UserCreate) => {
    const response = await useApi.post('/user/', user)
    console.log(response)
  }

  const readUsers = async () => {
    const response = await useApi.get('/user/all')
    console.log(response)
    users.value = response.data.data
  }

  const activeUsers = computed(() => users.value?.filter(user => user.activate))

  const departments = computed(() => {
    const departments = activeUsers.value?.map(user => user.department).flat()
    return departments?.filter((role, index, array) => array.indexOf(role) === index)
  })

  return {
    users, createUser, readUsers, activeUsers, departments
  }
})

export {
  useUsers
}
