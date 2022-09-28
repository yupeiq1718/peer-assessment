import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useUsers = defineStore('users', () => {
  type User = {
    activate: boolean,
    department: string,
    email: string,
    id: number,
    name: string,
    role:(1|2|3|4)[],
    picture:string,
    manager: {
      id: number,
      picture: string,
      name: string
    }
  }

  const users = ref<User[]>()

  type UserCreate = {
    department: string,
    email: string,
    name: string,
    role:(1|2|3|4)[],
    managerId?: number
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
      const response = await useApi.get('/users')
      users.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  type UserUpdate = {
    name: string,
    department: string,
    role:(1|2|3|4)[],
    managerId?: number
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

  // const departments = computed(() => {
  //   const departments = activeUsers.value?.map(user => user.department).flat()
  //   return departments?.filter((role, index, array) => array.indexOf(role) === index)
  // })

  type FilterData = {
    department: string,
    role: 0|1|2|3|4
  }
  const filterData = ref<FilterData>({
    department: '',
    role: 0
  })

  const setFilterData = (values: FilterData) => {
    filterData.value = values
  }

  const filteredUsers = computed(() => activeUsers.value?.filter(user => (!filterData.value.department || user.department === filterData.value.department) && (!filterData.value.role || user.role.includes(filterData.value.role))))

  return {
    users, createUser, readUsers, updateUser, deleteUser, user, activeUsers, filterData, setFilterData, filteredUsers
  }
})

export {
  useUsers
}
