<script setup lang="ts">
import { useUsers } from '@/store/users'

const tableFields = [
  {
    name: '姓名',
    key: 'name'
  },
  {
    name: '電子信箱',
    key: 'email',
    width: '40%'
  },
  {
    name: '部門',
    key: 'department',
    width: '20%'
  },
  {
    name: '角色',
    key: 'role',
    width: '20%'
  },
  {
    name: '功能',
    key: 'function'
  }
]

const variantList = ['success', 'alert', 'error', 'info', 'muted']

const roleMap = {
  1: '一般員工',
  2: '一般主管',
  3: '高級主管',
  4: '管理員'
}

const tableItems = computed(() => useUsers().filteredUsers?.map(user => ({
  name: user.name,
  email: user.email,
  department: user.department,
  role: user.role,
  function: user.id
})))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const getUsers = async () => {
  try {
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

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
    await getUsers()
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
  confirm: unknown
}
const setConfirmData:(data:ConfirmData) => void = inject('setConfirmData', () => null)

const handleUserRemove = (id:number) => {
  setConfirmData({
    isActive: true,
    confirm: () => removeUser(id)
  })
}

const router = useRouter()
const edit = (id:number) => router.push(`/admin/users/edit/${id}`)
</script>

<template>
  <div class="mx-5 my-2">
    <BaseTable
      :fields="tableFields"
      :items="tableItems"
    >
      <template #name="name">
        <div class="flex justify-start items-center">
          <img
            class="inline-block rounded-full w-16 max-w-none h-16 mx-4"
            src="@/assets/images/user.jpg"
            alt="user"
          >
          <span>
            {{ name.data }}
          </span>
        </div>
      </template>
      <template #email="email">
        {{ email.data }}
      </template>
      <template #department="department">
        <BaseTag variant="theme">
          {{ department.data }}
        </BaseTag>
      </template>
      <template #role="role">
        <BaseTag
          v-for="item of (role.data as (1|2|3|4)[])"
          :key="item"
          :variant="variantList[item - 1]"
          class="mx-1"
        >
          {{ roleMap[item] }}
        </BaseTag>
      </template>
      <template #function="id">
        <div>
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="edit"
            @click="edit(id.data)"
          />
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="delete"
            @click="handleUserRemove(id.data)"
          />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
