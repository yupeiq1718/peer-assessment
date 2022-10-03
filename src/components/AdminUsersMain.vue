<script setup lang="ts">
import { useUsers } from '@/store/users'
import { departments, roleData, getVariants } from '@/utilities/data'
import { Ref } from 'vue'

const tableFields = [
  {
    name: '姓名',
    key: 'profile'
  },
  {
    name: '電子信箱',
    key: 'email',
    width: '25%'
  },
  {
    name: '部門',
    key: 'department',
    width: '10%'
  },
  {
    name: '角色',
    key: 'roles',
    width: '25%'
  },
  {
    name: '主管',
    key: 'manager'
  },
  {
    name: '功能',
    key: 'function'
  }
]

const activeUsers = computed(() => useUsers().activeUsers)

const filterDepartment:Ref<string> = inject('filterDepartment', ref(''))
const filterRoles:Ref<0|1|2|3|4> = inject('filterRoles', ref(0))

const filteredUsers = computed(() => activeUsers.value?.filter(user => (!filterDepartment.value || user.department === filterDepartment.value) && (!filterRoles.value || user.roles.includes(filterRoles.value))))

const tableItems = computed(() => filteredUsers.value?.map(user => ({
  profile: {
    name: user.name,
    picture: user.picture
  },
  email: user.email,
  department: user.department,
  roles: user.roles,
  manager: user.manager,
  function: user.id
})))

const departmentIndex = (value:string) => departments.findIndex(department => value === department.value)

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const removeUser = async (id:number) => {
  try {
    setIsLoading(true)
    const response = await useUsers().deleteUser(id)
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '刪除成功'
    })
    await useUsers().readUsers()
  } catch (error) {
    console.log(error)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '刪除失敗'
    })
  } finally {
    setIsLoading(false)
  }
}

type ConfirmData = {
  isActive: boolean,
  confirm: unknown,
  text: string
}
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleUserRemove = (id:number) => {
  setConfirmData({
    isActive: true,
    confirm: () => removeUser(id),
    text: '請確認是否刪除該筆資料？'
  })
}

const router = useRouter()
const edit = (id:number) => router.push(`/admin/users/edit/${id}`)
</script>

<template>
  <BaseTable
    :fields="tableFields"
    :items="tableItems"
  >
    <template #profile="profile">
      <div class="flex justify-start items-center">
        <img
          class="inline-block rounded-full w-14 2xl:w-16 max-w-none h-14 2xl:h-16 bg-light mx-3 2xl:mx-4"
          :src="profile.data.picture ||'/user.png'"
          alt="user"
        >
        <span class="text-sm 2xl:text-base">
          {{ profile.data.name }}
        </span>
      </div>
    </template>
    <template #email="email">
      <span class="text-sm 2xl:text-base text-muted">
        {{ email.data }}
      </span>
    </template>
    <template #department="department">
      <BaseTag :variant="getVariants(departmentIndex(department.data))">
        <span class="text-sm 2xl:text-base">
          {{ department.data }}
        </span>
      </BaseTag>
    </template>
    <template #roles="roles">
      <BaseTag
        v-for="item of (roles.data as (1|2|3|4)[])"
        :key="item"
        :variant="getVariants(item - 1)"
        class="mx-1"
      >
        <span class="text-sm 2xl:text-base">
          {{ roleData[item - 1].text }}
        </span>
      </BaseTag>
    </template>
    <template #manager="manager">
      <div
        v-if="manager.data"
        class="flex justify-start items-center"
      >
        <img
          class="inline-block rounded-full w-14 2xl:w-16 max-w-none h-14 2xl:h-16 bg-light mx-3 2xl:mx-4"
          :src="manager.data.picture ||'/user.png'"
          alt="user"
        >
        <span class="text-sm 2xl:text-base">
          {{ manager.data.name }}
        </span>
      </div>
    </template>
    <template #function="id">
      <div>
        <BaseSvgIcon
          role="button"
          class="w-5 2xl:w-6 h-5 2xl:h-6 m-1 2xl:m-2 fill-muted hover:fill-theme hover:animate-bounce"
          name="edit"
          @click="edit(id.data)"
        />
        <BaseSvgIcon
          role="button"
          class="w-5 2xl:w-6 h-5 2xl:h-6 m-1 2xl:m-2 fill-muted hover:fill-theme hover:animate-bounce"
          name="delete"
          @click="handleUserRemove(id.data)"
        />
      </div>
    </template>
  </BaseTable>
</template>
