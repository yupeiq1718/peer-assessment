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
    try {
      const response = await useApi.post('/user/', user)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readUsers = async () => {
    try {
      const response = await useApi.get('/user/all')
      users.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  type UserUpdate = {
    name: string,
    department: string
  }

  const updateUser = async ({ id, user }:{
    id:number,
    user:UserUpdate
  }) => {
    try {
      const response = await useApi.put(`/user/${id}`, user)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const deleteUser = async (id:number) => {
    try {
      const response = await useApi.delete(`/user/${id}`)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const activeUsers = computed(() => users.value?.filter(user => user.activate))

  const user = computed(() => (id:number) => activeUsers.value?.find(user => user.id === id))

  const departments = computed(() => {
    const departments = activeUsers.value?.map(user => user.department).flat()
    return departments?.filter((role, index, array) => array.indexOf(role) === index)
  })

  return {
    users, createUser, readUsers, updateUser, deleteUser, user, activeUsers, departments
  }
})

export {
  useUsers
}
