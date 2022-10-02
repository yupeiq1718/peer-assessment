<script setup lang="ts">
import { useUsers } from '@/store/users'
import { departments, roleData, getVariants } from '@/utilities/data'

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

const tableItems = computed(() => useUsers().filteredUsers?.map(user => ({
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
          class="inline-block rounded-full w-16 max-w-none h-16 bg-light mx-4"
          :src="profile.data.picture ||'/user.png'"
          alt="user"
        >
        <span>
          {{ profile.data.name }}
        </span>
      </div>
    </template>
    <template #email="email">
      {{ email.data }}
    </template>
    <template #department="department">
      <BaseTag :variant="getVariants(departmentIndex(department.data))">
        {{ department.data }}
      </BaseTag>
    </template>
    <template #roles="roles">
      <BaseTag
        v-for="item of (roles.data as (1|2|3|4)[])"
        :key="item"
        :variant="getVariants(item - 1)"
        class="mx-1"
      >
        {{ roleData[item - 1].text }}
      </BaseTag>
    </template>
    <template #manager="manager">
      <div
        v-if="manager.data"
        class="flex justify-start items-center"
      >
        <img
          class="inline-block rounded-full w-16 max-w-none h-16 bg-light mx-4"
          :src="manager.data.picture ||'/user.png'"
          alt="user"
        >
        <span>
          {{ manager.data.name }}
        </span>
      </div>
    </template>
    <template #function="id">
      <div>
        <BaseSvgIcon
          role="button"
          class="w-6 h-6 m-2 fill-muted hover:fill-theme hover:animate-bounce"
          name="edit"
          @click="edit(id.data)"
        />
        <BaseSvgIcon
          role="button"
          class="w-6 h-6 m-2 fill-muted hover:fill-theme hover:animate-bounce"
          name="delete"
          @click="handleUserRemove(id.data)"
        />
      </div>
    </template>
  </BaseTable>
</template>
